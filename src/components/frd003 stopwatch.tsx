import styles from '../css/frd003stopwatch.module.scss'
import { useState } from 'react';


export function StopWatch() {
    const INVAL = 80;
    enum Mode {
        Start = "Start",
        Stop = "Stop"

    };

    enum RLMode {
        Reset = "Reset",
        Lap = "Lap"
    };

    const [milisec, setmilisec] = useState<number>(1000); //setting time +/-
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>() //start or clear Interval
    const [mode, setMode] = useState<Mode>(Mode.Stop); //initial state = stop|| set mode for stop and start

    const [laplst, setlaplst] = useState<string[]>([]); // set lst of all lapped items
    const [resetlapmode, setresetlapMode] = useState<RLMode>(RLMode.Reset); //[back] beginning is start|| set mode for stop and start

    const getMilisec = () => {
        return (milisec % 1000).toString().padStart(3, '0')  // padStart = round to x dec
    }
    const getSec = () => {
        return (Math.floor(milisec / 1000) % 60).toString().padStart(2, '0');
    }
    const getMin = () => {
        return (Math.floor(milisec / 1000 / 60)).toString().padStart(2, '0');
    }

    const displayTimer = () => {
        return `${getMilisec()}, ${getSec()}, ${getMin()}`
    }
    const start = () => {
        let intID = setInterval(() => {
            setmilisec(value => value + INVAL)
        }, INVAL)
        setIntervalId(intID)
    }
    const stop = () => {
        clearInterval(intervalId)
    }
    const reset = () => {
        setmilisec(0)
        clearInterval(intervalId) // clearInterval => built in func to del/reset intervals
    }
    const lap = () => {
        let updatedlaplst = [...laplst, displayTimer()]
        setlaplst(updatedlaplst)
    }

    const handleStartStop = () => {
        if (mode == Mode.Start) {
            stop()
            setMode(Mode.Stop)
            setresetlapMode(RLMode.Lap)
        } else {
            start()
            setMode(Mode.Start)
            setresetlapMode(RLMode.Reset)
        }
        console.log(mode, '==mode') //this shows the value
    }

    const handleResetLap = () => {
        if (resetlapmode == RLMode.Reset) {
            lap()
        } else {
            reset()
        }
    }

    return (<div className={styles.stopwatch}>
        <div className={styles.time}>Stop watch</div>
        <a className={`btn btn-primary ${styles.swbuttons}`}>Sop WATCH</a>
        <div className={styles.newline}></div>

        <div className={styles.time}>{displayTimer()}</div>
        <div className={styles.newline}></div>
        {/* if mode == Mode.stop: show start, else show stop*/}
        <a className={`btn btn-primary ${styles.swbuttons}`} onClick={() => { handleStartStop() }}>{mode === Mode.Stop ? "Start" : "Pause"}</a>
        {/* <button className={styles.swbuttons} onClick={() => { handleStartStop() }}>{mode === Mode.Stop ? "Start" : "Pause"}</button> */}
        <a className={`btn btn-primary ${styles.swbuttons}`} onClick={() => { handleResetLap() }}>{resetlapmode === RLMode.Reset ? "Lap" : "Reset"}</a>
        <div className={styles.newline}></div>
        <div className={styles.laplstitems}>{
            laplst.length > 0 && <div>{laplst.map((item, index) => { return (<div className={styles.lapitems} key={index}>{item}</div>) }
            )}</div>
        }
        </div>
    </div>)
}