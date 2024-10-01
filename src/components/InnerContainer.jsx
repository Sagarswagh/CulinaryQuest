import style from './InnerContainer.module.css'
export default function itemContent({children}) {
    return <div className={style.innerContaier}>{children}</div>
}