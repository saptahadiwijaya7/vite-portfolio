import React from 'react'
import { QRNormal } from 'react-qrbtf'

export default function MyQr() {

     
        return (
            <QRNormal
                value="https://elements.envato.com/sound-effects/human-sounds/step"
                className="my-qrcode"
                styles={{ svg: {width: "200px"} }}
                type="round"
                size={40}
                opacity={70}
                posType="planet"
                otherColor="#33CCCC"
                posColor="#3bbc9f"
            />
        )
    }
