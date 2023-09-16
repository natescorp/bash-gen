import React from 'react';
import './BiosTemplate.css'

const BiosTemplate = () => (
    <div className="BiosTemplate">
        <div className="header">
            <span>CMOS Setup Utility - Copyright (C) 1985-2004, American Megatrends, Inc.</span>
        </div>
        <div className="container">
            <div className="main">
                <ul className="main-left">
                    <li>Standart CMOS Features</li>
                    <li>Advanced BIOS Features</li>
                    <li>Advanced Chipset Features</li>
                    <li>Integrated Peripherals</li>
                    <li>Power Management features</li>
                    <li>PNP/PCI Configurations</li>
                    <li>PC Health Status</li>
                </ul>
                <ul className="main-right">
                    <li className="active">Cell Menu</li>
                    <li>Load Fail-Safe Defaults</li>
                    <li>Load Optimized Defaults</li>
                    <li>BIOS Settings Password</li>
                    <li>Save & Exit Setup</li>
                    <li>Exit Without Saving</li>
                </ul>
            </div>
            <div className="info">
                <span>↑↓←→:Move</span>
                <span>Enter:Select</span>
                <span>+/-/:Value</span>
                <span>F10:Save</span>
                <span>ESC:Exit</span>
                <span>F1:General Help</span>
                <span>F6:Load Optimized Defaults</span>
                <span>F7:Load Fail-Safe Defaults</span>
            </div>
            <div className="footer">
                <span>Set Frequency, Spread Spectrum Function . . .</span>
                <span>v02.58 (C)Copyright 1985-2004, American Megatrends, Inc.</span>
            </div>
        </div>
    </div>
);

export default BiosTemplate;
