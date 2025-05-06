/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

'use client';

import React, { useState } from 'react';
import logger from '@/utils/logger';

interface ObjectSet {
    [key: string]: {
        type: string;
        variant: string;
        children?: string[];
        [key: string]: any; // Allow any additional properties
    };
}

function duplicateObject(originalObjects: ObjectSet): ObjectSet {
    const duplicatedObjects: any = {};
    const idMap: Record<string, string> = {};

    // Helper function to generate a new unique identifier
    // function generateNewId(originalId: string): string {
    //     return `${originalId}-${globalThis.window.crypto.randomUUID()}`;
    // }

    function generateNewId(originalId: string): string {
        const newOrinalId = originalId.split('_')[0];
        const newId = `${newOrinalId}_${globalThis.window.crypto.randomUUID()}`;
        idMap[originalId] = newId;
        return newId;
    }

    // Iterate through the original objects
    for (const key in originalObjects) {
        const originalObject = originalObjects[key];

        // Create a new identifier for the current object
        const newId = generateNewId(key);

        duplicatedObjects[newId] = originalObjects[key];

        // Create a duplicate of the current object
        // duplicatedObjects[newId] = { ...originalObject };

        // // Update the children references in the duplicated object
        // if (originalObject.children) {
        //     duplicatedObjects[newId].children = originalObject.children.map((childId) => idMap[childId]);
        // }
    }

    for (const key in duplicatedObjects) {
        if (Array.isArray(duplicatedObjects[key].children)) {
            duplicatedObjects[key].children?.forEach((chileId: any, index: any) => {
                if (idMap[chileId]
                    && duplicatedObjects
                     && duplicatedObjects[key] && Array.isArray(duplicatedObjects[key].children)) {
                    duplicatedObjects[key].children[index] = idMap[chileId];
                }
            });
        }
    }

    return duplicatedObjects;
}

export default function page() {
    const [inputValue, setInputValue] = useState<string>();
    const [outputValue, setOutputvalue] = useState<string>();

    return (
        <div>
            <div>Genrate Config </div>
            <textarea
                onChange={(event: any) => {
                    logger.log('event', event);
                    setInputValue(event.target.value);
                }}
                placeholder='Copy config here '
                style={{
                    height: '500px',
                    width: '800px'
                }}

            />

            <div>
                <button
                    type='button'
                    onClick={() => {
                        try {
                            const objectValue: any = JSON.parse(inputValue!);
                            const duplicateValue = duplicateObject(objectValue);
                            setOutputvalue(JSON.stringify(duplicateValue, null, 4));
                        } catch (error: any) {
                            globalThis.window.alert('failed to parse');
                        }
                    }}
                >
                    Create Config
                </button>

            </div>
            <div style={{
                margin: '40px', border: '2px dashed gray'
            }}
            >
                <div>Output</div>
                <p style={{
                    whiteSpace: 'pre', fontFamily: 'monospace'
                }}
                >
                    {outputValue}
                </p>
            </div>
        </div>
    );
}
