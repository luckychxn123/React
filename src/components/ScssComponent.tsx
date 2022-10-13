import TestScss from '../css/Test.module.scss'


export default function FunctionComp() {
    return (<div className={TestScss.bgcolor}>
        <div className={TestScss.text}>Scss's component</div>
        <div className={TestScss.text2}>Scss's component 2</div>
        <div className={TestScss.textcond}>Scss's component conditional case</div>
    </div>)
}