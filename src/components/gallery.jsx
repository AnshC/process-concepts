import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data as rawData } from '../data/list.json'
import { CSSTransition } from 'react-transition-group'

export default function Gallery() {
    const { work } = useParams();
    const [displayModal, setDisplay] = useState(false);
    const [srcModal, setSrc] = useState("");
    const [captionModal, setCaption] = useState("")
    const [data, setData] = useState(rawData)
    const [main, setMain] = useState("")

    useEffect(() => {
        if (work !== undefined) {
            setMain(work.charAt(0).toUpperCase() + work.slice(1) + 's')
            var items = []
            for (var i = 0; i < rawData.length; i++) {
                if (rawData[i].type === work) {
                    items.push(rawData[i]);
                }
            }
            setData(items)
        } if (work === undefined){
            setMain("Gallery")
        }
    }, [work])

    return (
        <div className="gallery">
            <CSSTransition
                timeout={300}
                classNames="example"
                in={displayModal}
                unmountOnExit
            >
                <Modal src={srcModal} caption={captionModal} />
            </CSSTransition>
            <h1 className="head">{main}</h1>
            <div className="row">
                <div className="col">
                    {data.map((img) => {
                        return (
                            <div className="card" key={img.id}>
                                <img src={img.src} alt={img.alt} className="img" onClick={(() => { setSrc(img.src); setDisplay(true); setCaption(img.caption) })} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    function Modal(props) {
        return (
            <div className="modal" onClick={(() => { setDisplay(false); })}>
                <img src={props.src} alt={props.caption} />
                <div className="caption">{props.caption}</div>
            </div>
        )
    }
}

