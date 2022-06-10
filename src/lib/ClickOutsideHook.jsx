import { useContext, useState, useRef, useEffect } from "react";

// CUSTOIM HOOK FOR CLICK OUSIDE EVENTS
// CALL BY RUNNING THE FOLLOWING CODE:
// let domNode = useClickOutside(() => {
// setRegister(false)
// })
// AND PUT domNode AS A UuseRef on the element in question =>  useRef(DomNode)

let useClickOutside = (handler) => {
    let domNode = useRef()

    useEffect(() => {
        let maybeHandler = (e) => {
            if(!domNode.current.contains(e.target)){
                handler()
            }
        }
        document.addEventListener("mousedown", handler);

        //This cleans up The effect........
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })
    return domNode
}

export default useClickOutside