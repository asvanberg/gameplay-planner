"use client"

import { useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import PageCard from './page_card.jsx';
import BlinkingDot from '../util/BlinkingDot.jsx';
import useLocalStorage from 'use-local-storage';

import DefaultSave from '../util/tempSave.json';

export default function PageSelection() {

    useEffect(() => {

        let timeout = setTimeout(() => {

            ReactGA.send({ hitType: "pageview", page: "/page_selection_", title: "_Page Selection" });
        }, 5000);
        return () => { clearTimeout(timeout) };


    }, []);

    const [clientData, setData] = useLocalStorage('userData', DefaultSave);
    const [data, setRunTimeData] = useState(DefaultSave);

    useEffect(() => {
        setRunTimeData(clientData);
    }, [clientData]);

    const chargesMax = data.CurrentCardCharge === data.MaxCardCharge;


    return (
        <div
            style={{
                display: 'flex',
                flex: '1',
                backgroundColor: 'black',
                position: 'relative',
            }}
        >
            <BlinkingDot data={data} />
            <div style={{
                paddingLeft: '6px',
                display: 'flex',
                flexDirection: 'column',
                flex: '1',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255, 0.08)',
                paddingLeft: '60px'
            }}>
                <div
                    style={{ display: 'flex' }}
                >

                    <PageCard page='upload' />
                    <PageCard page='expedition' />
                    <PageCard page='pets' />
                </div>
                <div
                    style={{ display: 'flex', marginTop: '36px' }}
                >
                    <PageCard page='farm' />
                    <PageCard page='cards' redBorder={chargesMax} />
                    <PageCard page='protein' />
                </div>

                {/* <button onClick={(e) => {
                    ReactGA.event({
                        category: "tester_events",
                        action: 'tested_event',
                        label: 'tested_event_label'
                    })

                }}>Something</button> */}
            </div>
        </div>
    );
}