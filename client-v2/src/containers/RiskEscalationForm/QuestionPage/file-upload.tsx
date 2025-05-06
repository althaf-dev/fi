import React, { useRef } from 'react';
import styled from 'styled-components';
import logger from '@/utils/logger';
import { CLOSE_ICON_URL, protoToHtmlFileType, FileContentType } from '../constants';
import Image from '@/Abstract/Image/Image';

import { Device } from '@/Themes/Device';

const FileUploadWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 3px;
  border-radius: 19px;
  background: white;
  margin: 10px 0 5px 0;

  .file-upload {
    display: none;
  }

  .col-input {
    flex-basis: 90px;
  }

  .col-placeholder{
    flex-basis: calc(100% - 90px);
  }

  .col {

    .browser-file {
        text-align: right;

        button {
            font-family: Gilroy;
            font-weight: 600;
            padding:5px 6px; 
            border: none;
            outline: none;
            border-radius: 20px;
            text-transform: none;
            transition: 0.1s ease;
            background-color: #00B899;
            color: #FFFFFF;
            cursor: pointer;
            letter-spacing: 0.45px;
            box-shadow: 0px 4px 0px 0px #00866F;
            margin-right: 7px;
            font-size: 10px;
            gap: 8px;
          }

          .action {
            display: inline-block;
            text-align: center;

            .sub-title {
                font-family: Gilroy;
                margin-top: 4px;
                font-size: 8px;
                display: block;
                font-style: italic;
            }

            .cross-btn {
                all: unset;
            }

            img {
                height: 25px;
                width: 25px;
                display: inline;
                object-fit: contain;
                cursor: pointer;
            }
          }
    }

    .placeholder-section {
        height: 100%;
        margin-left: 20px;
        align-items: center;
        display: flex;
        .title {
            font-family: Gilroy;
            line-height: 10px;
            letter-spacing: 0.4px;
            text-align: left;
            font-size: 12px;
            font-weight: 600;
            color: #878A8D;
        }
    
        .sub-title {
            font-family: Gilroy;
            line-height: 14px;
            letter-spacing: 0.4px;
            text-align: left;
            color: #000;
            font-size: 12px;
            line-height: 24px;
            letter-spacing: 0em;
            font-style: italic;
        } 
    }
  }


    @media ${Device.desktop} {
        width: 100%;
        display: flex;
        padding: 8px;
        border-radius: 19px;
        background: white;
        margin: 10px 0 10px 0;
      
        .file-upload {
          display: none;
        }

        .col-input {
            flex-basis: 50%;
          }
        
          .col-placeholder{
            flex-basis: 50%;
          }
      
        .col {
          
          
          .browser-file {
              text-align: right;
      
              button {
                  font-family: Gilroy;
                  font-weight: 600;
                  padding: 9px 17px; 
                  border: none;
                  outline: none;
                  border-radius: 20px;
                  text-transform: none;
                  transition: 0.1s ease;
                  background-color: #00B899;
                  color: #FFFFFF;
                  cursor: pointer;
                  letter-spacing: 0.45px;
                  box-shadow: 0px 4px 0px 0px #00866F;
                  margin-right: 20px;
                  font-size: 16px;
                  gap: 8px;
                }
      
                .action {
                  display: inline-block;
                  text-align: center;
      
                  .sub-title {
                      margin-top: 4px;
                      font-size: 8px;
                      display: block;
                      font-style: italic;
                  }
      
                  .cross-btn {
                      all: unset;
                  }
      
                  img {
                      height: 25px;
                      width: 25px;
                      display: inline;
                      object-fit: contain;
                      cursor: pointer;
                  }
                }
          }

          .placeholder-text {
            font-family: Gilroy;
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            letter-spacing: 0.5;
            text-align: left;
            color: #878A8D;
          }
      
          .placeholder-section {
              height: 100%;
              margin-left: 20px;
              align-items: center;
              display: flex;
              .title {
                  font-family: Gilroy;
                  line-height: 14px;
                  letter-spacing: 0.4px;
                  text-align: left;
                  font-size: 14px;
                  font-weight: 600;
                  color: #878A8D;
              }
          
              .sub-title {
                  font-family: Gilroy;
                  line-height: 14px;
                  letter-spacing: 0.4px;
                  text-align: left;
                  font-size: 12px;
                  line-height: 24px;
                  letter-spacing: 0em;
                  font-style: italic;
              } 
          }
        }
    }
`;

const TooltipWrapper = styled.div`
    .tooltip {
        position: relative;
        display: inline-block;
    }
    
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 10px;
        word-wrap: break-word;
    }
    
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
    
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
  `;

const textTrimTooltip = (strValue: any, stringLength: number) => {
    if (typeof strValue === 'string' && strValue.length > stringLength) {
        return (
            <TooltipWrapper>
                <div className='tooltip'>
                    {`${strValue.substring(0, stringLength)}...`}
                    <span className='tooltiptext'>{strValue}</span>
                </div>
            </TooltipWrapper>
        );
    }
    return strValue || '';
};

function FileBrowser(props: any) {
    const {
        onChange, fieldOptions, value = {
            file_content_type: '',
            name: '',
            file_content: null,
            size: ''
        }, removeQuestionResponse,
        questionKey,
        updateValidationState,
        placeholder,
    } = props;

    const { file_field_options: { allowed_types: allowedType, max_size_limit: maxSizeLimit } } = fieldOptions;

    const fileRef = useRef<any>(null);
    const onFileBrowse = () => {
        fileRef.current?.click();
    };

    const onFileUpload = async () => {
        try {
            if (typeof fileRef.current?.files === 'object' && fileRef.current?.files) {
                const fileContent = fileRef.current?.files['0'];
                if (protoToHtmlFileType[allowedType] && protoToHtmlFileType[allowedType] === fileContent.type) {
                    if (fileContent.size < maxSizeLimit * 1024) {
                        onChange(fileContent, maxSizeLimit);
                    } else {
                        updateValidationState({ [questionKey]: { message: 'file size exceeds', visible: true } });
                    }
                } else {
                    console.error(fileContent);
                    updateValidationState({ [questionKey]: { message: 'invalid file', visible: true } });
                }
            }
        } catch (error: any) {
            logger.log(error);
        }
    };

    const remove = () => {
        if (fileRef.current.files) {
            fileRef.current.files = null;
            removeQuestionResponse();
        }
    };

    return (
        <FileUploadWrapper>
            <div className='col col-placeholder'>
                <div className='placeholder-section'>
                    {!value?.name && <span className='placeholder-text'>{ placeholder || 'Upload a file' }</span>}
                    <br />
                    {value?.name && (
                        <span className='sub-title'>
                            {value && textTrimTooltip(value?.name, 15)}
                            { (value && value.size) && `(${parseFloat(`${value.size / 1048576}`).toFixed(2)}) MB` }
                        </span>
                    )}
                </div>
            </div>
            <div className='col col-input'>
                <div className='browser-file'>
                    <div className='action'>
                        <input
                            type='file'
                            className='file-upload'
                            ref={fileRef}
                            onChange={onFileUpload}
                            accept={FileContentType[(allowedType as keyof typeof FileContentType)]}
                        />
                        {
                            value && value.name ? (
                                <button className='cross-btn' onClick={remove} type='button'>
                                    <Image icon={CLOSE_ICON_URL} />
                                    {' '}
                                </button>
                            ) : (<button type='button' onClick={onFileBrowse}>Browse Files</button>)
                        }

                        <span className='sub-title'>
                            Max Limit:&nbsp;
                            {parseFloat(`${maxSizeLimit / 1024}`).toFixed(2)}
                            MB
                        </span>
                    </div>
                </div>
            </div>
        </FileUploadWrapper>
    );
}

export default FileBrowser;
