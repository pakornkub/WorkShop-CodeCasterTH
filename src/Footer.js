import React, {useState,useEffect} from 'react'

function Footer() {
    
    const [time, setTime] = useState(0)

    //useEffect run after Render
    useEffect(() => {

        const interval = setInterval(() => {
            setTime(curretTime => curretTime + 1);
        }, 1000);

        return () => clearInterval(interval);

    },[]);

    //ถ้าไม่มีการใส่ Argument เลย จะทำงานทุกครั้ง เมื่อข้อมูลมีการเปลี่ยนแปลงของ Component นั้น
    //ถ้าใส่เป็น Array ว่าง ([]) จะเป็นการทำงานเฉพาะตอน mount และ unmount
    //ถ้าใส่ state ลงไปใน Argument ([time]) มันจะทำงาน ก็ต่อเมื่อค่าที่ระบุลงไปนั้นมีการเปลี่ยนแปลง (อัพเดท)

   console.log('render')
    return (
        <div>
            Footer Online Time {time}
            <button type="button" onClick={() => setTime(curretTime => curretTime + 1) }>Add</button>
        </div>
    )
}

export default Footer
