import styled from "styled-components";
import { MyFont, Title } from "../styled";
import { Device } from "@/Themes/Device";
import { useState } from "react";

const MyInput = styled.input`
    border: none;
    width: 50%;
    outline: none;
    background-color: transparent;
    border-bottom: .5px solid #000000;
    font-family: 'Gilroy';
    font-size: 16px;
    color: #1C3A2E;
    padding-bottom: 5px;
    flex: 1;

    &::placeholder {
        color: #004E2D;
        font-family: 'Gilroy';
        font-size: 12px;
        font-weight: 100;

        @media ${Device.tab} {
            font-size: 16px;
        }
    }
`;

const RightArrow = (fill:string) => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" fill={fill}/></svg>;
const Tick = (fill:string) => <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill={fill}/>
</svg>;
const SubscribeBox = () => {

    const [subscribed,setSubscribed] = useState(false);

    return (
        <div style={{
            backgroundColor: "#BCDCE7",
            marginTop: "60px",
            marginRight: "170px",
            marginLeft: "170px",
            marginBottom: "80px",
            padding: '40px',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            borderRadius: '20px',
            alignItems: 'center',
            paddingTop: '80px',
            paddingBottom: '80px',
            zIndex: 2000,
        }}>
            <div style={{
                flex: 1,
            }}>
                <div style={{
                    paddingRight: '40px',
                    paddingLeft: '20px',
                }}>
                    <MyFont
                        fontSizeDesktop="26px"
                        fontWeight={600}
                        color="#000000"
                        fontSizeTab="16px"
                        fontSize="16px"
                        >
                        Subscribe today and navigate your financial world with confidence
                    </MyFont>
                 </div>
            </div>
                
            { !subscribed && <MyInput placeholder="yourname@email.com"/> }
            {!subscribed && <div onClick={()=>{
                setSubscribed(true);
                setTimeout(()=>{
                    setSubscribed(false);
                }
                , 5000);
            }} style={{
                cursor: 'pointer',
            }}>
                {RightArrow("#004E2D")}
            </div>
            }

            {subscribed && <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}> 
            <MyFont
                        fontSizeDesktop="20px"
                        fontWeight={600}
                        color="#000000"
                        fontSizeTab="16px"
                        fontSize="16px"
                        >
                        Subscribed
                    </MyFont>
                {Tick("#004E2D")}
            </div>}
        </div>
    );
}

export default SubscribeBox;
