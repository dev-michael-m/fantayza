import React,{useEffect,useState,useRef} from 'react';

const opts = {
    rootMargin: '100px 0px 0px 0px'
}

const Lazy = ({children}) => {
    const [visible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setVisible(entry.isIntersecting);
                }
            })        
        },opts);

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    },[])

    return (
        <div ref={domRef}>
            {visible ? children : null}
        </div>
    )
}

export default Lazy;