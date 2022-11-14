import { useEffect, useState } from "react"
import { Button, Stack } from "react-bootstrap"




export function TestuseEffect() {
    const [count, setCount] = useState<number>(5)
    const [count2, setCount2] = useState<number>(0)

    function addCount1() {
        return setCount(count + 1)
    }
    function addCount2() {
        return setCount2(count2 + 1)
    }
    function addDoubleCount() {
        // ran & update twice
        setCount2(value => value + 1)
        setCount2(value => value + 1)

        // below only add once
        // addCount2()
        // addCount2()
    }


    useEffect(() => {
        addCount1();
    }, [count2])

    return (
        <div>
            <p>Add Count 2 will add Count 1 too</p>
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary" onClick={() => { addCount1() }}>
                    Add Count 1
                </Button>
                <Button as="a" variant="success" onClick={() => { addDoubleCount() }}>
                    Add Count 2
                </Button>
                <p>Count 1 : {count} || Count 2 : {count2}</p>
            </Stack>
        </div>
    )
}