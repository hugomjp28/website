import * as React from 'react';
import { useState } from 'react';

function LanguageButton({ language, setLanguage }) {

    const [checked, setChecked] = useState(language === "pt" ? true : false)
    function click() {
        if (checked) {
            setLanguage("en")
        } else {
            setLanguage("pt")
        }
        setChecked(!checked)
    }
    return (
        <div>
            <button className='LanguageButton' onClick={click}>
                {checked ?
                    <p><strong>EN |</strong> PT</p>
                    :
                    <p>EN <strong>| PT</strong></p>
                }
            </button>
        </div>
    );
}

export default LanguageButton