const mcqData = {
  "1": [
    {
      "question": "ตามโมเดล Data Processor คอมพิวเตอร์เปรียบเสมือนกล่องดำที่สามารถทำหน้าที่อะไรได้บ้าง?",
      "options": [
        "รับข้อมูล ประมวลผล และส่งผลลัพธ์",
        "รับข้อมูลและจัดเก็บข้อมูล",
        "ประมวลผลและจัดเก็บข้อมูล",
        "รับข้อมูล ประมวลผล และซ่อมแซมตัวเอง"
      ],
      "answer": 0,
      "explanation": "ตามโมเดล Data Processor คอมพิวเตอร์สามารถ 1. รับ input data 2. ประมวลผล data 3. ส่งผล output data"
    },
    {
      "question": "จากนิยามของ Data Processor เครื่องคิดเลขจัดเป็นคอมพิวเตอร์หรือไม่?",
      "options": [
        "ไม่เป็น เพราะไม่มีหน่วยความจำ",
        "เป็น เพราะสามารถรับข้อมูล ประมวลผล และส่งผลลัพธ์ได้",
        "ไม่เป็น เพราะไม่สามารถเขียนโปรแกรมได้",
        "เป็น เพราะเป็นอุปกรณ์อิเล็กทรอนิกส์"
      ],
      "answer": 1,
      "explanation": "ตามนิยาม Data processor เครื่องคิดเลขสามารถรับข้อมูล ประมวลผล และส่งผลลัพธ์ได้ จึงถือเป็นคอมพิวเตอร์ด้วย"
    },
    {
      "question": "Specific-purpose machine คืออะไร?",
      "options": [
        "เครื่องที่ประมวลผลได้หลายประเภท",
        "เครื่องที่ประมวลผลได้ประเภทเดียว",
        "เครื่องที่เก็บข้อมูลได้ไม่จำกัด",
        "เครื่องที่ทำหน้าที่เฉพาะรับข้อมูล"
      ],
      "answer": 1,
      "explanation": "Specific-purpose machine คือเครื่องที่สามารถประมวลผลได้ประเภทเดียว เช่น ควบคุมอุณหภูมิในอาคาร"
    },
    {
      "question": "General-purpose machine คืออะไร?",
      "options": [
        "เครื่องที่ประมวลผลได้ประเภทเดียว",
        "เครื่องที่ใช้ในงานอุตสาหกรรมเท่านั้น",
        "เครื่องที่ประมวลผลได้หลายประเภท",
        "เครื่องที่สามารถรับข้อมูลได้อย่างเดียว"
      ],
      "answer": 2,
      "explanation": "General-purpose machine คือเครื่องที่สามารถประมวลผลได้หลายประเภท เช่น คิดเลข ประมวลผลฝากถอนเงิน จัดเก็บและสืบค้นข้อมูล"
    },
    {
      "question": "โมเดล Programmable Data Processor มีการเพิ่มอะไรเข้าไปจากโมเดล Data Processor ปกติ?",
      "options": [
        "Memory",
        "Harddisk",
        "Program",
        "Network"
      ],
      "answer": 2,
      "explanation": "โมเดลนี้ทำการเพิ่ม Program เข้าไปเพื่อให้สะท้อนถึงคอมพิวเตอร์ที่ใช้กันอยู่ในปัจจุบัน"
    },
    {
      "question": "คำว่า Program หมายถึงอะไร?",
      "options": [
        "ข้อมูลดิบที่รับเข้ามา",
        "ชุดของคำสั่งที่สั่งให้คอมพิวเตอร์ประมวลผลกับข้อมูล",
        "อุปกรณ์อิเล็กทรอนิกส์ในคอมพิวเตอร์",
        "ผลลัพธ์ที่ได้จากการคำนวณ"
      ],
      "answer": 1,
      "explanation": "Program หมายถึงชุดของคำสั่งที่สั่งให้คอมพิวเตอร์ประมวลผลกับข้อมูลเพื่อให้ได้ผลลัพธ์ตามที่ต้องการ"
    },
    {
      "question": "การใช้ input data เดียวกัน แต่ใช้โปรแกรมต่างกัน จะส่งผลอย่างไร?",
      "options": [
        "เครื่องจะทำงานไม่ได้",
        "ได้ผลลัพธ์เหมือนกัน",
        "เครื่องจะพัง",
        "ย่อมได้ผลลัพธ์ที่ต่างกัน"
      ],
      "answer": 3,
      "explanation": "ด้วย input data เดียวกันแต่ใช้โปรแกรมต่างกันย่อมได้ผลที่ต่างกันด้วย"
    },
    {
      "question": "การใช้โปรแกรมเดียวกัน แต่ใช้ input data ที่ต่างกัน จะส่งผลอย่างไร?",
      "options": [
        "ได้ผลลัพธ์เหมือนกัน",
        "จะได้ผลที่ต่างกัน",
        "เครื่องจะเกิดข้อผิดพลาด",
        "ต้องใช้เวลาประมวลผลเท่ากัน"
      ],
      "answer": 1,
      "explanation": "ถ้าใช้โปรแกรมเดียวกันแต่ด้วย input data ที่ต่างกันก็จะได้ผลที่ต่างกันด้วย"
    },
    {
      "question": "การใช้โปรแกรมเดียวกันและ input data เดียวกัน ทำงานหลายๆครั้ง จะส่งผลอย่างไร?",
      "options": [
        "ได้ผลลัพธ์ต่างกันในแต่ละครั้ง",
        "จะได้ผลลัพธ์ที่เหมือนกันทุกครั้ง",
        "เครื่องจะไม่ทำงานในครั้งต่อไป",
        "เครื่องจะคำนวณช้าลง"
      ],
      "answer": 1,
      "explanation": "ถ้า input data เดียวกัน และ program เดียวกัน ผลก็คือจะได้ output data เหมือนกันทุกครั้ง"
    },
    {
      "question": "ใครเป็นผู้ศึกษาทฤษฎีการคำนวณและประดิษฐ์แนวคิด Turing Machine?",
      "options": [
        "Alan Turing",
        "John Von Neumann",
        "John Macuchly",
        "John Presper Eckert"
      ],
      "answer": 0,
      "explanation": "Alan Turing เป็นผู้ศึกษาทฤษฎีการคำนวณและออกแบบทัวริงแมชชีน"
    },
    {
      "question": "โมเดลสถาปัตยกรรมคอมพิวเตอร์ของ John Von Neumann มีองค์ประกอบหลักกี่ส่วน?",
      "options": [
        "2 ส่วน",
        "3 ส่วน",
        "4 ส่วน",
        "5 ส่วน"
      ],
      "answer": 2,
      "explanation": "Von Neumann model กำหนดว่าคอมพิวเตอร์ประกอบด้วยองค์ประกอบ 4 ส่วน"
    },
    {
      "question": "องค์ประกอบ 4 ส่วนของสถาปัตยกรรม Von Neumann ได้แก่อะไรบ้าง?",
      "options": [
        "Input, Output, Process, Storage",
        "Memory, ALU, Control Unit, Input/Output",
        "Hardware, Software, People, Data",
        "CPU, RAM, ROM, Harddisk"
      ],
      "answer": 1,
      "explanation": "องค์ประกอบ 4 ส่วนคือ 1. Memory 2. Arithmetic Logic Unit 3. Control Unit 4. Input/Output Units"
    },
    {
      "question": "Memory ในสถาปัตยกรรม Von Neumann ทำหน้าที่อะไร?",
      "options": [
        "เก็บข้อมูลและโปรแกรมอย่างถาวร",
        "พื้นที่ส่วนที่ใช้เก็บ data และ program ระหว่างที่คอมพิวเตอร์กำลังทำงาน",
        "ประมวลผลข้อมูล",
        "ควบคุมการทำงานของระบบ"
      ],
      "answer": 1,
      "explanation": "Memory เป็นพื้นที่ส่วนที่ใช้เก็บ data และ program ระหว่างที่คอมพิวเตอร์กำลังทำงาน"
    },
    {
      "question": "Arithmetic Logic Unit (ALU) ทำหน้าที่อะไร?",
      "options": [
        "รับและแสดงผลข้อมูล",
        "ควบคุมการทำงานของหน่วยต่างๆ",
        "เป็นส่วนที่ใช้สำหรับการคำนวณและทำ logic operations",
        "เก็บข้อมูลระหว่างการคำนวณ"
      ],
      "answer": 2,
      "explanation": "ALU เป็นส่วนที่ใช้สำหรับการคำนวณและทำ logic operations (เช่น การเปรียบเทียบ การทำ AND, OR)"
    },
    {
      "question": "หน่วยที่ทำหน้าที่ควบคุมการทำงานของ Memory, ALU และ I/O คืออะไร?",
      "options": [
        "Data Bus",
        "Register",
        "Control Unit",
        "Operating System"
      ],
      "answer": 2,
      "explanation": "Control Unit ทำหน้าที่ควบคุมการทำงานของ memory, ALU และ Input/Output units"
    },
    {
      "question": "แนวคิด Stored Program Concept กำหนดว่าอย่างไร?",
      "options": [
        "โปรแกรมต้องเก็บอยู่ในดิสก์เสมอ",
        "โปรแกรมที่สั่งให้คอมพิวเตอร์ทำงานจะต้องถูกจัดเก็บอยู่ใน memory ขณะประมวลผล",
        "ข้อมูลและโปรแกรมต้องแยกกันอยู่คนละหน่วยความจำ",
        "คอมพิวเตอร์ต้องมีหน่วยประมวลผลหลายตัว"
      ],
      "answer": 1,
      "explanation": "Stored Program Concept กำหนดว่า program ที่สั่งให้คอมพิวเตอร์ทำงานจะต้องถูกจัดเก็บอยู่ใน memory ในขณะที่กำลังประมวลผล"
    },
    {
      "question": "ในระบบคอมพิวเตอร์สมัยใหม่ Data และ Program ถูกจัดเก็บในรูปแบบใดที่เหมือนกัน?",
      "options": [
        "Decimal patterns",
        "Binary patterns (สตริงของ 0 และ 1)",
        "Hexadecimal patterns",
        "Text patterns"
      ],
      "answer": 1,
      "explanation": "ทั้ง data และ program ต้องมีรูปแบบการจัดเก็บเหมือนกันในรูปแบบที่เรียกว่า binary patterns (สตริงของ 0 และ 1)"
    },
    {
      "question": "Sequential Execution of Instructions หมายถึงสิ่งใด?",
      "options": [
        "การประมวลผลคำสั่งแบบขนาน",
        "คำสั่งจะถูก execute ทีละ 1 คำสั่งตามลำดับ",
        "คำสั่งทั้งหมดจะถูกประมวลผลพร้อมกัน",
        "การข้ามคำสั่งที่ไม่จำเป็น"
      ],
      "answer": 1,
      "explanation": "คำสั่งจะถูกดึง (fetch) 1 คำสั่งจากหน่วยความจำ ทำการตีความหมาย แล้วจึงทำการ execute ทีละ 1 คำสั่งตามลำดับ"
    },
    {
      "question": "คอมพิวเตอร์ยุคที่ 1 (Gen 1) ใช้เทคโนโลยีอะไรเป็นองค์ประกอบหลัก?",
      "options": [
        "Transistor",
        "Integrated Circuit",
        "Vacuum tube (หลอดสุญญากาศ)",
        "Microprocessor"
      ],
      "answer": 2,
      "explanation": "คอมพิวเตอร์ยุคที่ 1 เช่น ENIAC ใช้เทคโนโลยีหลอดสุญญากาศ"
    },
    {
      "question": "ENIAC ซึ่งเป็นคอมพิวเตอร์ในยุคแรก สามารถคำนวณผลบวกได้กี่ครั้งต่อวินาที?",
      "options": [
        "500 ครั้งต่อวินาที",
        "1,000 ครั้งต่อวินาที",
        "5,000 ครั้งต่อวินาที",
        "10,000 ครั้งต่อวินาที"
      ],
      "answer": 2,
      "explanation": "ENIAC สามารถคำนวณผลบวกได้ถึง 5,000 ครั้งต่อวินาที"
    },
    {
      "question": "คอมพิวเตอร์ยุคที่ 2 (Gen 2) มีการนำเทคโนโลยีใดมาใช้แทนหลอดสุญญากาศ?",
      "options": [
        "Transistor (ทรานซิสเตอร์)",
        "IC",
        "VLSI",
        "Microchip"
      ],
      "answer": 0,
      "explanation": "ยุคที่ 2 บริษัท NCR และ RCA ได้นำเทคโนโลยีทรานซิสเตอร์มาใช้แทนหลอดสุญญากาศ"
    },
    {
      "question": "ภาษาโปรแกรมระดับสูง (high level language) เริ่มมีการพัฒนาขึ้นในยุคใด?",
      "options": [
        "ยุคที่ 1",
        "ยุคที่ 2",
        "ยุคที่ 3",
        "ยุคที่ 4"
      ],
      "answer": 1,
      "explanation": "ในยุคที่ 2 มีการพัฒนาเทคนิคการคิดคำนวณทางคณิตศาสตร์ที่มีความซับซ้อนสูง และมีการพัฒนาภาษาโปรแกรมระดับสูง"
    },
    {
      "question": "เทคโนโลยี IC (Integrated Circuit) เริ่มถูกนำมาใช้ในคอมพิวเตอร์ยุคใด?",
      "options": [
        "ยุคที่ 2",
        "ยุคที่ 3",
        "ยุคที่ 4",
        "ยุคที่ 5"
      ],
      "answer": 1,
      "explanation": "คอมพิวเตอร์ยุคที่ 3 (ค.ศ. 1965) มีการนำเทคโนโลยี IC มาใช้ผลิตแผงวงจร"
    },
    {
      "question": "เทคโนโลยี LSI และ VLSI เริ่มถูกใช้ในคอมพิวเตอร์ยุคใด?",
      "options": [
        "ยุคที่ 2 และ 3",
        "ยุคที่ 3 และ 4",
        "ยุคที่ 4 และ 5",
        "ยุคที่ 5 และ 6"
      ],
      "answer": 2,
      "explanation": "คอมพิวเตอร์ยุคที่ 4 และ 5 มีการใช้เทคนิค Large-scale integration (LSI) และ VLSI มาผลิตแผงวงจร"
    },
    {
      "question": "การจำแนกประเภทคอมพิวเตอร์ตามโครงสร้างภายใน แบ่งได้เป็นประเภทใดบ้าง?",
      "options": [
        "Digital และ Analog",
        "Micro และ Mini",
        "PC และ Notebook",
        "Mainframe และ Super computer"
      ],
      "answer": 0,
      "explanation": "การจำแนกตามโครงสร้างภายใน แบ่งเป็น ดิจิตอล (Digital) และ อะนาล็อก (Analog)"
    },
    {
      "question": "เครื่อง ATM เป็นการจำแนกคอมพิวเตอร์ตามเกณฑ์ใด?",
      "options": [
        "จำแนกตามโครงสร้างภายใน",
        "จำแนกตามขนาด",
        "จำแนกตามบทบาทการใช้งาน",
        "จำแนกตามผู้ผลิต"
      ],
      "answer": 2,
      "explanation": "เครื่อง ATM เป็นตัวอย่างของการจำแนกตามบทบาทการใช้งาน (ใช้ตามประเภทของงาน)"
    },
    {
      "question": "ข้อใดจัดเป็นการจำแนกคอมพิวเตอร์ตามขนาด?",
      "options": [
        "Digital, Analog",
        "PC, Notebook",
        "micro, mini, mainframe, super computer",
        "System software, Application software"
      ],
      "answer": 2,
      "explanation": "การจำแนกตามขนาด ได้แก่ micro, mini, mainframe, super computer"
    },
    {
      "question": "ระบบคอมพิวเตอร์ (Computer System) ประกอบด้วย 3 องค์ประกอบหลักคืออะไร?",
      "options": [
        "Hardware, Software, People",
        "CPU, Memory, I/O",
        "Input, Process, Output",
        "Data, Information, Knowledge"
      ],
      "answer": 0,
      "explanation": "ระบบคอมพิวเตอร์ประกอบด้วย People, Software, และ Hardware"
    },
    {
      "question": "โปรแกรมเมอร์ (Programmer) จัดอยู่ในส่วนใดของระบบคอมพิวเตอร์?",
      "options": [
        "Hardware",
        "Software",
        "People (บุคคลากร)",
        "Data"
      ],
      "answer": 2,
      "explanation": "Programmer เป็นผู้พัฒนา (Developer) ซึ่งจัดอยู่ในกลุ่มบุคคลากร (People)"
    },
    {
      "question": "โปรแกรมประเภท Operating System (OS) และ Compiler จัดเป็นซอฟต์แวร์ประเภทใด?",
      "options": [
        "Application Software",
        "System Software",
        "Utility Software",
        "Word Processing Software"
      ],
      "answer": 1,
      "explanation": "System Software คือโปรแกรมที่สนับสนุนการทำงานของคอมพิวเตอร์ เช่น Operating system, Compiler"
    }
  ],
  "2": [
    {
      "question": "ข้อมูลในคอมพิวเตอร์แบ่งออกเป็นกี่ประเภทหลักๆ ตามที่ปรากฏในบทเรียน?",
      "options": [
        "3 ประเภท",
        "4 ประเภท",
        "5 ประเภท",
        "6 ประเภท"
      ],
      "answer": 2,
      "explanation": "ข้อมูลแบ่งเป็น 5 ประเภท ได้แก่ Text, Number, Image, Audio, และ Video"
    },
    {
      "question": "โปรแกรมประมวลผลคำ (Word Processor) ใช้คอมพิวเตอร์ประมวลผลข้อมูลประเภทใดเป็นหลัก?",
      "options": [
        "Number",
        "Text",
        "Image",
        "Audio"
      ],
      "answer": 1,
      "explanation": "โปรแกรมประมวลผลคำใช้คอมพิวเตอร์ประมวลผลข้อความ (Text) เช่น เพิ่ม แทรก ลบ ย้ายข้อความ"
    },
    {
      "question": "คอมพิวเตอร์จัดการกับข้อมูลประเภทต่างๆ ที่ต่างกันด้วยวิธีการใด?",
      "options": [
        "ใช้อุปกรณ์ที่แตกต่างกันสำหรับแต่ละประเภทข้อมูล",
        "แปลงข้อมูลทุกประเภทให้อยู่ในรูปแบบสากลที่เรียกว่า Bit Pattern",
        "เก็บข้อมูลตามรูปแบบเดิมของข้อมูลนั้นๆ",
        "ใช้ฮาร์ดดิสก์แยกต่างหากสำหรับข้อมูลแต่ละประเภท"
      ],
      "answer": 1,
      "explanation": "ข้อมูลทุกประเภทถูกแปลงให้อยู่ในรูปแบบสากลที่เรียกว่า Bit Pattern (Uniform representation)"
    },
    {
      "question": "คำว่า Bit ย่อมาจากคำว่าอะไร?",
      "options": [
        "Binary item",
        "Basic integer",
        "Binary digit",
        "Byte integer"
      ],
      "answer": 2,
      "explanation": "Bit ย่อมาจาก binary digit คือหน่วยที่เล็กที่สุดของข้อมูลที่จัดเก็บในเครื่องคอมพิวเตอร์"
    },
    {
      "question": "บิต (Bit) สามารถแทนสถานะได้กี่สถานะ และคืออะไรบ้าง?",
      "options": [
        "2 สถานะ คือ 0 กับ 1",
        "3 สถานะ คือ -1, 0, 1",
        "4 สถานะ คือ 00, 01, 10, 11",
        "8 สถานะ"
      ],
      "answer": 0,
      "explanation": "Bit เป็นการแสดงสถานะของอุปกรณ์ที่มี 2 สถานะ คือ 0 (ปิด) กับ 1 (เปิด)"
    },
    {
      "question": "คำว่า ไบท์ (Byte) หมายถึง bit pattern ที่มีจำนวนกี่บิต?",
      "options": [
        "4 บิต",
        "8 บิต",
        "16 บิต",
        "32 บิต"
      ],
      "answer": 1,
      "explanation": "ตามข้อตกลงทั่วไป bit pattern ที่มีจำนวนบิตเท่ากับ 8 บิตจะเรียกว่า ไบท์ (byte)"
    },
    {
      "question": "รหัสแทนข้อมูลคอมพิวเตอร์สำหรับข้อความที่เป็นที่นิยมมีกี่ชนิดหลัก?",
      "options": [
        "2 ชนิด",
        "3 ชนิด",
        "4 ชนิด",
        "5 ชนิด"
      ],
      "answer": 1,
      "explanation": "มี 3 ชนิด คือ ASCII, EBCDIC, และ Unicode"
    },
    {
      "question": "รหัส ASCII ย่อมาจากอะไร?",
      "options": [
        "American Standard Code for Information Interchange",
        "Advanced Standard Code for Information Interchange",
        "American System Code for Information Interchange",
        "Advanced System Code for Information Interchange"
      ],
      "answer": 0,
      "explanation": "ASCII ย่อมาจาก American Standard Code for Information Interchange"
    },
    {
      "question": "รหัส ASCII ชนิดมาตรฐาน (Standard ASCII) ใช้กี่บิตในการแทนอักษรแต่ละตัว?",
      "options": [
        "7 บิต",
        "8 บิต",
        "16 บิต",
        "32 บิต"
      ],
      "answer": 0,
      "explanation": "รหัส ASCII ชนิดมาตรฐานใช้ 7 บิตแทนอักษรแต่ละตัว (แทนได้ 128 ตัวอักษร)"
    },
    {
      "question": "รหัส ASCII ชนิดมาตรฐานสามารถแทนตัวอักษรได้ทั้งหมดกี่ตัว?",
      "options": [
        "128 ตัว",
        "256 ตัว",
        "65536 ตัว",
        "1024 ตัว"
      ],
      "answer": 0,
      "explanation": "ใช้ 7 บิต จึงแทนได้ 2 ยกกำลัง 7 = 128 ตัวอักษร"
    },
    {
      "question": "ในรหัส ASCII ตัวอักษรตัวใหญ่ (A-Z) กับตัวอักษรตัวเล็ก (a-z) มีความแตกต่างกันอย่างไรในแง่ของ bit pattern?",
      "options": [
        "แตกต่างกัน 2 บิต",
        "แตกต่างกัน 1 บิต",
        "มี bit pattern เหมือนกัน แต่ขึ้นอยู่กับโปรแกรม",
        "แตกต่างกันโดยสิ้นเชิงไม่มีความเกี่ยวข้องกัน"
      ],
      "answer": 1,
      "explanation": "รหัสที่แทนอักษรตัวใหญ่แตกต่างจากรหัสที่แทนอักษรตัวเล็กเพียง 1 บิต เช่น A = 1000001, a = 1100001"
    },
    {
      "question": "รหัส Extended ASCII มีการเพิ่มบิตเข้าไป 1 บิต ทำให้สามารถแทนตัวอักษรได้ทั้งหมดกี่ตัว?",
      "options": [
        "128 ตัว",
        "256 ตัว",
        "512 ตัว",
        "1024 ตัว"
      ],
      "answer": 1,
      "explanation": "Extended ASCII มี 8 บิต (1 byte) จึงแทนตัวอักษรได้ 2 ยกกำลัง 8 = 256 ตัว"
    },
    {
      "question": "รหัส EBCDIC มักถูกนำไปใช้ในคอมพิวเตอร์ประเภทใดมากที่สุด?",
      "options": [
        "Microcomputer",
        "Notebook",
        "IBM Mainframe",
        "Supercomputer"
      ],
      "answer": 2,
      "explanation": "รหัส EBCDIC ใช้ในคอมพิวเตอร์ขนาดใหญ่ เช่น IBM mainframe เท่านั้น"
    },
    {
      "question": "รหัส Unicode ใช้กี่บิตในการแทนตัวอักขระ 1 ตัว?",
      "options": [
        "7 บิต",
        "8 บิต",
        "16 บิต",
        "32 บิต"
      ],
      "answer": 2,
      "explanation": "Unicode ใช้ 16 bits for a character"
    },
    {
      "question": "รหัส Unicode สามารถแทนตัวอักขระได้ทั้งหมดสูงสุดประมาณกี่ตัว?",
      "options": [
        "256 ตัว",
        "1024 ตัว",
        "32768 ตัว",
        "65536 ตัว"
      ],
      "answer": 3,
      "explanation": "Unicode ใช้ 16 บิต จึงสามารถแทนได้ 2 ยกกำลัง 16 = 65,536 ตัวอักษร"
    },
    {
      "question": "การแทนข้อมูลภาพด้วยวิธีใดที่มีการแบ่งภาพเป็นเมทริกซ์ของจุดเล็กๆ เรียกว่า pixel?",
      "options": [
        "Vector Graphic",
        "Bitmap Graphic",
        "Scalar Graphic",
        "Tensor Graphic"
      ],
      "answer": 1,
      "explanation": "Bitmap Graphic จะถูกแบ่งเป็นเมทริกซ์ของ pixel โดยแต่ละ pixel เป็นจุดเล็กๆ"
    },
    {
      "question": "ในการแทนภาพขาวดำแบบ 1-bit pattern ค่า 1 และ 0 โดยทั่วไปหมายถึงอะไร?",
      "options": [
        "1 = จุดขาว, 0 = จุดดำ",
        "1 = จุดดำ, 0 = จุดขาว",
        "1 = สีเทา, 0 = จุดดำ",
        "1 = จุดโปร่งใส, 0 = จุดทึบ"
      ],
      "answer": 1,
      "explanation": "โดยปกติ pattern 1 แทนจุดดำ (black pixel) และ pattern 0 แทนจุดขาว (white pixel)"
    },
    {
      "question": "การแทนข้อมูลภาพสี แต่ละจุดสี (pixel) จะถูกแยกออกเป็นสีพื้นฐาน 3 สี ได้แก่อะไรบ้าง?",
      "options": [
        "Cyan, Magenta, Yellow",
        "Red, Green, Blue",
        "Hue, Saturation, Lightness",
        "Black, White, Gray"
      ],
      "answer": 1,
      "explanation": "แต่ละจุดสีจะแยกออกเป็นสีพื้นฐาน 3 สีคือ สีแดง (Red) สีเขียว (Green) และสีน้ำเงิน (Blue)"
    },
    {
      "question": "การแทนข้อมูลภาพด้วยวิธี Vector Graphic ใช้อะไรในการจัดเก็บข้อมูลภาพ?",
      "options": [
        "เก็บค่าสีของแต่ละจุด pixel ตามลำดับ",
        "เก็บภาพในรูปแบบของสมการทางคณิตศาสตร์",
        "เก็บข้อมูลด้วยการสุ่มสัญญาณ",
        "เก็บข้อมูลโดยใช้รหัส ASCII"
      ],
      "answer": 1,
      "explanation": "Vector Graphic จะแบ่งภาพออกเป็น curves และ lines และแทนด้วยสมการทางคณิตศาสตร์"
    },
    {
      "question": "ปัญหาสำคัญของการแทนข้อมูลภาพด้วยวิธี Bitmap Graphic คืออะไร?",
      "options": [
        "ไม่สามารถแทนภาพที่มีสีสันซับซ้อนได้",
        "กินทรัพยากร CPU ในการคำนวณสมการมาก",
        "เมื่อย่อหรือขยายภาพ ภาพจะเป็นรอยย่นหรือหยาบเป็นเม็ดๆ",
        "ไม่สามารถแสดงบนจอภาพธรรมดาได้"
      ],
      "answer": 2,
      "explanation": "ถ้าต้องการย่อหรือขยายภาพ ภาพที่ได้จะดูเป็นรอยย่นหรือหยาบเป็นเม็ดๆ"
    },
    {
      "question": "ข้อมูลประเภท Audio โดยธรรมชาติแล้วมีลักษณะเป็นข้อมูลแบบใด?",
      "options": [
        "Digital",
        "Discrete",
        "Analog",
        "Binary"
      ],
      "answer": 2,
      "explanation": "โดยธรรมชาติแล้วข้อมูล audio เป็นข้อมูล analog ที่มีลักษณะเป็นคลื่นที่มีความต่อเนื่อง"
    },
    {
      "question": "กระบวนการแปลงข้อมูลเสียง (audio) ให้เป็น bit pattern ขั้นตอนแรกคืออะไร?",
      "options": [
        "Quantization",
        "Coding",
        "Sampling",
        "Compressing"
      ],
      "answer": 2,
      "explanation": "ขั้นตอนแรกคือทำการสุ่มสัญญาณ analog ที่แทนเสียง (Sampling) ณ ช่วงที่เท่ากัน"
    },
    {
      "question": "การกำหนดค่าจากเซตหนึ่งให้กับค่าที่สุ่มมาได้ในการแปลงข้อมูลเสียง เรียกว่ากระบวนการใด?",
      "options": [
        "Sampling",
        "Quantization",
        "Coding",
        "Decoding"
      ],
      "answer": 1,
      "explanation": "Quantization คือการกำหนดค่าจากเซตหนึ่งให้กับค่าที่สุ่มมาได้"
    },
    {
      "question": "ข้อมูลวิดีโอ (Video) แท้จริงแล้วคือการนำอะไรมาแสดงผลตามเวลา?",
      "options": [
        "สมการทางคณิตศาสตร์",
        "รหัส ASCII ต่อเนื่องกัน",
        "ลำดับของเฟรมภาพ (images/frames)",
        "ข้อมูลเสียงที่ถูกบีบอัด"
      ],
      "answer": 2,
      "explanation": "Video เป็นการแทนข้อมูล image (เรียกว่า frame) ตามเวลา โดยแสดงต่อเนื่องกันเฟรมต่อเฟรม"
    },
    {
      "question": "MPEG คือรูปแบบหรือมาตรฐานที่เกี่ยวข้องกับการทำอะไรในข้อมูลวิดีโอ?",
      "options": [
        "การเพิ่มความละเอียดให้วิดีโอ",
        "การแปลงวิดีโอเป็นข้อความ",
        "การบีบอัด (compress) ข้อมูลวิดีโอ",
        "การแปลงวิดีโอเป็น Vector Graphic"
      ],
      "answer": 2,
      "explanation": "ข้อมูล video จะถูกบีบอัด (compress) เพื่อลดเนื้อที่ เช่น รูปแบบ MPEG"
    },
    {
      "question": "การแทนตัวเลขโดยใช้ Hexadecimal notation คือการใช้เลขฐานอะไร?",
      "options": [
        "ฐาน 2",
        "ฐาน 8",
        "ฐาน 10",
        "ฐาน 16"
      ],
      "answer": 3,
      "explanation": "Hexadecimal notation เป็นการแทนตัวเลขโดยใช้ฐาน 16"
    },
    {
      "question": "สัญลักษณ์ตัวอักษรใด ที่ใช้ในระบบเลขฐาน 16?",
      "options": [
        "A ถึง E",
        "A ถึง F",
        "A ถึง G",
        "A ถึง Z"
      ],
      "answer": 1,
      "explanation": "เลขฐาน 16 ใช้สัญลักษณ์ 16 ตัวคือ 0-9 และ A, B, C, D, E, F"
    },
    {
      "question": "ตัวอักษร C ในระบบเลขฐาน 16 มีค่าเท่ากับตัวเลขใดในระบบเลขฐาน 10?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "answer": 2,
      "explanation": "A=10, B=11, C=12"
    },
    {
      "question": "การแปลง bit pattern เป็นเลขฐาน 16 ทำได้โดยการจัดกลุ่มบิตกลุ่มละกี่บิต?",
      "options": [
        "2 บิต",
        "3 บิต",
        "4 บิต",
        "8 บิต"
      ],
      "answer": 2,
      "explanation": "ทำได้โดยการจัดกลุ่มเลข 0 และ 1 ใน bit pattern ออกเป็นกลุ่มๆ ละ 4 บิต"
    },
    {
      "question": "การแปลง bit pattern เป็นเลขฐาน 8 (Octal notation) ทำได้โดยการจัดกลุ่มบิตกลุ่มละกี่บิต?",
      "options": [
        "2 บิต",
        "3 บิต",
        "4 บิต",
        "8 บิต"
      ],
      "answer": 1,
      "explanation": "จัดกลุ่ม bit pattern ออกเป็นกลุ่มๆ ละ 3 บิต เพื่อแทนเป็นเลขฐาน 8 1 ตัว"
    }
  ],
  "3": [
    {
      "question": "โครงสร้างภายในของคอมพิวเตอร์ฮาร์ดแวร์แบ่งออกเป็นกี่ส่วนหลัก?",
      "options": [
        "2 ส่วน",
        "3 ส่วน",
        "4 ส่วน",
        "5 ส่วน"
      ],
      "answer": 1,
      "explanation": "แบ่งเป็น 3 ส่วน คือ 1. CPU 2. Main Memory Unit 3. Input/Output Unit"
    },
    {
      "question": "หน่วยประมวลผลกลาง (CPU) มักถูกติดตั้งอยู่ที่ใดในระบบคอมพิวเตอร์?",
      "options": [
        "บนฮาร์ดดิสก์",
        "บนเมนบอร์ด (Main circuit board / System board)",
        "ในพาวเวอร์ซัพพลาย",
        "ในจอภาพ"
      ],
      "answer": 1,
      "explanation": "CPU (processor chip) ถูกติดตั้งอยู่บน Main circuit board ใน system unit หรือเรียกว่า system board / motherboard"
    },
    {
      "question": "องค์ประกอบภายใน CPU ประกอบด้วยอะไรบ้าง?",
      "options": [
        "Memory, Harddisk, I/O",
        "ALU, Registers, Control Unit",
        "Keyboard, Mouse, Monitor",
        "OS, Application, Hardware"
      ],
      "answer": 1,
      "explanation": "องค์ประกอบของ CPU ได้แก่ 1. ALU 2. Registers 3. Control Unit"
    },
    {
      "question": "Arithmetic Logic Unit (ALU) ทำหน้าที่ใด?",
      "options": [
        "เก็บข้อมูลถาวร",
        "ควบคุมอุปกรณ์นำเข้าข้อมูล",
        "คำนวณทางคณิตศาสตร์และเปรียบเทียบทางตรรกศาสตร์",
        "จ่ายกระแสไฟฟ้าให้ CPU"
      ],
      "answer": 2,
      "explanation": "ALU ทำหน้าที่โดยตรงเกี่ยวกับ Arithmetic Operations (คำนวณ) และ Logical Operations (ตรรกศาสตร์)"
    },
    {
      "question": "ข้อใดเป็นตัวอย่างของ Arithmetic Operations ที่ทำงานใน ALU?",
      "options": [
        "NOT, AND, OR, XOR",
        "Increment (บวก 1), Decrement (ลบ 1)",
        "Fetch, Decode, Execute",
        "Read, Write, Delete"
      ],
      "answer": 1,
      "explanation": "Arithmetic Operations เช่น increment (บวก 1), decrement (ลบ 1), บวก, ลบ, คูณ, หาร"
    },
    {
      "question": "Registers คืออะไรในระบบคอมพิวเตอร์?",
      "options": [
        "หน่วยความจำถาวรในฮาร์ดดิสก์",
        "หน่วยความจำหลักที่ใช้เก็บโปรแกรมทั้งหมด",
        "หน่วยความจำชั่วคราวประเภท stand-alone ที่มีความเร็วสูงอยู่ภายใน CPU",
        "อุปกรณ์สำหรับเชื่อมต่อเครือข่าย"
      ],
      "answer": 2,
      "explanation": "Registers เป็นหน่วยความจำชั่วคราวที่มีความเร็วสูงอยู่ใน CPU"
    },
    {
      "question": "Program Counter (PC) ใน CPU ทำหน้าที่อะไร?",
      "options": [
        "เก็บผลลัพธ์จากการคำนวณของ ALU",
        "นับจำนวนโปรแกรมที่กำลังทำงานอยู่",
        "เก็บค่า address ของคำสั่งถัดไปที่จะถูก execute",
        "เก็บข้อมูลที่รับมาจากคีย์บอร์ด"
      ],
      "answer": 2,
      "explanation": "PC เป็น register ที่เก็บค่า address ของคำสั่งที่จะ execute ต่อไป"
    },
    {
      "question": "Instruction Register (IR) ใน CPU ทำหน้าที่อะไร?",
      "options": [
        "เก็บผลลัพธ์ที่รอส่งออก",
        "เก็บที่อยู่ของคำสั่งถัดไป",
        "เก็บคำสั่งที่ดึง (fetch) มาจากหน่วยความจำหลักเพื่อรอการตีความ",
        "เก็บตัวแปรที่ใช้ในการคำนวณ"
      ],
      "answer": 2,
      "explanation": "IR ใช้เก็บคำสั่งที่ fetch มาจากหน่วยความจำหลัก เพื่อทำการตีความหมาย (decode)"
    },
    {
      "question": "Control Unit ทำหน้าที่เปรียบเสมือนอะไรในร่างกายมนุษย์?",
      "options": [
        "หัวใจ",
        "สมองส่วนที่ทำการควบคุมการเคลื่อนไหวและการกระทำของส่วนต่างๆ",
        "แขนและขา",
        "ดวงตา"
      ],
      "answer": 1,
      "explanation": "Control Unit หน่วยควบคุมเปรียบได้กับส่วนหนึ่งของสมองมนุษย์ที่ทำการควบคุมการเคลื่อนไหวและการกระทำของส่วนต่างๆ"
    },
    {
      "question": "Basic Logic Gate ชนิด AND ให้ผลลัพธ์เป็น 1 (True) ในกรณีใด?",
      "options": [
        "เมื่อ input ทั้งคู่เป็น 0",
        "เมื่อ input ตัวใดตัวหนึ่งเป็น 1",
        "เมื่อ input ทั้งคู่เป็น 1",
        "เมื่อ input ต่างกัน"
      ],
      "answer": 2,
      "explanation": "AND gate ให้ผลลัพธ์เป็น 1 ก็ต่อเมื่อ input a และ b เป็น 1 ทั้งคู่"
    },
    {
      "question": "Basic Logic Gate ชนิด OR ให้ผลลัพธ์เป็น 0 (False) ในกรณีใด?",
      "options": [
        "เมื่อ input ทั้งคู่เป็น 0",
        "เมื่อ input ทั้งคู่เป็น 1",
        "เมื่อ input ตัวใดตัวหนึ่งเป็น 1",
        "เมื่อ input ต่างกัน"
      ],
      "answer": 0,
      "explanation": "OR gate ให้ผลลัพธ์เป็น 0 เฉพาะเมื่อ input ทั้งคู่เป็น 0 เท่านั้น"
    },
    {
      "question": "วงจรลบข้อมูล (Subtraction circuit design) ในคอมพิวเตอร์ ทำการลบข้อมูล (a - b) ด้วยวิธีใด?",
      "options": [
        "สร้างวงจรลบขึ้นมาโดยเฉพาะ",
        "ใช้การแปลง b เป็น 2's complement แล้วนำมาบวกกับ a",
        "ส่งข้อมูลไปประมวลผลที่หน่วยความจำ",
        "ใช้ NOT gate ตัวเดียว"
      ],
      "answer": 1,
      "explanation": "Algorithm คือหา 2's complement ของ b แล้วนำผลลัพธ์ไปบวกกับ a (a + (-b))"
    },
    {
      "question": "Instruction format โดยทั่วไปประกอบด้วยสองส่วนหลักคืออะไร?",
      "options": [
        "Input และ Output",
        "Opcode และ Operand",
        "Data และ Address",
        "Source และ Destination"
      ],
      "answer": 1,
      "explanation": "Instruction format ประกอบด้วย Opcode และ Operand"
    },
    {
      "question": "Machine Cycle ประกอบด้วย 3 ขั้นตอนเรียงตามลำดับคืออะไร?",
      "options": [
        "Decode, Fetch, Execute",
        "Execute, Fetch, Decode",
        "Fetch, Decode, Execute",
        "Read, Process, Write"
      ],
      "answer": 2,
      "explanation": "Machine cycle ประกอบด้วย 3 ขั้นตอนคือ Fetch, Decode, และ Execute"
    },
    {
      "question": "ขั้นตอน Fetch ใน Machine Cycle คือการทำอะไร?",
      "options": [
        "การประมวลผลทางคณิตศาสตร์",
        "การนำผลลัพธ์ไปเก็บ",
        "การตีความหมายของคำสั่ง",
        "การคัดลอกคำสั่งจากหน่วยความจำหลักไปเก็บใน Instruction Register"
      ],
      "answer": 3,
      "explanation": "Fetch เป็นขั้นตอนที่คัดลอกคำสั่งจากหน่วยความจำหลักไปเก็บใน Instruction Register"
    },
    {
      "question": "การเชื่อมต่อระหว่าง CPU กับ Main Memory ใช้เส้นทางที่เรียกว่า Bus ซึ่งมีกี่ประเภท?",
      "options": [
        "2 ประเภท",
        "3 ประเภท",
        "4 ประเภท",
        "5 ประเภท"
      ],
      "answer": 1,
      "explanation": "ใช้ bus 3 ชนิด คือ Data Bus, Address Bus, และ Control Bus"
    },
    {
      "question": "Address Bus มีหน้าที่อะไร?",
      "options": [
        "ส่งผ่านข้อมูลระหว่าง memory กับ CPU",
        "ส่งสัญญาณควบคุมจังหวะการทำงาน",
        "เป็นเส้นทางที่ทำให้ CPU สามารถเข้าถึงเลขที่ตำแหน่งที่อยู่ของหน่วยความจำหลักได้",
        "รับข้อมูลจากคีย์บอร์ด"
      ],
      "answer": 2,
      "explanation": "Address bus เป็นเส้นทางที่ทำให้ CPU สามารถเข้าถึงเลขที่ตำแหน่งที่อยู่ของหน่วยความจำหลักได้"
    },
    {
      "question": "จำนวน Address Space หรือจำนวนเลขตำแหน่งที่อยู่ที่ไม่ซ้ำกันทั้งหมด ขึ้นอยู่กับอะไร?",
      "options": [
        "ขนาดของ Data Bus",
        "ความเร็วของ CPU",
        "ขนาดของ Address Width (จำนวนเส้นของ Address bus)",
        "ขนาดของฮาร์ดดิสก์"
      ],
      "answer": 2,
      "explanation": "จำนวนเลขตำแหน่งที่อยู่ที่ไม่ซ้ำกันทั้งหมด (address space) มีจำนวน 2 ยกกำลัง n เมื่อ n คือขนาดของ Address Width"
    },
    {
      "question": "ถ้าหน่วยความจำมีขนาด Address Width เป็น 16 บิต จะมี Address Space เท่าใด?",
      "options": [
        "1,024 ตำแหน่ง",
        "32,768 ตำแหน่ง",
        "65,536 ตำแหน่ง",
        "1,048,576 ตำแหน่ง"
      ],
      "answer": 2,
      "explanation": "ถ้าขนาด 16 บิต จะมี address space เท่ากับ 2 ยกกำลัง 16 = 65,536 ตำแหน่ง"
    },
    {
      "question": "หน่วยความจำประเภท RAM มีคุณสมบัติเด่นคืออะไร?",
      "options": [
        "เก็บข้อมูลได้อย่างถาวร",
        "ไม่สามารถเขียนข้อมูลทับได้",
        "เป็นหน่วยความจำหลักที่ผู้ใช้สามารถอ่านและเขียนข้อมูลได้",
        "มีความจุมากกว่าฮาร์ดดิสก์"
      ],
      "answer": 2,
      "explanation": "RAM เป็นหน่วยความจำส่วนใหญ่ของหน่วยความจำหลัก ผู้ใช้สามารถอ่านและเขียนข้อมูลได้"
    },
    {
      "question": "คุณสมบัติ Volatile ของหน่วยความจำ RAM หมายความว่าอย่างไร?",
      "options": [
        "ทำงานด้วยความเร็วแสง",
        "ข้อมูลที่เก็บไว้จะหายไปหรือถูกลบเมื่อปิดเครื่องหรือไฟดับ",
        "สามารถเก็บข้อมูลได้ถาวร",
        "มีราคาแพงที่สุด"
      ],
      "answer": 1,
      "explanation": "Volatile คือข้อมูลที่เก็บไว้จะหายไปหรือถูกลบทั้งหมดเมื่อปิดเครื่องหรือไฟดับ"
    },
    {
      "question": "SRAM (Static RAM) แตกต่างจาก DRAM (Dynamic RAM) อย่างไร?",
      "options": [
        "SRAM ใช้ตัวเก็บประจุ ส่วน DRAM ใช้ flip-flop",
        "SRAM ต้องมีการรีเฟรชข้อมูลตลอดเวลา",
        "SRAM มีความเร็วสูงแต่ราคาแพง ส่วน DRAM มีราคาถูกแต่ทำงานช้ากว่า",
        "SRAM เป็นหน่วยความจำแบบ Nonvolatile"
      ],
      "answer": 2,
      "explanation": "SRAM ใช้ flip-flop มีความเร็วสูงแต่ราคาแพง ส่วน DRAM ใช้ capacitors มีราคาถูกแต่ทำงานช้าและต้องมีวงจร refresh"
    },
    {
      "question": "หน่วยความจำ ROM ชนิด EPROM สามารถลบข้อมูลที่เขียนไปแล้วด้วยวิธีใด?",
      "options": [
        "ลบโดยใช้กระแสไฟฟ้า",
        "ลบโดยใช้แสงอัลตราไวโอเลต",
        "ลบโดยการฟอร์แมตจากระบบปฏิบัติการ",
        "ไม่สามารถลบได้เลย"
      ],
      "answer": 1,
      "explanation": "EPROM สามารถลบออกได้โดยใช้แสงอัลตราไวโอเลท (UV)"
    },
    {
      "question": "ลำดับขั้นของหน่วยความจำ (Memory Hierarchy) ข้อใดมีความเร็วสูงสุด?",
      "options": [
        "Cache Memory",
        "Main Memory",
        "Registers",
        "Harddisk"
      ],
      "answer": 2,
      "explanation": "Registers ที่อยู่ใน CPU มีความเร็วสูงสุด (Fastest Speed)"
    },
    {
      "question": "หน่วยความจำ Cache มีจุดประสงค์เพื่อแก้ปัญหาใด?",
      "options": [
        "เพื่อทดแทนฮาร์ดดิสก์",
        "เพื่อเก็บข้อมูลถาวร",
        "เพื่อเก็บข้อมูลที่มีการเข้าถึงบ่อย ช่วยย่นเวลาการเข้าถึงข้อมูลของ CPU",
        "เพื่อเพิ่มจำนวน Address Space"
      ],
      "answer": 2,
      "explanation": "Cache มีความเร็วปานกลาง ใช้เพื่อเก็บข้อมูลที่มีการเข้าถึงบ่อย ช่วยให้ CPU ทำงานเร็วขึ้นตามหลักการ 80-20 rule"
    },
    {
      "question": "การเชื่อมต่ออุปกรณ์ I/O กับ CPU และ Memory ต้องมีตัวกลางมาจัดการความแตกต่าง ตัวกลางนี้เรียกว่าอะไร?",
      "options": [
        "ALU",
        "Controller หรือ Interface",
        "Motherboard",
        "Cache"
      ],
      "answer": 1,
      "explanation": "อุปกรณ์ I/O ทำงานช้ากว่า CPU/Memory มาก จำเป็นต้องมีตัวกลางเรียกว่า I/O controller หรือ Interface"
    },
    {
      "question": "ข้อใดเป็นตัวอย่างของ Controller ชนิดขนาน (Parallel Controller) ที่สามารถต่อแบบ Daisy chain ได้?",
      "options": [
        "USB",
        "Serial Port",
        "SCSI",
        "PS/2"
      ],
      "answer": 2,
      "explanation": "SCSI เป็น interface แบบขนานที่สามารถเชื่อมต่อในลักษณะ Daisy chain"
    },
    {
      "question": "ข้อใดคือเทคโนโลยี Serial Interface ประเภทความเร็วสูงที่มักถูกใช้ในการเชื่อมต่อกล้องวิดีโอ?",
      "options": [
        "SCSI",
        "FireWire",
        "Parallel Port",
        "IDE"
      ],
      "answer": 1,
      "explanation": "FireWire เป็น serial interface ประเภทความเร็วสูง (high-speed) ส่งข้อมูลเป็น packet เชื่อมต่อแบบ daisy chain หรือ tree ได้"
    },
    {
      "question": "USB เป็น Controller ประเภทใด?",
      "options": [
        "Parallel Controller",
        "Serial Controller",
        "Wireless Controller",
        "Network Controller"
      ],
      "answer": 1,
      "explanation": "USB (Universal Serial Bus) เป็น serial controller ที่นิยมใช้เชื่อมต่ออุปกรณ์รอบข้างทั่วไป"
    },
    {
      "question": "อุปกรณ์เก็บข้อมูลที่ใช้แสง (Optical Storage) ตัวใดที่ผู้ใช้สามารถเขียนข้อมูลได้เพียงครั้งเดียว แต่สามารถอ่านได้หลายครั้ง (WORM)?",
      "options": [
        "CD-ROM",
        "CD-R",
        "CD-RW",
        "Magnetic Tape"
      ],
      "answer": 1,
      "explanation": "CD-R (Compact Disk Recordable) เป็นการบันทึกครั้งเดียวแต่อ่านได้หลายๆ ครั้ง (Write Once, Read Many = WORM)"
    }
  ],
  "4": [
    {
      "question": "ข้อใดคือนิยามของภาษาโปรแกรม (Programming Language) ตามสไลด์บทเรียน?",
      "options": [
        "รหัสเลขฐานสองที่เขียนขึ้นเพื่อควบคุมวงจรอิเล็กทรอนิกส์ใน CPU เท่านั้น",
        "ภาษาธรรมชาติที่มนุษย์ใช้สื่อสารกับฮาร์ดแวร์โดยตรงโดยไม่ต้องแปล",
        "ชุดคำสั่งสำเร็จรูปที่ไม่สามารถปรับเปลี่ยนหรือคำนวณอัลกอริทึมใหม่ได้",
        "ภาษาประดิษฐ์ที่ถูกออกแบบขึ้นเพื่ออธิบายการคำนวณหรืออัลกอริทึมที่คอมพิวเตอร์สามารถทำงานได้"
      ],
      "answer": 3,
      "explanation": "ตามนิยามในสไลด์ (อ้างอิง Wikipedia) Programming language คือ artificial language ที่ออกแบบมาเพื่อ express computations หรือ algorithms ที่คอมพิวเตอร์สามารถประมวลผลได้"
    },
    {
      "question": "โปรแกรม (Program) ที่ถูกเขียนขึ้นจากอัลกอริทึม มีองค์ประกอบการทำงานหลัก 3 ส่วนตามข้อใด?",
      "options": [
        "รับข้อมูล (Input), บันทึกลงฮาร์ดดิสก์ (Save), และปิดเครื่อง (Shutdown)",
        "เขียนโค้ด (Coding), ทดสอบระบบ (Testing), และส่งมอบงาน (Deployment)",
        "รับข้อมูลนำเข้า (Input), คำนวณประมวลผล (Calculations), และส่งผลลัพธ์ออก (Output)",
        "สร้างหน่วยความจำ (Memory), ตรวจสอบไวรัส (Security), และจัดเก็บไฟล์ (Storage)"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 1 ระบุว่า Program คือ computer coding ของ algorithm ที่ 1. Takes input 2. Performs some calculations on the input 3. Generates output"
    },
    {
      "question": "คุณสมบัติสำคัญของ Stored-Program Concept ในสถาปัตยกรรม von Neumann คือข้อใด?",
      "options": [
        "โปรแกรมต้องถูกบันทึกลงในฮาร์ดดิสก์เท่านั้น ห้ามโหลดลงหน่วยความจำหลัก",
        "คำสั่งแต่ละคำสั่งจะถูกส่งตรงจากคีย์บอร์ดไปยัง ALU โดยไม่ผ่านหน่วยความจำ",
        "โปรแกรมและข้อมูลจะต้องถูกแยกเก็บไว้ในหน่วยความจำคนละตัวอย่างเด็ดขาด",
        "ทั้งโปรแกรม (Instructions) และข้อมูล (Data) จะถูกจัดเก็บอยู่ในหน่วยความจำ (Memory) เดียวกัน"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 6 ระบุคุณลักษณะหลักของ von Neumann Architecture ว่า 'Data and programs stored in memory' และส่งผ่าน memory เข้าสู่ CPU"
    },
    {
      "question": "ในวงรอบการทำงานของ von Neumann ตัวนับโปรแกรม (Program Counter: PC) มีหน้าที่อะไร?",
      "options": [
        "นับจำนวนรอบทั้งหมดที่ CPU ทำงานตั้งแต่เปิดเครื่อง",
        "เก็บผลลัพธ์ของการคำนวณทางคณิตศาสตร์จาก ALU",
        "เก็บแอดเดรสของคำสั่งถัดไปที่รอการดึงมาประมวลผล",
        "ตรวจสอบว่าเกิด Error ในโปรแกรมหรือไม่"
      ],
      "answer": 2,
      "explanation": "Program Counter (PC) เป็นรีจิสเตอร์ที่ทำหน้าที่ชี้ไปยังคำสั่งถัดไป (Point to the next instruction) ในหน่วยความจำที่จะถูก Fetch เข้ามา"
    },
    {
      "question": "ลำดับขั้นตอนใน 1 รอบของ Fetch-Execute Cycle ของสถาปัตยกรรม von Neumann คือข้อใด?",
      "options": [
        "Decode instruction -> Fetch instruction -> Execute instruction -> Increment PC",
        "Increment PC -> Execute instruction -> Fetch instruction -> Decode instruction",
        "Execute instruction -> Decode instruction -> Increment PC -> Fetch instruction",
        "Fetch instruction -> Increment PC -> Decode instruction -> Execute instruction"
      ],
      "answer": 3,
      "explanation": "ตามสไลด์หน้า 6 ในลูป repeat forever ประกอบด้วย: 1. fetch the instruction pointed by PC 2. increment the counter 3. decode the instruction 4. execute the instruction"
    },
    {
      "question": "คำว่า กระบวนทัศน์การเขียนโปรแกรม (Programming Paradigm) มีความหมายตรงกับข้อใดที่สุด?",
      "options": [
        "เครื่องมือที่ใช้ในการตรวจจับข้อผิดพลาดของไวยากรณ์ในโปรแกรม",
        "เวอร์ชันล่าสุดของภาษาโปรแกรมคอมพิวเตอร์",
        "มาตรฐานความเร็วในการประมวลผลของตัวแปลภาษา",
        "รูปแบบหรือสไตล์พื้นฐานในการเขียน จัดโครงสร้าง และวิธีคิดในการแก้ปัญหาด้วยโค้ด"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 9 ระบุว่า Programming paradigm is a fundamental style or approach to programming that shapes how developers write, organize, and think about code."
    },
    {
      "question": "ข้อใดอธิบายความแตกต่างระหว่าง Mutable variable และ Immutable variable ได้ถูกต้อง?",
      "options": [
        "Mutable variable ไม่เปลืองหน่วยความจำ ส่วน Immutable variable กินพื้นที่หน่วยความจำมหาศาล",
        "Mutable variable ใช้เก็บเฉพาะตัวเลข ส่วน Immutable variable ใช้เก็บเฉพาะข้อความ",
        "Mutable variable สามารถเปลี่ยนค่าหลังจากกำหนดได้ ส่วน Immutable variable ไม่สามารถเปลี่ยนค่าได้หลังจากกำหนดแล้ว",
        "Mutable variable พบได้เฉพาะในภาษา Functional ส่วน Immutable variable พบได้ในภาษา Imperative"
      ],
      "answer": 2,
      "explanation": "Mutable variable คือตัวแปรที่สามารถแก้ไขเปลี่ยนแปลงค่าในหน่วยความจำได้ตลอดการทำงาน ในขณะที่ Immutable variable ค่าจะคงที่ ไม่สามารถเปลี่ยนแปลงได้หลังจากกำหนดค่าแล้ว"
    },
    {
      "question": "ภาษาประเภท Imperative Language มีความสัมพันธ์โดยตรงกับโครงสร้างใดของคอมพิวเตอร์?",
      "options": [
        "สถาปัตยกรรม Quantum Computer",
        "ระบบฐานข้อมูลเชิงสัมพันธ์ (RDBMS)",
        "สถาปัตยกรรม von Neumann (มี Memory, ALU และ Control Unit)",
        "โครงสร้างเครือข่ายอินเทอร์เน็ตแบบกระจายศูนย์"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 17 แสดงผังว่า Imperative Language เชื่อมโยงและจำลองการทำงานโดยตรงมาจาก von Neumann Architecture ซึ่งประกอบด้วย Memory, ALU, Control"
    },
    {
      "question": "ภาษา C จัดอยู่ในกระบวนทัศน์ (Paradigm) ใด และมีลักษณะการเขียนอย่างไร?",
      "options": [
        "Imperative Paradigm: เน้นการสั่งงานเป็นลำดับขั้นตอนเพื่อเปลี่ยนสถานะของหน่วยความจำ (How to do)",
        "Logic Paradigm: เน้นการประกาศกฎและข้อเท็จจริงเพื่อให้ระบบค้นหาคำตอบ (What to do)",
        "Functional Paradigm: เน้นการประเมินผลฟังก์ชันทางคณิตศาสตร์แบบไม่เปลี่ยนค่าตัวแปร",
        "Concurrent Paradigm: บังคับให้ทุกฟังก์ชันทำงานขนานกันบนหลาย CPU เสมอ"
      ],
      "answer": 0,
      "explanation": "ภาษา C เป็นภาษา Imperative ที่เขียนสั่งงานเป็นขั้นตอน (Step-by-step instructions) โดยมีการกำหนดค่าและแก้ไขตัวแปรในหน่วยความจำอย่างชัดเจน"
    },
    {
      "question": "ภาษา Prolog จัดอยู่ในกระบวนทัศน์ใด และมีรูปแบบการทำงานอย่างไร?",
      "options": [
        "Object-Oriented Programming: สร้าง Class และสืบทอดคุณสมบัติของ Object",
        "Low-level Assembly: สั่งงาน Register และ Address ของหน่วยความจำโดยตรง",
        "Declarative / Logic Programming: เขียนด้วยข้อเท็จจริง (Facts) และกฎ (Rules) เพื่อค้นหาคำตอบ",
        "Imperative Programming: สั่งให้ CPU ทำงานตามลำดับทีละบรรทัดด้วยลูป for/while"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 18 ระบุว่า Prolog จัดอยู่ใน Declarative / Logic programming ซึ่งโปรแกรมจะประกอบด้วยกฎและข้อเท็จจริงทางตรรกะ"
    },
    {
      "question": "ภาษา LISP จัดอยู่ในกระบวนทัศน์ใด และมีลักษณะเด่นอย่างไร?",
      "options": [
        "Logic Programming: ใช้เครื่องหมายตรรกะในการพิสูจน์ทฤษฎีบท",
        "Imperative Programming: ใช้จัดการอุปกรณ์ฮาร์ดแวร์และเขียนระบบปฏิบัติการ",
        "Visual Programming: ใช้การลากบล็อกคำสั่งมาต่อกันเพื่อสร้างโปรแกรม",
        "Functional Programming: นิยมใช้ในงาน AI และเน้นการคำนวณผ่านฟังก์ชันคณิตศาสตร์เป็นหลัก"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 18 จัด LISP อยู่ในกลุ่ม Functional Language ซึ่งถูกออกแบบมาสำหรับงาน AI และมีแนวคิดการคำนวณแบบฟังก์ชันทางคณิตศาสตร์"
    },
    {
      "question": "ภาษาประเภท Concurrent Language ถูกออกแบบมาเพื่อตอบสนองการทำงานลักษณะใด?",
      "options": [
        "การสร้างกราฟิกและแอนิเมชันสำหรับเกม",
        "การจัดเก็บข้อมูลแบบถาวรบนสื่อบันทึกข้อมูล",
        "การแปลภาษาแบบใช้เวลาน้อยที่สุดบนเครื่องเดี่ยว",
        "การประมวลผลคำสั่งหรือโปรเซสหลายงานพร้อมๆ กัน (Parallel / Concurrent execution)"
      ],
      "answer": 3,
      "explanation": "Concurrent Language ออกแบบมาเพื่อจัดการการประมวลผลที่เกิดขึ้นพร้อมกันหรือขนานกัน (Concurrency) โดยจัดการ synchronization และการสื่อสารระหว่างโปรเซส"
    },
    {
      "question": "ในยุค 1950s ถึงต้น 1960s (เช่น ภาษา FORTRAN) การออกแบบภาษาให้ความสำคัญกับสิ่งใดมากที่สุด?",
      "options": [
        "Data abstraction (การซ่อนและห่อหุ้มโครงสร้างข้อมูล)",
        "Readability (ความง่ายของมนุษย์ในการอ่านโค้ด)",
        "Machine efficiency (ประสิทธิภาพและความเร็วในการทำงานของเครื่องคอมพิวเตอร์)",
        "Object-Oriented Programming (การเขียนโปรแกรมเชิงวัตถุ)"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 20 ระบุว่าช่วง 1950s and early 1960s โปรแกรมยังเรียบง่าย ข้อกังวลหลักคือ 'worry about machine efficiency (FORTRAN)' เนื่องจากคอมพิวเตอร์ยุคนั้นยังมีทรัพยากรจำกัดมาก"
    },
    {
      "question": "ในช่วงปลายทศวรรษ 1960 (เช่น ภาษา ALGOL) การออกแบบภาษาเปลี่ยนทิศทางมาเน้นเรื่องใดเป็นสำคัญ?",
      "options": [
        "Network communication: รองรับการเชื่อมต่ออินเทอร์เน็ตความเร็วสูง",
        "Cloud computing: รองรับการประมวลผลบนคลาวด์",
        "Hardware efficiency: ตัดคำสั่งควบคุมทิ้งทั้งหมดเพื่อเพิ่มความเร็วเครื่อง",
        "People efficiency: เน้นความง่ายในการอ่าน (Readability) และโครงสร้างควบคุมที่ดีขึ้น"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 20 ระบุว่า Late 1960s เปลี่ยนมาให้ความสำคัญกับ 'people efficiency important; readability, better control structures (ALGOL)'"
    },
    {
      "question": "แนวคิดการออกแบบ Structured programming, Top-down design และ Step-wise refinement เริ่มมีบทบาทสำคัญในยุคใด?",
      "options": [
        "ปลายทศวรรษ 1960 (Late 1960s)",
        "ต้นทศวรรษ 1950 (Early 1950s)",
        "ต้นทศวรรษ 2010 (Early 2010s)",
        "กลางทศวรรษ 1990 (Middle 1990s)"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 20 จัด Structured programming, free format lexical, Top-down design และ step-wise refinement ไว้ในยุค Late 1960s"
    },
    {
      "question": "ในช่วงปลายทศวรรษ 1970 (Late 1970s) วิธีการออกแบบโปรแกรมเปลี่ยนจาก Process-oriented ไปสู่สิ่งใด?",
      "options": [
        "AI-oriented (การใช้โมเดลโครงข่ายประสาทเทียม)",
        "Data-oriented (การเน้นโครงสร้างและการนามธรรมข้อมูล หรือ Data abstraction)",
        "Web-oriented (การเขียนเว็บแอปพลิเคชัน)",
        "Machine-oriented (การเขียนภาษาเครื่องโดยตรง)"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 20 ระบุว่า Late 1970s: process-oriented to data-oriented (Data abstraction)"
    },
    {
      "question": "คุณลักษณะสำคัญ 3 ประการของ Object-Oriented Programming (OOP) ที่แพร่หลายในยุคกลาง 1980s คือข้อใด?",
      "options": [
        "Machine code + Assembly + High-level language",
        "Input + Calculations + Output",
        "Pointers + Arrays + Functions",
        "Data abstraction + Inheritance + Dynamic binding"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 20 ระบุว่า Middle 1980s: object-oriented programming คือ 'Data abstraction + inheritance + dynamic binding'"
    },
    {
      "question": "การนำภาษาโปรแกรมไปทำให้ใช้งานได้จริง (Implementation of a PL construct) มีความหมายตรงกับข้อใด?",
      "options": [
        "การซื้อลิขสิทธิ์ซอฟต์แวร์ภาษามาติดตั้งบนเครื่องคอมพิวเตอร์",
        "การออกแบบฟอนต์ตัวอักษรสำหรับพิมพ์โค้ดในโปรแกรมแก้ไขข้อความ",
        "การแปลง/แมปโครงสร้างของภาษาขั้นสูงให้อยู่ในรูปภาษาระดับต่ำกว่า เช่น Assembly หรือภาษาเครื่อง",
        "การเขียนคู่มือการใช้งานภาษาให้ผู้ใช้ทั่วไปอ่านเข้าใจได้"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 24 ระบุว่า Implementation of a PL construct means its realization in a lower-level language, e.g. assembly -> mapping/translation from a high-level language to a low-level language"
    },
    {
      "question": "ขั้นตอนแรกของ Compiler คือ Lexical Analysis (Scanner) ทำหน้าที่อะไร?",
      "options": [
        "จำลองการรันโปรแกรมเพื่อตรวจสอบผลลัพธ์แบบเรียลไทม์",
        "นำไลบรารีภายนอกมาเชื่อมโยงเข้ากับโปรแกรมหลัก (Link and Load)",
        "แปลงโค้ดให้กลายเป็นไฟล์ภาษาเครื่อง (.exe) ทันที",
        "แปลงตัวอักษรในซอร์สโค้ด (Source Program) ให้เป็นกลุ่มคำหรือหน่วยคำ (Lexical units / Tokens)"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 25 ระบุว่า 'Lexical analysis: converts characters in the source program into lexical units'"
    },
    {
      "question": "ขั้นตอน Syntax Analysis (Parser) ในกระบวนการคอมไพล์ ทำหน้าที่อะไร?",
      "options": [
        "แปลง Lexical units ให้อยู่ในรูป Parse Tree ที่สะท้อนโครงสร้างไวยากรณ์ของโปรแกรม",
        "แปลงตัวอักษรทีละตัวเป็นรหัส ASCII",
        "คำนวณผลลัพธ์ทางคณิตศาสตร์ทั้งหมดในโปรแกรมล่วงหน้า",
        "นำโปรแกรมไปติดตั้งลงในหน่วยความจำ RAM ของเครื่อง"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 25 ระบุว่า 'Syntax analysis: transforms lexical units into parse trees which represent syntactic structure of program'"
    },
    {
      "question": "ขั้นตอน Semantics Analysis และ Code Generation ในกระบวนการคอมไพล์ ทำหน้าที่อะไรตามลำดับ?",
      "options": [
        "ตรวจสอบความหมายพร้อมสร้าง Intermediate code และแปลงให้เป็น Machine code (ภาษาเครื่อง)",
        "จัดเก็บตัวแปรลงใน Harddisk และลบโค้ดที่ไม่ใช้ออก",
        "แปลงภาษาเครื่องกลับไปเป็นภาษาแอสเซมบลี",
        "แปลงเป็น Bytecode แล้วรันบน JVM โดยตรง"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 25: Semantics analysis ทำหน้าที่ generate intermediate code และ Code generation ทำหน้าที่ generate machine code"
    },
    {
      "question": "ข้อใดอธิบายความแตกต่างระหว่าง Syntax และ Semantics ได้ถูกต้องที่สุด?",
      "options": [
        "Syntax คือกฎเกณฑ์และโครงสร้างทางไวยากรณ์ ส่วน Semantics คือความหมายหรือการทำงานจริงของประโยคคำสั่ง",
        "Syntax คือความหมายของโปรแกรม ส่วน Semantics คือรูปแบบการสะกดคำ",
        "Syntax ใช้เฉพาะในภาษาแปลด้วย Compiler ส่วน Semantics ใช้เฉพาะกับ Interpreter",
        "Syntax คือความเร็วของโปรแกรม ส่วน Semantics คือขนาดไฟล์ของโปรแกรม"
      ],
      "answer": 0,
      "explanation": "Syntax หมายถึง รูปแบบและกฎเกณฑ์ทางไวยากรณ์ (Grammar/Form) ส่วน Semantics หมายถึง ความหมายหรือพฤติกรรมการทำงาน (Meaning/Behavior) ของคำสั่ง"
    },
    {
      "question": "จากตัวอย่างเปรียบเทียบในสไลด์ ประโยค 'กิน ข้าว คน' ถือเป็นข้อผิดพลาดประเภทใด เพราะเหตุใด?",
      "options": [
        "Semantic error เพราะคำว่า กิน ไม่มีความหมายในพจนานุกรม",
        "Logical error เพราะประโยคมีความยาวสั้นเกินไป",
        "Run-time error เพราะประโยคนี้ทำงานแล้วทำให้ระบบหยุดทำงานทันที",
        "Syntax error เพราะเรียงลำดับโครงสร้างประโยคผิดไวยากรณ์ (กริยา กรรม ประธาน)"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 26 ยกตัวอย่าง 'กิน ข้าว คน' ว่าเป็น syntax error เพราะผิดโครงสร้างไวยากรณ์ ในขณะที่ 'ข้าว กิน คน' ไวยากรณ์ถูก (ประธาน กริยา กรรม) แต่ผิดความหมาย จึงเป็น semantic error"
    },
    {
      "question": "จากตัวอย่างโค้ด: int x = 100; int y = x + u; (โดยที่ u ไม่เคยถูกประกาศหรือกำหนดค่ามาก่อน) จัดเป็นข้อผิดพลาดประเภทใด?",
      "options": [
        "Hardware error เพราะหน่วยความจำไม่รองรับตัวแปร x",
        "Linker error เพราะไม่มีการโหลดไลบรารี math.h",
        "Semantic error เพราะโครงสร้างไวยากรณ์ถูกต้อง แต่ตัวแปร u ไม่ถูกนิยามความหมายไว้ (u undefined)",
        "Syntax error เพราะในภาษา C ห้ามนำตัวแปรมาบวกกัน"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 27 ระบุว่า int x = 100; int y = x + u; มีโครงสร้าง syntax ที่ถูกต้อง (Valid Syntax) แต่เกิด Invalid semantics เพราะตัวแปร u ไม่ได้ถูกนิยาม (u undefined)"
    },
    {
      "question": "หลักการทำงานของตัวแปลภาษาแบบ Interpreter ทำงานอย่างไร?",
      "options": [
        "ตรวจสอบเฉพาะข้อผิดพลาดทางไวยากรณ์แล้วหยุดทำงานทันที",
        "ทำหน้าที่เป็นตัวจำลอง (Simulator หรือ Virtual machine) อ่านและสั่งประมวลผลโค้ดทีละคำสั่งโดยไม่ต้องแปลเป็นไฟล์ภาษาเครื่องล่วงหน้า",
        "แปลซอร์สโค้ดทั้งหมดเป็นไฟล์ Executable (.exe) เพียงครั้งเดียวแล้วบันทึกลงดิสก์",
        "ส่งคำสั่งตรงไปยัง BIOS ของเมนบอร์ดโดยไม่ผ่าน CPU"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 29 ระบุว่า 'Program interpreted by another program (interpreter) without translation' และ 'Interpreter acts as a simulator or virtual machine'"
    },
    {
      "question": "ข้อใดคือข้อดีสำคัญของ Interpreter เมื่อเปรียบเทียบกับ Compiler?",
      "options": [
        "ทำให้โปรแกรมทำงานได้เร็วกว่าคอมไพเลอร์ 10 ถึง 100 เท่า",
        "สร้างไฟล์ภาษาเครื่องที่มีความปลอดภัยจากการถูกแฮกสูงกว่า",
        "สามารถตรวจจับและแสดง Run-time errors ได้ทันที ทำให้พัฒนาและดีบั๊กโปรแกรมได้ง่าย",
        "ใช้พื้นที่หน่วยความจำน้อยกว่าคอมไพเลอร์มาก"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 29 ระบุข้อดีของ Interpreter: 'Easier implementation of programs (run-time errors can easily and immediately displayed)'"
    },
    {
      "question": "ข้อใดคือข้อจำกัดหรือข้อเสียสำคัญของระบบที่ใช้ Pure Interpretation?",
      "options": [
        "เขียนคำสั่งแบบเงื่อนไขหรือการวนลูปไม่ได้",
        "ไม่สามารถแสดงตำแหน่งบรรทัดที่เกิดข้อผิดพลาดได้",
        "ไม่สามารถรันบนระบบปฏิบัติการที่หลากหลายได้",
        "ประมวลผลได้ช้ากว่าโปรแกรมที่คอมไพล์แล้วประมาณ 10 ถึง 100 เท่า และมักใช้พื้นที่หน่วยความจำมากกว่า"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 29 ระบุข้อเสียของ Pure Interpretation ว่า: 'Slower execution (10 to 100 times slower than compiled programs)' และ 'Often requires more space'"
    },
    {
      "question": "ระบบแบบ Hybrid Implementation System (เช่น ภาษา Java) มีกระบวนการทำงานอย่างไร?",
      "options": [
        "ใช้ Compiler 2 ตัวประมวลผลพร้อมกันเพื่อให้ได้ความเร็วสองเท่า",
        "รันโปรแกรมบนคลาวด์และเครื่องผู้ใช้พร้อมกัน",
        "แปลซอร์สโค้ดระดับสูงให้อยู่ในรูปภาษากลาง (Intermediate Language เช่น Bytecode) ก่อน แล้วจึงรันด้วย Interpreter",
        "เขียนโค้ดด้วยภาษา C สลับกับภาษา Assembly ในไฟล์เดียวกัน"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 30 ระบุว่า 'A high-level language program is translated to an intermediate language that allows easy interpretation (Faster than pure interpretation)' เช่น Java Bytecode บน JVM"
    },
    {
      "question": "เกณฑ์สำคัญ 4 ประการที่ใช้ในการประเมินภาษาโปรแกรม (Language Evaluation Criteria) ตามสไลด์หน้าสรุปคือข้อใด?",
      "options": [
        "Frontend, Backend, Database, Cloud",
        "Speed, Size, Color, Graphics",
        "Readability, Writability, Reliability, Cost",
        "Memory, CPU, Harddisk, Network"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 31 ระบุชัดเจนว่า 'Most important criteria for evaluating programming languages include: Readability, writability, reliability, cost'"
    },
    {
      "question": "ปัจจัยหลัก 3 ประการที่มีอิทธิพลต่อการออกแบบภาษาโปรแกรม (Major influences on language design) คือข้อใด?",
      "options": [
        "Application domains, Machine architecture, Software development methodologies",
        "Internet speed, Screen resolution, Keyboard layout",
        "Operating system, Power supply, Cooling fan",
        "Programming competition, Marketing budget, Brand name"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 31 ระบุว่า 'Major influences on language design have been application domains, machine architecture and software development methodologies'"
    }
  ],
  "5": [
    {
      "question": "ซอฟต์แวร์คอมพิวเตอร์แบ่งออกเป็น 2 ประเภทหลัก คือข้อใด และระบบปฏิบัติการ (OS) จัดอยู่ในประเภทใด?",
      "options": [
        "Hardware Software และ User Software โดย OS จัดเป็น Hardware Software",
        "Utility Software และ Game Software โดย OS จัดเป็น Game Software",
        "Open-source Software และ Commercial Software โดย OS จัดเป็น Commercial Software",
        "System Software และ Application Software โดย OS จัดเป็น System Software"
      ],
      "answer": 3,
      "explanation": "สไลด์บทที่ 5 หน้า 2 ระบุว่าซอฟต์แวร์แบ่งเป็น 2 ประเภทคือ ระบบปฏิบัติการ (operating system) ซึ่งเป็น System Software และซอฟต์แวร์ประยุกต์ (application software)"
    },
    {
      "question": "ข้อใดคือจุดเด่นและลักษณะเฉพาะของระบบปฏิบัติการ Linux เมื่อเทียบกับ Windows และ macOS?",
      "options": [
        "เป็นระบบปฏิบัติการแบบปิดที่จำหน่ายโดยบริษัทเอกชนรายเดียว",
        "เป็นระบบปฏิบัติการที่ไม่รองรับการพิมพ์คำสั่งผ่าน Command Line",
        "เป็นระบบปฏิบัติการแบบ Open Source พัฒนาโดยชุมชน มีความยืดหยุ่นสูง และผู้ใช้สามารถปรับแต่งระบบได้ตามต้องการ",
        "เป็นระบบปฏิบัติการที่พัฒนาขึ้นสำหรับใช้งานบน iPhone และ iPad เท่านั้น"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 3 ระบุว่า Linux เป็นระบบปฏิบัติการโอเพ่นซอร์ส มีหลายเวอร์ชัน พัฒนาโดยชุมชนผู้ใช้ เหมาะสำหรับผู้ที่ต้องการความยืดหยุ่นและปรับแต่งระบบได้ตามต้องการ"
    },
    {
      "question": "ระบบปฏิบัติการ Android และ iOS มีความแตกต่างกันด้านผู้พัฒนาและการใช้งานหลักอย่างไร?",
      "options": [
        "Android พัฒนาโดย Apple ส่วน iOS พัฒนาโดยชุมชนผู้ใช้ Linux",
        "Android พัฒนาโดย Microsoft สำหรับโน้ตบุ๊ก ส่วน iOS พัฒนาโดย Google สำหรับอุปกรณ์สวมใส่",
        "Android พัฒนาโดย Google นิยมใช้มากที่สุดในโลกบนสมาร์ทโฟน/แท็บเล็ต ส่วน iOS พัฒนาโดย Apple สำหรับ iPhone และ iPad",
        "Android ใช้งานได้เฉพาะบนเครื่องเซิร์ฟเวอร์ ส่วน iOS ใช้งานบนสมาร์ทโฟนทั่วไป"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 3 ระบุว่า Android พัฒนาโดย Google เป็น OS มือถือที่นิยมที่สุดในโลก และ iOS พัฒนาโดย Apple ใช้บน iPhone/iPad"
    },
    {
      "question": "ข้อใดคือนิยามและหน้าที่ของระบบปฏิบัติการ (OS) ในฐานะตัวเชื่อมต่อ (Interface)?",
      "options": [
        "ทำหน้าที่เป็นตัวเชื่อมต่อ (Interface) ระหว่างฮาร์ดแวร์กับผู้ใช้ (User) เพื่อช่วยให้เข้าถึงและใช้งานฮาร์ดแวร์ได้สะดวก",
        "ทำหน้าที่แปลงไฟฟ้ากระแสสลับให้เป็นไฟฟ้ากระแสตรงสำหรับเลี้ยงบอร์ด",
        "ทำหน้าที่ล้างข้อมูลในฮาร์ดดิสก์ทุกครั้งที่มีการเปิดเครื่องใหม่",
        "ทำหน้าที่พิมพ์เอกสารออกทางเครื่องพิมพ์โดยอัตโนมัติ"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 4 ระบุว่า OS เป็นซอฟต์แวร์ที่เชื่อมต่อ (interface) ระหว่างฮาร์ดแวร์กับผู้ใช้ (user) ซึ่งอาจเป็นโปรแกรมหรือคนก็ได้"
    },
    {
      "question": "ในฐานะที่ระบบปฏิบัติการทำหน้าที่คล้าย \"ผู้จัดการ (Manager)\" ของระบบ OS มีบทบาทอย่างไรเมื่อเกิดการขัดแย้งในการใช้ทรัพยากร?",
      "options": [
        "เป็นตัวกลางในการจัดสรร ตัดสินใจ และแก้ปัญหาความขัดแย้งในการแย่งใช้ทรัพยากร",
        "สั่งปิดเครื่องคอมพิวเตอร์ทันทีเพื่อป้องกันฮาร์ดแวร์เสียหาย",
        "ลบโปรแกรมที่กำลังทำงานทิ้งทั้งหมดเพื่อเริ่มต้นใหม่",
        "แจ้งให้ผู้ใช้ถอดปลั๊กไฟออกเพื่อรีเซ็ตวงจรไฟฟ้า"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 4 ระบุว่า OS ทำหน้าที่คล้ายผู้จัดการ คอยตรวจสอบและเป็นตัวกลางในการแก้ปัญหาเมื่อเกิดการขัดแย้งในการใช้ทรัพยากร"
    },
    {
      "question": "วัตถุประสงค์หลัก 2 ประการในการออกแบบระบบปฏิบัติการคือข้อใด?",
      "options": [
        "ทำให้การใช้ฮาร์ดแวร์มีประสิทธิภาพสูงสุด และทำให้การทำงานของผู้ใช้สะดวกที่สุด",
        "ลดขนาดตัวเครื่องคอมพิวเตอร์ และเพิ่มความจุของแบตเตอรี่",
        "บังคับให้ผู้ใช้ต้องมีความรู้ทางอิเล็กทรอนิกส์ชั้นสูง และขายซอฟต์แวร์ให้ได้มากที่สุด",
        "ทำให้โปรแกรมไม่ต้องใช้หน่วยความจำ RAM และป้องกันการเชื่อมต่อเน็ต"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 5 ระบุวัตถุประสงค์ของการออกแบบ OS คือ 1. ต้องทำให้การใช้ฮาร์ดแวร์มีประสิทธิภาพสูงสุด 2. ต้องทำให้การทำงานของผู้ใช้ง่ายและสะดวกที่สุด"
    },
    {
      "question": "กระบวนการเปิดเครื่อง (Booting) ของระบบคอมพิวเตอร์ หมายถึงขั้นตอนใด?",
      "options": [
        "การสแกนไวรัสในแฟลชไดรฟ์ที่เสียบอยู่",
        "การลบไฟล์ชั่วคราวทั้งหมดออกจากแคชของบราวเซอร์",
        "การติดตั้งแอปพลิเคชันใหม่ลงในระบบ",
        "การโหลดระบบปฏิบัติการจากหน่วยความจำสำรอง (Secondary Storage) เข้าสู่หน่วยความจำหลัก (RAM)"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 9 ระบุว่า Booting เป็นกระบวนการที่นำ OS จาก secondary memory (เช่น Harddisk) มาไว้ใน main memory (RAM) เพื่อเตรียมพร้อมใช้งาน"
    },
    {
      "question": "โปรแกรม Bootstrap Program มักจะถูกจัดเก็บไว้ในหน่วยความจำชนิดใด และทำหน้าที่อะไร?",
      "options": [
        "ถูกเก็บไว้ใน RAM ชนิดชั่วคราวที่จะหายไปเมื่อปิดเครื่อง",
        "ถูกเก็บไว้ในแผ่น CD สำรองข้อมูลฉุกเฉิน",
        "ถูกเก็บไว้ในสาย LAN ของเครือข่าย",
        "ถูกเก็บไว้ใน ROM ทำหน้าที่เริ่มต้นตรวจสอบฮาร์ดแวร์และโหลดระบบปฏิบัติการขึ้นมาทำงาน"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 9 ระบุว่า Bootstrap Program มักจะถูกเก็บไว้ใน ROM ทำหน้าที่ตรวจสอบระบบและโหลด OS ขึ้นมาทำงาน"
    },
    {
      "question": "ระบบปฏิบัติการยุคแรกแบบ Batch System (ระบบแบทช์) มีลักษณะการทำงานอย่างไร?",
      "options": [
        "สามารถแตะหน้าจอเพื่อสั่งงานแบบ Interactive ได้ทันที",
        "แบ่งเวลาการทำงานให้ผู้ใช้หลายพันคนพร้อมกันผ่านอินเทอร์เน็ต",
        "รวบรวมงานที่คล้ายกันเป็นชุด (Batch) แล้วส่งให้เครื่องประมวลผลเรียงตามลำดับโดยไม่มีการโต้ตอบกับผู้ใช้ระหว่างทำ",
        "ใช้กับสมาร์ทโฟนและแท็บเล็ตเป็นหลัก"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 10 อธิบายว่า Batch system เป็นระบบยุคแรกที่จัดกลุ่มงานเป็น Batch ส่งให้คอมพิวเตอร์ประมวลผลทีละชุดตามลำดับ"
    },
    {
      "question": "ระบบปฏิบัติการแบบแบ่งเวลา (Time-Sharing / Multiprogramming) มีหลักการทำงานเพื่อรองรับผู้ใช้หลายคนอย่างไร?",
      "options": [
        "รอให้โปรแกรมแรกทำงานจนเสร็จสมบูรณ์ 100% ก่อนจึงจะเริ่มโปรแกรมถัดไป",
        "ใช้ CPU 1 ตัวแยกกันสำหรับผู้ใช้แต่ละคนเสมอ",
        "สลับการทำงานของ CPU ไปมาระหว่างหลายโปรเซสอย่างรวดเร็วมากจนผู้ใช้แต่ละคนรู้สึกว่าได้ใช้เครื่องคนเดียว",
        "ส่งงานทั้งหมดไปประมวลผลบนเครื่องพิมพ์แทน CPU"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 11 อธิบายว่า Time-sharing ทำงานโดยสลับการทำงานของ CPU ให้กับแต่ละโปรแกรมอย่างรวดเร็ว ทำให้ประมวลผลหลายงานได้พร้อมกัน"
    },
    {
      "question": "ระบบปฏิบัติการแบบ Real-Time System (ระบบเวลาจริง) มีคุณลักษณะเด่นสำคัญที่จำเป็นที่สุดคือข้อใด?",
      "options": [
        "ต้องมีกราฟิกสวยงามระดับ 3 มิติเพื่อความสมจริง",
        "ต้องเชื่อมต่อกับโซเชียลมีเดียได้ตลอดเวลา",
        "ต้องประมวลผลและตอบสนองต่อเหตุการณ์ภายในกรอบเวลาที่กำหนดไว้อย่างเคร่งครัดและแม่นยำ",
        "ต้องใช้พื้นที่จัดเก็บข้อมูลบนฮาร์ดดิสก์มากที่สุด"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 14 ระบุว่า Real-time system ใช้กับระบบที่มีข้อจำกัดด้านเวลาอย่างเข้มงวด ต้องได้ผลลัพธ์ภายในเวลาที่กำหนดอย่างแม่นยำ"
    },
    {
      "question": "ข้อใดอธิบายความแตกต่างระหว่าง โปรแกรม (Program) และ โปรเซส (Process) ได้ถูกต้องที่สุด?",
      "options": [
        "Program ทำงานได้โดยไม่ต้องใช้ CPU ส่วน Process ทำงานบนจอภาพเท่านั้น",
        "Program เป็นไฟล์ชุดคำสั่งที่อยู่นิ่งบนดิสก์ ส่วน Process คือ Program in execution ที่กำลังรันอยู่ในหน่วยความจำ",
        "Program มีสถานะ Running เสมอ ส่วน Process เป็นไฟล์ที่ถูกลบทิ้งไปแล้ว",
        "Program คือฮาร์ดแวร์ ส่วน Process คือซอฟต์แวร์"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 15 ระบุว่า Program เป็นเพียงไฟล์ชุดคำสั่งบนดิสก์ ส่วน Process คือ Program in execution ที่ถูกนำเข้าสู่หน่วยความจำและกำลังทำงาน"
    },
    {
      "question": "ในเรื่องวงจรชีวิตของ Process สถานะ Ready (พร้อม) หมายถึงโปรเซสที่อยู่ในสภาวะใด?",
      "options": [
        "โปรเซสที่เกิดข้อผิดพลาดและถูกกักกันโดยโปรแกรมป้องกันไวรัส",
        "โปรเซสที่โหลดเข้าหน่วยความจำและมีทรัพยากรครบถ้วนแล้ว เหลือเพียงรอการจัดสรรเวลาของ CPU เพื่อประมวลผล",
        "โปรเซสที่กำลังทำงานอยู่ใน CPU ในขณะนั้น",
        "โปรเซสที่ทำงานเสร็จสิ้นสมบูรณ์และกำลังจะปิดตัวลง"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 16 ระบุว่าสถานะ Ready คือสถานะที่โปรเซสเตรียมพร้อมทุกอย่างแล้วและอยู่ในคิวเพื่อรอรับการจัดสรร CPU"
    },
    {
      "question": "ในวงจรชีวิตของ Process สถานะ Waiting หรือ Blocked จะเกิดขึ้นเมื่อใด?",
      "options": [
        "เมื่อผู้ใช้กดปิดหน้าจอคอมพิวเตอร์",
        "เมื่อ CPU มีความเร็วสูงเกินกว่าจะประมวลผลได้",
        "เมื่อโปรเซสประมวลผลเสร็จแล้วและเตรียมปิดตัวเอง",
        "เมื่อโปรเซสต้องรอคอยเหตุการณ์บางอย่าง เช่น รอให้อุปกรณ์ I/O อ่านหรือเขียนข้อมูลให้เสร็จสิ้น"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 16 ระบุว่าสถานะ Waiting/Blocked เกิดขึ้นเมื่อโปรเซสต้องรอการตอบสนองจาก I/O หรือเหตุการณ์ภายนอก"
    },
    {
      "question": "ตัวจัดตารางเวลาของโปรเซส (Process Scheduler / CPU Scheduler) มีหน้าที่หลักอะไร?",
      "options": [
        "ทำหน้าที่แปลงไฟล์รูปภาพให้เป็นไฟล์เสียง",
        "คัดเลือกโปรเซสที่อยู่ในสถานะ Ready ส่งมอบให้กับ CPU เพื่อเปลี่ยนสถานะเป็น Running",
        "กำหนดวันและเวลาของนาฬิกาในระบบคอมพิวเตอร์",
        "จัดเรียงตัวอักษรของชื่อไฟล์บนหน้าจอเดสก์ท็อป"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 18 อธิบายว่า Process scheduler ทำหน้าที่เลือก process ที่อยู่ในสถานะ Ready เพื่อนำไป execute ใน CPU (Running)"
    },
    {
      "question": "ภาวะติดหล่ม (Deadlock) หมายถึงสถานการณ์ใดในการทำงานร่วมกันของโปรเซส?",
      "options": [
        "การที่หน่วยความจำ RAM เสียหายทางกายภาพจนเปิดเครื่องไม่ติด",
        "สภาวะที่โปรเซสตั้งแต่ 2 ตัวขึ้นไปต่างถือครองทรัพยากรส่วนหนึ่งไว้ และรอทรัพยากรที่อีกฝ่ายถืออยู่ ทำให้ไม่มีใครทำงานต่อได้",
        "การที่สายเคเบิลของจอภาพหลุดออกจากตัวเครื่อง",
        "การที่เครื่องคอมพิวเตอร์ติดไวรัสจนข้อมูลเสียหายทั้งหมด"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 21 อธิบายว่า Deadlock คือสถานการณ์ที่โปรเซสต่างถือทรัพยากรไว้และรอทรัพยากรที่อีกฝ่ายถือครอง ทำให้เกิดการชะงักงันไม่สามารถไปต่อได้"
    },
    {
      "question": "ข้อใดคือเงื่อนไข 4 ประการที่ทำให้เกิดภาวะ Deadlock ในระบบคอมพิวเตอร์?",
      "options": [
        "Fetch, Decode, Execute, และ Store",
        "Read, Write, Execute, และ Delete",
        "Mutual exclusion, Hold and wait, No preemption, และ Circular wait",
        "Input, Processing, Output, และ Storage"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 22–26 ระบุเงื่อนไข 4 ประการของการเกิด Deadlock ได้แก่ 1. Mutual exclusion 2. Resource hold and wait 3. No preemption 4. Circular wait"
    },
    {
      "question": "เงื่อนไข Mutual Exclusion ในการเกิด Deadlock มีความหมายว่าอย่างไร?",
      "options": [
        "โปรเซสต้องปล่อยทรัพยากรทั้งหมดก่อนจึงจะขอใหม่ได้",
        "ทรัพยากรนั้นสามารถถูกใช้งานได้โดยโปรเซสเพียงตัวเดียวในเวลาหนึ่งๆ เท่านั้น โปรเซสอื่นต้องรอ",
        "ทุกโปรเซสสามารถใช้ทรัพยากรเดียวกันได้พร้อมกันโดยไม่จำกัด",
        "โปรเซสสามารถแย่งชิงทรัพยากรจากโปรเซสอื่นได้ตลอดเวลา"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 23 ระบุว่า Mutual exclusion คือทรัพยากรแต่ละชิ้นมีสถานะว่าใช้งานได้เพียงโปรเซสเดียวในเวลานั้น (Non-shareable)"
    },
    {
      "question": "เงื่อนไข Circular Wait (การรอคอยเป็นวงกลม) ในสภาวะ Deadlock มีลักษณะอย่างไร?",
      "options": [
        "โปรเซสส่งข้อมูลวนรอบเครื่องพิมพ์ 3 รอบก่อนเริ่มพิมพ์",
        "โปรเซสมีการรอคอยทรัพยากรต่อกันเป็นทอดๆ เป็นลูกโซ่แบบวงกลม และตัวสุดท้ายกลับมารอทรัพยากรของตัวแรก",
        "การที่พัดลมระบายความร้อนของ CPU หมุนเป็นวงกลม",
        "การวนลูป While แบบไม่มีจุดสิ้นสุดในซอร์สโค้ด"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 26 อธิบายว่า Circular wait เกิดขึ้นเมื่อโปรเซส A รอทรัพยากรจาก B, B รอจาก C และวนกลับมาจนถึงโปรเซสที่รอทรัพยากรจาก A"
    },
    {
      "question": "ปัญหาการอดตาย (Starvation) แตกต่างจาก Deadlock อย่างไร?",
      "options": [
        "Starvation เกิดเฉพาะกับเครื่องพิมพ์ แต่ Deadlock เกิดเฉพาะกับคีย์บอร์ด",
        "Starvation เกิดจากโปรเซสหนึ่งต้องรออย่างไม่มีกำหนดเพราะโปรเซสอื่นที่มี Priority สูงกว่าแย่งทรัพยากรไปเรื่อยๆ ทั้งที่ระบบยังทำงานได้",
        "Starvation ทำให้ระบบดับทันที แต่ Deadlock ทำให้เครื่องทำงานเร็วขึ้น",
        "Starvation เกิดเมื่อหน่วยความจำเต็ม แต่ Deadlock เกิดเมื่อฮาร์ดดิสก์เสีย"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 27–29 อธิบายว่า Starvation คือการที่โปรเซสใดโปรเซสหนึ่งถูกปฏิเสธการเข้าถึงทรัพยากรอย่างต่อเนื่องเพราะมีโปรเซสอื่นได้สิทธิ์ไปก่อน"
    },
    {
      "question": "ตัวอย่างปัญหาคลาสสิก \"Dining Philosophers\" ที่คิดค้นโดย Dijkstra นำมาใช้อธิบายปัญหาใดของระบบปฏิบัติการ?",
      "options": [
        "ปัญหาการคำนวณเลขทศนิยมไม่แม่นยำใน ALU",
        "ปัญหา Starvation และการประสานเวลา (Concurrency / Resource Sharing) ในการแย่งใช้ทรัพยากร",
        "ปัญหาไวรัสคอมพิวเตอร์แพร่ระบาดผ่านระบบอีเมล",
        "การออกแบบหน้าต่างของระบบปฏิบัติการ Windows"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 30 แสดงตัวอย่าง Dining Philosophers ของ Dijkstra เพื่ออธิบายปัญหาการแย่งช้อน (Resource Sharing) ที่นำไปสู่ Starvation"
    },
    {
      "question": "การจัดสรรหน่วยความจำแบบพาร์ทิชันขนาดคงที่ (Fixed Partition) มักก่อให้เกิดปัญหาใด?",
      "options": [
        "ฮาร์ดดิสก์หมุนเร็วเกินไปจนเกิดความร้อน",
        "External Fragmentation (พื้นที่ว่างภายนอกกระจัดกระจายจนโปรแกรมลงไม่ได้)",
        "Internal Fragmentation (พื้นที่ว่างเหลือภายในพาร์ทิชันเนื่องจากโปรแกรมมีขนาดเล็กกว่าพาร์ทิชันที่จองไว้)",
        "จอฟ้า (Blue Screen of Death)"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 36 อธิบายว่า Fixed partition ทำให้เกิดปัญหา Internal fragmentation เนื่องจากโปรแกรมขนาดเล็กใช้พื้นที่พาร์ทิชันขนาดใหญ่ไม่หมด"
    },
    {
      "question": "การจัดสรรหน่วยความจำแบบปรับขนาดได้ (Dynamic Partition) มักก่อให้เกิดปัญหาใด?",
      "options": [
        "External Fragmentation (เกิดช่องว่างขนาดเล็กกระจัดกระจายทั่วไปในหน่วยความจำจนไม่สามารถนำโปรแกรมขนาดใหญ่มาลงได้)",
        "ทำให้ไม่สามารถติดตั้งระบบปฏิบัติการได้",
        "Internal Fragmentation (พื้นที่ในพาร์ทิชันเหลือทิ้ง)",
        "ไม่สามารถใช้หน่วยความจำ RAM ได้"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 37 อธิบายว่า Dynamic partition เมื่อโหลดและปลดปล่อยโปรแกรมไปเรื่อยๆ จะเกิดช่องว่างกระจัดกระจาย เรียกว่า External fragmentation"
    },
    {
      "question": "การจัดการหน่วยความจำแบบ Paging (การแบ่งหน้า) มีหลักการแบ่งส่วนของหน่วยความจำอย่างไร?",
      "options": [
        "แบ่งหน่วยความจำเป็น 2 ส่วนคือส่วนของ Administrator และส่วนของ Guest",
        "กำหนดให้หน่วยความจำมีขนาดเท่ากับความกว้างของหน้าจอคอมพิวเตอร์",
        "แบ่งโปรแกรมเป็นส่วนย่อยขนาดเท่ากันเรียกว่า Pages และแบ่งหน่วยความจำ RAM เป็นส่วนย่อยขนาดเท่ากันเรียกว่า Frames",
        "แบ่งตามขนาดของไฟล์เสียงและไฟล์วิดีโอ"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 40 อธิบายว่า Paging แบ่ง program เป็น Pages ขนาดเท่ากัน และแบ่ง memory เป็น Frames ขนาดเท่ากัน เพื่อแก้ปัญหา External fragmentation"
    },
    {
      "question": "ในระบบ Paging ปัญหา Internal Fragmentation ยังคงเกิดขึ้นได้ในส่วนใดของโปรแกรม?",
      "options": [
        "หน้าสุดท้าย (Last Page) ของโปรแกรม เนื่องจากขนาดของโปรแกรมไม่พอดีกับขนาดของ Page",
        "เกิดขึ้นทุกหน้าเท่าๆ กัน",
        "หน้าแรกสุดของโปรแกรมเสมอ",
        "ระบบ Paging จะไม่เกิดการสูญเสียพื้นที่ใดๆ เลยแม้แต่บิตเดียว"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 41 ระบุว่า Paging ไม่มี External fragmentation แต่อาจเกิด Internal fragmentation เล็กน้อยในหน้าสุดท้าย (Last page) ของโปรแกรม"
    },
    {
      "question": "หน่วยความจำเสมือน (Virtual Memory) มีหลักการทำงานอย่างไรในการเพิ่มพื้นที่ให้ RAM?",
      "options": [
        "ลดความเร็วของ CPU เพื่อให้ RAM ทำงานได้มากขึ้น",
        "บีบอัดข้อมูลทั้งหมดในระบบให้เหลือขนาด 0 ไบต์",
        "ติดตั้งชิป RAM เพิ่มเข้าไปในเครื่องโดยอัตโนมัติผ่านอินเทอร์เน็ต",
        "ใช้พื้นที่ของหน่วยความจำสำรอง (เช่น ฮาร์ดดิสก์) มาจำลองการทำงานเป็น RAM ทำให้รันโปรแกรมขนาดใหญ่กว่า RAM จริงได้"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 45 อธิบายว่า Virtual memory เป็นเทคนิคที่ใช้หน่วยความจำสำรองมาขยายหน่วยความจำหลัก ทำให้สามารถรันโปรแกรมขนาดใหญ่กว่า RAM ที่มีอยู่จริงได้"
    },
    {
      "question": "เหตุผลสำคัญที่ต้องมี Device Manager หรือ I/O Manager มาควบคุมการใช้อุปกรณ์ I/O คืออะไร?",
      "options": [
        "เพื่อเปลี่ยนอุปกรณ์ I/O ให้กลายเป็นซอฟต์แวร์ประยุกต์",
        "เพื่อป้องกันไม่ให้ผู้ใช้ถอดสายไฟของเครื่องพิมพ์",
        "เพราะอุปกรณ์ I/O ทำงานช้ามากเมื่อเทียบกับความเร็วของ CPU และหน่วยความจำหลัก จึงต้องจัดคิวและควบคุมอย่างมีประสิทธิภาพ",
        "เพราะอุปกรณ์ I/O มีราคาแพงกว่า CPU เสมอ"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 49 ระบุว่าอุปกรณ์ I/O ทำงานช้ามากเมื่อเทียบกับ CPU และ RAM จึงจำเป็นต้องมี Device Manager คอยควบคุมการจัดสรรและคิวการทำงาน"
    },
    {
      "question": "นโยบายที่ Device Manager นิยมใช้ในการจัดการคิวของอุปกรณ์ I/O (เช่น คิวเครื่องพิมพ์) คือนโยบายใด?",
      "options": [
        "FIFO (First-In, First-Out: ใครส่งงานเข้ามาก่อนจะได้รับการประมวลผลก่อน)",
        "Random (สุ่มเลือกงานโดยไม่เรียงลำดับ)",
        "Reverse Order (ทำงานย้อนหลังจากหลังสุดมาหน้าสุด)",
        "LIFO (Last-In, First-Out: งานที่ส่งเข้ามาล่าสุดจะได้ทำก่อนเสมอ)"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 49 ระบุว่า Device manager มีหน้าที่กำหนดและควบคุมนโยบายในการใช้อุปกรณ์ เช่น นโยบาย FIFO"
    },
    {
      "question": "หน้าที่หลักของตัวจัดการแฟ้มข้อมูล (File Manager) ในระบบปฏิบัติการครอบคลุมเรื่องใดบ้าง?",
      "options": [
        "ซ่อมแซมแผงวงจรของฮาร์ดดิสก์เมื่อเกิดไฟฟ้าลัดวงจร",
        "ควบคุมสิทธิ์การเข้าถึง (อ่าน/เขียน/แก้ไข), ควบคุมการสร้างและลบ, จัดการตำแหน่งจัดเก็บ และดูแลการสำรองข้อมูล (Backup)",
        "ผลิตฮาร์ดดิสก์ลูกใหม่ขึ้นมาเมื่อข้อมูลเต็ม",
        "เปลี่ยนรูปแบบไฟล์เอกสารให้เป็นภาษาแอสเซมบลีโดยอัตโนมัติ"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 51 ระบุหน้าที่ของ File Manager: ควบคุมสิทธิ์การใช้ไฟล์, ควบคุมการสร้าง/ลบ/แก้ไข, ควบคุมตำแหน่งจัดเก็บ และการสำรองข้อมูล (Backup/Archive)"
    },
    {
      "question": "ส่วนต่อประสานกับผู้ใช้ (User Interface) แบบ CLI และ GUI มีข้อแตกต่างสำคัญในการสั่งงานอย่างไร?",
      "options": [
        "CLI ใช้ภาพ 3 มิติ ส่วน GUI ใช้เฉพาะหน้าจอสีดำ",
        "ทั้งสองแบบไม่มีความแตกต่างกันเลยในด้านการใช้งาน",
        "CLI สั่งงานด้วยการพิมพ์ข้อความคำสั่งผ่านแป้นพิมพ์ ส่วน GUI สั่งงานด้วยภาพ ไอคอน เมนู และเมาส์คลิก",
        "CLI ใช้บนโทรศัพท์มือถือเท่านั้น ส่วน GUI ใช้บนคอมพิวเตอร์เมนเฟรมเท่านั้น"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 53–54 อธิบายความแตกต่างของ CLI (Command Line Interface - สั่งงานด้วยข้อความคำสั่ง) และ GUI (Graphical User Interface - สั่งงานด้วยกราฟิก ไอคอน หน้าต่าง)"
    }
  ],
  "6": [
    {
      "question": "ข้อใดคือวัตถุประสงค์หลักของการนำระบบเครือข่ายคอมพิวเตอร์มาใช้งานในองค์กร?",
      "options": [
        "การยกเลิกการใช้งานคอมพิวเตอร์ส่วนบุคคลในองค์กร",
        "การป้องกันไม่ให้คอมพิวเตอร์สามารถแลกเปลี่ยนข้อมูลกันได้",
        "การลดความเร็วในการส่งข้อมูล และเพิ่มต้นทุนอุปกรณ์",
        "การใช้ทรัพยากรร่วมกัน, การใช้ข้อมูลในไฟล์ร่วมกัน, และความง่ายในการดูแลระบบ"
      ],
      "answer": 3,
      "explanation": "สไลด์บทที่ 6 หน้า 1 ระบุวัตถุประสงค์ของการนำเครือข่ายมาใช้: 1. ใช้ทรัพยากรร่วมกัน 2. ใช้ข้อมูลในไฟล์ร่วมกัน 3. ความง่ายในการดูแลระบบ"
    },
    {
      "question": "เครือข่ายแบบ Peer-to-Peer (P2P) มีลักษณะการเก็บข้อมูลและเชื่อมต่อระหว่างเครื่องอย่างไร?",
      "options": [
        "แต่ละเครื่องเก็บไฟล์และเชื่อมต่ออุปกรณ์ของตนเอง ไม่มีเครื่องเซิร์ฟเวอร์ส่วนกลาง ต่างคนต่างใช้และแชร์ไฟล์กันได้",
        "คอมพิวเตอร์ทุกเครื่องต้องเชื่อมต่อผ่านสายโทรศัพท์บ้านเท่านั้น",
        "ใช้งานได้เฉพาะเมื่อมีอินเทอร์เน็ตความเร็วสูงระดับประเทศเท่านั้น",
        "มีเครื่องเซิร์ฟเวอร์ขนาดใหญ่ควบคุมทุกอย่างเพียงเครื่องเดียว และลูกข่ายไม่มีฮาร์ดดิสก์"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 3 ระบุว่า Peer-to-peer ผู้ใช้แต่ละคนเก็บไฟล์ไว้ที่เครื่องตัวเอง ไม่มีเครื่องส่วนกลาง ต่างคนต่างเก็บ ต่างคนต่างใช้ แต่เรียกใช้ไฟล์ข้ามเครื่องได้"
    },
    {
      "question": "เครือข่ายแบบ Server-Based (Client-Server) มีบทบาทหน้าที่ของเครื่องคอมพิวเตอร์อย่างไร?",
      "options": [
        "ทุกเครื่องทำหน้าที่เป็นลูกข่ายทั้งหมดโดยไม่มีใครเป็นผู้ให้บริการ",
        "มีคอมพิวเตอร์แม่ข่าย (Server) ทำหน้าที่เก็บข้อมูล จัดการโปรแกรม และประมวลผลเพื่อส่งผลลัพธ์ให้เครื่องลูกข่าย (Client)",
        "เป็นการเชื่อมต่อตรงระหว่างสมาร์ทโฟน 2 เครื่องโดยไม่ใช้สัญญาณไร้สาย",
        "เครื่องคอมพิวเตอร์ทุกเครื่องต้องปิดเครื่องพร้อมกันเมื่อเซิร์ฟเวอร์ทำงาน"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 4 ระบุว่า Server-based network มีเครื่องแม่ข่าย (Server) ทำหน้าที่เก็บข้อมูล แชร์ไฟล์ โปรแกรม และประมวลผลส่งกลับไปให้เครื่องลูกข่าย"
    },
    {
      "question": "เครือข่าย LAN (Local Area Network) เหมาะสำหรับการใช้งานในบริเวณและพื้นที่ลักษณะใด?",
      "options": [
        "เชื่อมต่อดาวเทียมในอวกาศกับสถานีภาคพื้นดิน",
        "เชื่อมต่อระหว่างทวีปทั่วโลกผ่านสายเคเบิลใต้น้ำ",
        "บริเวณที่ไม่กว้างนัก เช่น ภายในอาคารเดียวกัน อาคารใกล้เคียง ในสำนักงาน หรือโรงงาน",
        "ใช้งานข้ามจังหวัดหรือระดับประเทศเท่านั้น"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 6 ระบุว่า LAN ใช้งานในบริเวณที่ไม่กว้างนัก เช่น ภายในอาคารเดียวกัน หรืออาคารใกล้กัน ภายในสำนักงาน คลังสินค้า หรือโรงงาน"
    },
    {
      "question": "เครือข่ายระดับเมือง (MAN - Metropolitan Area Network) มีลักษณะขอบเขตการใช้งานอย่างไร?",
      "options": [
        "ใช้เชื่อมต่อคอมพิวเตอร์ทั่วโลกเข้าด้วยกัน",
        "เป็นระบบเครือข่ายที่ใช้เชื่อมโยงสาขาขององค์กรที่อยู่ภายในเขตเมืองหรือจังหวัดเดียวกัน",
        "เป็นระบบเครือข่ายสำหรับนักบินอวกาศบนสถานีอวกาศนานาชาติ",
        "ใช้เชื่อมต่ออุปกรณ์ภายในห้องนอนขนาดเล็ก"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 8 ระบุว่า MAN เป็นระบบเครือข่ายที่ใช้ภายในเมืองหรือจังหวัด เพื่อเชื่อมโยงสาขาที่อยู่ห่างไกลในเขตเมืองเข้าด้วยกัน"
    },
    {
      "question": "เครือข่าย WAN (Wide Area Network) มีลักษณะการเชื่อมต่ออย่างไร และระบบเครือข่ายใดเป็นตัวอย่างของ WAN?",
      "options": [
        "เชื่อมต่อเฉพาะคอมพิวเตอร์ 2 เครื่องที่วางอยู่บนโต๊ะเดียวกัน",
        "เชื่อมต่อครอบคลุมพื้นที่บริเวณกว้างขวางระดับประเทศหรือทั่วโลก เช่น ระบบอินเทอร์เน็ต (Internet)",
        "เครือข่ายภายในห้องแล็บคอมพิวเตอร์ 1 ห้อง",
        "เชื่อมต่อเครื่องพิมพ์กับคอมพิวเตอร์ผ่านสาย USB สั้น 1 เมตร"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 10 ระบุว่า WAN เป็นเครือข่ายที่ติดตั้งใช้งานในบริเวณกว้างขวาง เช่น ทั่วประเทศหรือทั่วโลก ตัวอย่างสำคัญคืออินเทอร์เน็ต"
    },
    {
      "question": "เครือข่ายส่วนบุคคล (PAN - Personal Area Network) มีวัตถุประสงค์การใช้งานในลักษณะใด?",
      "options": [
        "การเชื่อมต่ออุปกรณ์ส่วนบุคคลของผู้ใช้ในระยะใกล้รอบตัว เช่น หูฟังบลูทูธ สมาร์ทโฟน แท็บเล็ต",
        "การเชื่อมต่อตู้เอทีเอ็มของธนาคารทั่วประเทศ",
        "การส่งสัญญาณภาพถ่ายดาวเทียมสำรวจโลก",
        "การเชื่อมต่อระบบเซิร์ฟเวอร์ของตลาดหลักทรัพย์"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 11 ระบุว่า PAN (Personal Area Network) เป็นเครือข่ายส่วนบุคคลที่เชื่อมต่ออุปกรณ์ต่างๆ รอบตัวผู้ใช้ในระยะใกล้"
    },
    {
      "question": "โครงร่างเครือข่ายแบบ Star Topology (แบบดาว) มีจุดอ่อนสำคัญที่สุดในจุดใด?",
      "options": [
        "หากคอมพิวเตอร์ลูกข่ายเครื่องใดเครื่องหนึ่งเสีย ระบบทั้งหมดจะดับทันที",
        "ต้องใช้สายสัญญาณเส้นตรงเพียงเส้นเดียวเชื่อมต่อทุกเครื่อง",
        "ไม่สามารถเพิ่มคอมพิวเตอร์เครื่องใหม่เข้าไปในระบบได้เลย",
        "หากอุปกรณ์ศูนย์กลาง (เช่น Hub หรือ Switch) เสียหาย เครือข่ายทั้งหมดจะไม่สามารถสื่อสารกันได้"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 13 อธิบายว่า Star topology เชื่อมต่อเข้าอุปกรณ์ศูนย์กลาง จุดอ่อนคือหากอุปกรณ์ส่วนกลางชำรุด ระบบเครือข่ายทั้งหมดจะหยุดทำงาน"
    },
    {
      "question": "โครงร่างเครือข่ายแบบ Bus Topology มีลักษณะการเชื่อมต่อสายสัญญาณหลักอย่างไร?",
      "options": [
        "เชื่อมต่อสายเป็นรูปดาวกระจายออกจากจุดศูนย์กลาง",
        "เชื่อมต่อคอมพิวเตอร์ทุกเครื่องตรงเข้ากับดาวเทียม",
        "ใช้สายสัญญาณแกนหลักเส้นเดียวเชื่อมต่อคอมพิวเตอร์ทุกเครื่อง และมี Terminator ปิดหัวท้าย",
        "คอมพิวเตอร์แต่ละเครื่องต้องมีสายตรงไปยังเครื่องอื่นทุกเครื่องในระบบ"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 15 อธิบายว่า Bus topology ใช้สายสัญญาณเส้นหลักเพียงเส้นเดียว (Bus/Backbone) เชื่อมต่อคอมพิวเตอร์ และมี Terminator ที่ปลายสาย"
    },
    {
      "question": "ในเครือข่ายแบบ Ring Topology ข้อมูลจะถูกส่งต่อในทิศทางและรูปแบบใด?",
      "options": [
        "กระจายข้อมูลออกไปทุกทิศทางพร้อมกันแบบไร้ระเบียบ",
        "ส่งข้อมูลตรงไปยังเซิร์ฟเวอร์กลางโดยไม่ต้องผ่านเครื่องข้างเคียง",
        "ส่งข้อมูลสลับไปมาระหว่างสายทองแดงและสายไฟเบอร์ออปติก",
        "เชื่อมต่อเป็นวงกลม ส่งข้อมูลไปในทิศทางเดียวจากเครื่องหนึ่งไปยังอีกเครื่องหนึ่ง และใช้ Token ควบคุมสิทธิ์"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 16 อธิบายว่า Ring topology มีการเชื่อมต่อแบบวงแหวน ข้อมูลเดินทางทิศทางเดียวรอบวง และใช้ Token ในการควบคุมการส่ง"
    },
    {
      "question": "โครงร่างเครือข่ายแบบ Mesh Topology มีข้อดีและข้อจำกัดสำคัญอย่างไร?",
      "options": [
        "มีราคาถูกที่สุดแต่พังง่ายที่สุดในบรรดาทุกโทโพโลยี",
        "มีความเชื่อถือได้สูงที่สุดเพราะมีเส้นทางเชื่อมโยงสำรอง แต่มีค่าใช้จ่ายสายสัญญาณและการติดตั้งสูงมาก",
        "ส่งข้อมูลได้ช้าที่สุดและรองรับคอมพิวเตอร์ได้ไม่เกิน 3 เครื่อง",
        "ต้องใช้อุปกรณ์ Switch ขนาดใหญ่เป็นศูนย์กลางเพียงจุดเดียว"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 17 อธิบายว่า Mesh topology มีการเชื่อมต่อระหว่างเครื่องทุกเครื่อง มีความปลอดภัยและเสถียรภาพสูงสุด แต่สิ้นเปลืองสายสัญญาณมาก"
    },
    {
      "question": "โครงร่างเครือข่ายแบบ Tree Topology มีลักษณะโครงสร้างการเชื่อมต่อสอดคล้องกับข้อใด?",
      "options": [
        "โครงสร้างแบบลำดับชั้น (Hierarchical) แตกกิ่งก้านสาขา ผสมผสานระหว่าง Star และ Bus",
        "โครงสร้างเป็นวงกลมสมบูรณ์แบบที่ไม่มีจุดสิ้นสุด",
        "การเชื่อมต่อแบบไร้สายโดยไม่ใช้อุปกรณ์ฮาร์ดแวร์",
        "โครงสร้างสายเดี่ยวที่ไม่มีการแยกกิ่งก้านใดๆ"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 18 อธิบายว่า Tree topology เป็นเครือข่ายแบบลำดับขั้น (Hierarchical) ที่แตกกิ่งก้านสาขาคล้ายต้นไม้"
    },
    {
      "question": "สายคู่บิดเกลียว (Twisted Pair เช่น UTP/STP) นิยมนำมาใช้งานกับระบบเครือข่ายประเภทใดมากที่สุด?",
      "options": [
        "การกระจายสัญญาณโทรทัศน์ดาวเทียม",
        "การเชื่อมต่อสายเคเบิลข้ามทวีปใต้ผืนมหาสมุทร",
        "เครือข่าย LAN ภายในอาคารทั่วไป เข้าหัวต่อแบบ RJ-45",
        "การส่งข้อมูลบนยานอวกาศที่ต้องการความเร็วแสง"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 20 ระบุว่าสาย Twisted pair (UTP/STP) นิยมใช้ในเครือข่าย LAN ทั่วไป ติดตั้งง่าย ราคาประหยัด ใช้หัวต่อแบบ RJ-45"
    },
    {
      "question": "สายใยแก้วนำแสง (Fiber-Optic) มีข้อได้เปรียบที่เหนือกว่าสายทองแดงในด้านใดบ้าง?",
      "options": [
        "ใช้กระแสไฟฟ้าแรงดันสูงในการนำสัญญาณแทนแสง",
        "สามารถดัดงอหักเป็นมุมฉากได้โดยไม่เสียหาย และมีราคาถูกกว่าสายทองแดงมาก",
        "ส่งสัญญาณได้เฉพาะระยะทางสั้นไม่เกิน 1 เมตรเท่านั้น",
        "มีแบนด์วิดท์สูงสุด ส่งข้อมูลด้วยความเร็วแสง และปราศจากการรบกวนทางแม่เหล็กไฟฟ้า (EMI)"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 22 อธิบายว่า Fiber-Optic ใช้แสงในการส่งข้อมูล ทำให้มีแบนด์วิดท์สูงมาก ส่งได้ระยะไกล และไม่มีสัญญาณรบกวนทางแม่เหล็กไฟฟ้า"
    },
    {
      "question": "สื่อนำสัญญาณแบบไร้สาย (Unguided Media) ที่นิยมใช้ในการเชื่อมต่อเครือข่ายได้แก่อะไรบ้าง?",
      "options": [
        "สาย HDMI และสายสัญญาณเสียงแบบแจ็ค 3.5 มม.",
        "คลื่นวิทยุ (Radio waves), ไมโครเวฟ (Microwave), อินฟราเรด (Infrared), และสัญญาณดาวเทียม (Satellite)",
        "สาย Coaxial, สาย UTP, สาย STP, และสาย Fiber-Optic",
        "สายไฟบ้าน, ท่อน้ำประปา, และสายโทรศัพท์"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 23 ระบุว่าสื่อไร้สาย (Unguided media) ได้แก่ Radio waves, Microwave, Infrared, และ Satellite"
    },
    {
      "question": "อุปกรณ์ Repeater ในระบบเครือข่ายทำหน้าที่อะไรเมื่อส่งสัญญาณไปในระยะไกล?",
      "options": [
        "ตัดการเชื่อมต่ออินเทอร์เน็ตเมื่อมีสัญญาณรบกวน",
        "แปลงสัญญาณดิจิทัลให้เป็นเสียงพูดของมนุษย์",
        "ฟื้นฟูและขยายสัญญาณที่อ่อนกำลังลงเนื่องจากระยะทาง ให้กลับมามีความแรงสมบูรณ์ก่อนส่งต่อไป",
        "ทำหน้าที่เก็บไฟล์เว็บไซต์และแจกจ่าย IP Address"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 24 อธิบายว่า Repeater ทำหน้าที่ขยายและสร้างสัญญาณใหม่ (Regenerate) เมื่อสัญญาณอ่อนกำลังลงตามระยะทาง"
    },
    {
      "question": "อุปกรณ์ Hub มีลักษณะการกระจายส่งข้อมูลไปยังพอร์ตต่างๆ ในเครือข่ายอย่างไร?",
      "options": [
        "ส่งข้อมูลเฉพาะเจาะจงไปยังพอร์ตปลายทางเครื่องเดียวเสมอ",
        "บล็อกข้อมูลทั้งหมดไม่ให้ผ่านพอร์ตใดๆ ได้",
        "ส่งข้อมูลแบบ Broadcast กระจายไปยังทุกพอร์ตที่เชื่อมต่ออยู่ ไม่ว่าข้อมูลนั้นจะส่งถึงเครื่องใดก็ตาม",
        "แปลงข้อมูลทุกอย่างเป็นรหัสลับก่อนส่ง"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 25 ระบุว่า Hub กระจายข้อมูลที่รับเข้ามาส่งต่อออกไปยังทุกๆ พอร์ต (Broadcast) ทำให้เกิดความแออัดในระบบ"
    },
    {
      "question": "อุปกรณ์ Switch มีข้อได้เปรียบที่เหนือกว่า Hub ในการส่งผ่านข้อมูลอย่างไร?",
      "options": [
        "ตรวจสอบ MAC Address ปลายทางและส่งข้อมูลไปยังพอร์ตของเครื่องรับที่ถูกต้องโดยตรง ลดการชนกันของข้อมูล",
        "แปลงสัญญาณเสียงให้เป็นภาพวิดีโอบนหน้าจอได้ทันที",
        "มีราคาถูกกว่า Hub และไม่จำเป็นต้องเสียบปลั๊กไฟ",
        "กระจายข้อมูลไปยังเครื่องอื่นทุกเครื่องในเครือข่ายพร้อมกันเสมอ"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 26 ระบุว่า Switch ฉลาดกว่า Hub โดยจะตรวจสอบแอดเดรสปลายทางและส่งข้อมูลไปยังพอร์ตของเครื่องนั้นโดยตรง"
    },
    {
      "question": "อุปกรณ์ Router ทำหน้าที่หลักอะไรในการเชื่อมต่อระบบเครือข่าย?",
      "options": [
        "ทำหน้าที่สแกนลายนิ้วมือของผู้ใช้งานก่อนเข้าใช้อินเทอร์เน็ต",
        "ทำหน้าที่เป็นหน้าจอแสดงผลสำหรับห้องเซิร์ฟเวอร์",
        "จ่ายพลังงานไฟฟ้าสำรองให้กับคอมพิวเตอร์ทุกเครื่องในออฟฟิศ",
        "เชื่อมต่อระหว่างเครือข่ายที่ต่างกัน และค้นหาเส้นทางที่เหมาะสมที่สุด (Best path) ในการส่งแพ็กเก็ตข้อมูล"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 27 ระบุว่า Router ทำหน้าที่เชื่อมโยงเครือข่ายต่างๆ เข้าด้วยกัน และหาเส้นทางที่เหมาะสมที่สุดในการส่งข้อมูล (Routing)"
    },
    {
      "question": "อุปกรณ์ Gateway มีบทบาทเฉพาะทางด้านใดเมื่อเชื่อมต่อเครือข่ายที่มีสถาปัตยกรรมต่างกัน?",
      "options": [
        "ทำหน้าที่ป้องกันไม่ให้มีอุปกรณ์ใดสามารถต่อเข้ากับเครือข่ายได้",
        "ทำหน้าที่เป็นสายสัญญาณนำแสงความเร็วสูง",
        "ทำหน้าที่เป็นคีย์บอร์ดเสมือนสำหรับพิมพ์ข้อความข้ามเครือข่าย",
        "ทำหน้าที่เป็นตัวกลางแปลงโปรโตคอลและรูปแบบข้อมูลระหว่างสองเครือข่ายที่ใช้สถาปัตยกรรมต่างกันโดยสิ้นเชิง"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 28 อธิบายว่า Gateway ทำหน้าที่แปลงโปรโตคอลและรูปแบบข้อมูลระหว่างระบบเครือข่ายที่มีความแตกต่างกัน"
    },
    {
      "question": "แบบจำลองมาตรฐานการสื่อสาร OSI Model แบ่งออกเป็นทั้งหมดกี่ชั้น (Layers)?",
      "options": [
        "7 ชั้น",
        "3 ชั้น",
        "4 ชั้น",
        "10 ชั้น"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 30 ระบุว่า OSI Model (Open Systems Interconnection) ประกอบด้วย 7 Layers"
    },
    {
      "question": "ในแบบจำลอง OSI Model ชั้น Physical Layer ทำหน้าที่รับผิดชอบในส่วนใด?",
      "options": [
        "การจัดส่งอีเมลและเปิดหน้าเว็บไซต์",
        "การส่งผ่านสัญญาณบิต (0 และ 1) ผ่านสื่อนำสัญญาณจริง ขั้วต่อ และระดับแรงดันไฟฟ้า",
        "การสร้างตารางฐานข้อมูลและดึงข้อมูล",
        "การเข้ารหัสและถอดรหัสรหัสผ่านของผู้ใช้"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 31 อธิบายว่า Physical layer (ชั้นที่ 1) รับผิดชอบการส่งสัญญาณทางกายภาพ ระดับแรงดันไฟฟ้า และการเชื่อมต่อทางฮาร์ดแวร์"
    },
    {
      "question": "ในแบบจำลอง OSI Model ชั้น Data Link Layer มีหน้าที่ควบคุมสิ่งใดในการส่งข้อมูล?",
      "options": [
        "แสดงผลเมนูและปุ่มกดบนหน้าจอแอปพลิเคชัน",
        "ตั้งชื่อโดเมนเนมของเว็บไซต์",
        "จัดการรวบรวมบิตข้อมูลเป็นเฟรม (Frames) และควบคุมการเข้าถึงสื่อโดยใช้ฮาร์ดแวร์แอดเดรส (MAC Address)",
        "ค้นหาเส้นทางข้ามประเทศสำหรับแพ็กเก็ตข้อมูล"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 31 อธิบายว่า Data Link layer รับผิดชอบการจัดส่งเฟรมข้อมูล การตรวจสอบความผิดพลาดระดับลิงก์ และการใช้ MAC address"
    },
    {
      "question": "ในแบบจำลอง OSI Model ชั้น Network Layer ทำหน้าที่หลักเกี่ยวกับเรื่องใด?",
      "options": [
        "การปิดเครื่องคอมพิวเตอร์เมื่อส่งไฟล์เสร็จ",
        "การแปลงสัญญาณแสงให้เป็นสัญญาณเสียงในหูฟัง",
        "การกำหนดหมายเลขแอดเดรสเชิงตรรกะ (IP Address) และการเลือกเส้นทาง (Routing) ของแพ็กเก็ตข้อมูล",
        "การจัดรูปแบบตัวอักษรภาษาไทยในอีเมล"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 32 ระบุว่า Network layer ดูแลการกำหนดแอดเดรสแบบตรรกะ (IP Address) และการหาเส้นทางส่งข้อมูล (Routing)"
    },
    {
      "question": "ในแบบจำลอง OSI Model ชั้นใดทำหน้าที่เกี่ยวกับการเข้ารหัส/ถอดรหัส (Encryption/Decryption) และการบีบอัดข้อมูล?",
      "options": [
        "Presentation Layer",
        "Data Link Layer",
        "Physical Layer",
        "Network Layer"
      ],
      "answer": 0,
      "explanation": "สไลด์หน้า 33 อธิบายว่า Presentation layer ทำหน้าที่จัดรูปแบบข้อมูล การเข้ารหัส/ถอดรหัส (Encryption) และการบีบอัดข้อมูล"
    },
    {
      "question": "ข้อใดคือตัวอย่างและข้อแตกต่างของหมายเลข IPv4 และ IPv6?",
      "options": [
        "IPv4 เขียนด้วยตัวอักษรภาษาอังกฤษล้วน ส่วน IPv6 เป็นตัวเลขไทย",
        "IPv4 ใช้กับอินเทอร์เน็ต ส่วน IPv6 ใช้กับบลูทูธเท่านั้น",
        "IPv4 มีขนาด 32 บิต เช่น 72.14.207.99 ส่วน IPv6 มีขนาด 128 บิต เช่น 2001:4860:4860::8844",
        "IPv4 มีขนาด 128 บิต ส่วน IPv6 มีขนาด 32 บิต"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 34 แสดงตัวอย่าง IPv4 (32-bit: 72.14.207.99) และ IPv6 (128-bit: 2001:4860:4860::8844) เพื่อแก้ปัญหา IP ไม่เพียงพอ"
    },
    {
      "question": "ระบบ DNS (Domain Name System) และ DNS Server มีหน้าที่สำคัญอย่างไรในการท่องเว็บ?",
      "options": [
        "ทำหน้าที่แปลภาษาอังกฤษเป็นภาษาไทยบนหน้าเว็บ",
        "ทำหน้าที่แปลงชื่อโดเมน (Domain Name เช่น www.google.com) ให้เป็นหมายเลข IP Address เพื่อให้เชื่อมต่อได้ถูกต้อง",
        "ทำหน้าที่ดาวน์โหลดไฟล์วิดีโอจาก YouTube มาเก็บไว้ในเครื่องอัตโนมัติ",
        "ทำหน้าที่ตรวจสอบความเร็วพัดลมของเครื่องเซิร์ฟเวอร์"
      ],
      "answer": 1,
      "explanation": "สไลด์หน้า 35 ระบุว่า DNS Server ทำหน้าที่แปล Domain Name ให้เป็น IP address เนื่องจากมนุษย์จำชื่อได้ง่ายกว่าตัวเลข"
    },
    {
      "question": "ชื่อโดเมนระดับบนสุด (Top Level Domain: TLD) เช่น .com, .edu, .gov ใช้เพื่อระบุสิ่งใด?",
      "options": [
        "ระบุยี่ห้อของคอมพิวเตอร์ที่ใช้สร้างเว็บไซต์",
        "ระบุความเร็วของอินเทอร์เน็ตที่เข้าใช้งานเว็บไซต์นั้น",
        "ระบุประเภทหรือจุดประสงค์ขององค์กรผู้เป็นเจ้าของเว็บไซต์ (เช่น ธุรกิจพาณิชย์, สถาบันการศึกษา, หน่วยงานรัฐ)",
        "ระบุจำนวนหน้าเว็บทั้งหมดที่อยู่ในเว็บไซต์"
      ],
      "answer": 2,
      "explanation": "สไลด์หน้า 36 แสดงตาราง TLDs: .com สำหรับ commercial/businesses, .edu สำหรับ educational institutions, .gov สำหรับ government agencies"
    },
    {
      "question": "บริการรับส่งอีเมล (E-Mail) และบริการถ่ายโอนแฟ้มข้อมูล (File Transfer) บนอินเทอร์เน็ตใช้โปรโตคอลใดตามลำดับ?",
      "options": [
        "DNS สำหรับรับส่งอีเมล และ IP สำหรับถ่ายโอนแฟ้มข้อมูล",
        "HTML สำหรับรับส่งอีเมล และ HTTP สำหรับถ่ายโอนแฟ้มข้อมูล",
        "TCP สำหรับรับส่งอีเมล และ UDP สำหรับถ่ายโอนแฟ้มข้อมูล",
        "SMTP สำหรับรับส่งอีเมล และ FTP สำหรับถ่ายโอนแฟ้มข้อมูล"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 38 ระบุบริการบนอินเทอร์เน็ต: E-Mail ใช้ SMTP และบริการรับส่งแฟ้มข้อมูลใช้ FTP (File Transfer Protocol)"
    },
    {
      "question": "การให้บริการคลาวด์แบบ IaaS, PaaS และ SaaS มีความแตกต่างกันอย่างไรตามสไลด์?",
      "options": [
        "IaaS คืออินเทอร์เน็ตบ้าน, PaaS คือสัญญาณมือถือ, SaaS คือดาวเทียม",
        "IaaS ใช้เฉพาะกับเกม, PaaS ใช้กับงานพิมพ์เอกสาร, SaaS ใช้กับงานกราฟิก",
        "ทั้งสามรูปแบบเหมือนกันทุกประการ ไม่มีข้อแตกต่างใดๆ",
        "IaaS ให้บริการโครงสร้างพื้นฐาน/ที่เก็บข้อมูล, PaaS ให้บริการแพลตฟอร์มสำหรับพัฒนาแอป, SaaS ให้บริการซอฟต์แวร์สำเร็จรูป"
      ],
      "answer": 3,
      "explanation": "สไลด์หน้า 40 ระบุประเภทของคลาวด์: IaaS (โครงสร้างพื้นฐาน/จัดเก็บ เช่น Google Drive), PaaS (แพลตฟอร์มพัฒนาแอป เช่น AWS), SaaS (ซอฟต์แวร์/แอปพลิเคชัน เช่น Office 365)"
    }
  ],
  "7": [
    {
      "question": "การคิดเชิงคอมพิวเตอร์ (Computational Thinking) ประกอบด้วยองค์ประกอบกี่อย่าง?",
      "options": [
        "4 อย่าง",
        "3 อย่าง",
        "5 อย่าง",
        "2 อย่าง"
      ],
      "answer": 0,
      "explanation": "การคิดเชิงคอมพิวเตอร์ประกอบด้วย 4 อย่าง ได้แก่ Decomposition, Pattern Recognition, Abstraction, และ Algorithm Design"
    },
    {
      "question": "ข้อใดไม่ใช่องค์ประกอบของการคิดเชิงคอมพิวเตอร์?",
      "options": [
        "การเขียนโปรแกรม",
        "การย่อยปัญหา",
        "การจดจำรูปแบบ",
        "การออกแบบอัลกอริทึม"
      ],
      "answer": 0,
      "explanation": "การเขียนโปรแกรมไม่ได้เป็นหนึ่งใน 4 องค์ประกอบหลักของการคิดเชิงคอมพิวเตอร์"
    },
    {
      "question": "การย่อยปัญหาหรือสรุปปัญหาให้เล็กลง เรียกว่าอะไร?",
      "options": [
        "Decomposition",
        "Pattern Recognition",
        "Abstraction",
        "Algorithm Design"
      ],
      "answer": 0,
      "explanation": "Decomposition คือการย่อยปัญหาหรือระบบที่ซับซ้อนออกเป็นส่วนย่อยๆ"
    },
    {
      "question": "ทักษะการจดจำรูปแบบต่างๆ ของปัญหา เรียกว่าอะไร?",
      "options": [
        "Pattern Recognition",
        "Decomposition",
        "Abstraction",
        "Algorithm Design"
      ],
      "answer": 0,
      "explanation": "Pattern Recognition คือการหารูปแบบที่ซ้ำซากหรือลักษณะเฉพาะที่เกิดขึ้นในข้อมูล"
    },
    {
      "question": "การตัดรายละเอียดที่ไม่จำเป็นออกและมุ่งเน้นเฉพาะข้อมูลที่สำคัญ เรียกว่าอะไร?",
      "options": [
        "Abstraction",
        "Decomposition",
        "Pattern Recognition",
        "Algorithm Design"
      ],
      "answer": 0,
      "explanation": "Abstraction (นามธรรม) คือกระบวนการลบข้อมูลที่ไม่จำเป็นออกและมุ่งเน้นไปที่รายละเอียดที่สำคัญ"
    },
    {
      "question": "การออกแบบแผนที่รถไฟใต้ดินที่แสดงเฉพาะสถานีและเส้นทาง เป็นตัวอย่างของการคิดแบบใด?",
      "options": [
        "Abstraction",
        "Decomposition",
        "Pattern Recognition",
        "Algorithm Design"
      ],
      "answer": 0,
      "explanation": "แผนที่รถไฟใต้ดินแสดงการลบรายละเอียดที่ไม่จำเป็นออกไป (เช่น รูปร่างอาคาร) เป็นตัวอย่างของ Abstraction"
    },
    {
      "question": "ชุดคำสั่งหรือขั้นตอนที่ชัดเจนในการแก้ปัญหาตรงกับข้อใด?",
      "options": [
        "Algorithm",
        "Program",
        "Pseudocode",
        "Flowchart"
      ],
      "answer": 0,
      "explanation": "Algorithm คือชุดคำสั่งหรือขั้นตอนที่ชัดเจนในการแก้ปัญหาหนึ่งๆ"
    },
    {
      "question": "เกมซูโดกุ (Sudoku) เป็นตัวอย่างที่ดีในการพัฒนาทักษะด้านใด?",
      "options": [
        "Pattern Recognition",
        "Abstraction",
        "Decomposition",
        "Algorithm Design"
      ],
      "answer": 0,
      "explanation": "เกมซูโดกุช่วยฝึกพัฒนาทักษะการจดจำรูปแบบและการหารูปแบบซ้ำๆ (Pattern Recognition)"
    },
    {
      "question": "ข้อใดคือนิยามอย่างไม่เป็นทางการของอัลกอริทึม?",
      "options": [
        "ระเบียบวิธีหรือขั้นตอนที่มีจุดเริ่มต้นและจุดสิ้นสุดในการแก้ปัญหา",
        "ชุดคำสั่งโปรแกรมที่รันบนคอมพิวเตอร์",
        "การสร้างแผนภาพเพื่อแก้ปัญหา",
        "การวิเคราะห์ข้อมูลนามธรรม"
      ],
      "answer": 0,
      "explanation": "นิยามอย่างไม่เป็นทางการของอัลกอริทึมคือ ระเบียบวิธีหรือขั้นตอนที่มีจุดเริ่มต้นและสิ้นสุดในการแก้ปัญหา"
    },
    {
      "question": "ตามนิยามที่เป็นทางการ อัลกอริทึมที่ดีต้องมีลักษณะ Unambiguous steps หมายความว่าอย่างไร?",
      "options": [
        "แต่ละขั้นตอนต้องมีความหมายชัดเจน ไม่เปิดโอกาสให้ตีความได้มากกว่า 1 อย่าง",
        "คำสั่งทั้งหมดต้องเรียงลำดับต่อเนื่อง",
        "ต้องได้ผลลัพธ์ภายในเวลาจำกัด",
        "ต้องสามารถทำงานซ้ำๆ ได้"
      ],
      "answer": 0,
      "explanation": "Unambiguous steps คือ แต่ละขั้นตอนต้องมีความหมายชัดเจน ตีความได้ทางเดียว"
    },
    {
      "question": "การทำ Terminate in a finite time ในนิยามของอัลกอริทึมหมายถึงอะไร?",
      "options": [
        "อัลกอริทึมจะต้องมีการจบสิ้นหรือหยุดในที่สุด",
        "อัลกอริทึมต้องทำงานได้อย่างรวดเร็ว",
        "อัลกอริทึมต้องไม่มีข้อผิดพลาด",
        "อัลกอริทึมต้องกินทรัพยากรน้อย"
      ],
      "answer": 0,
      "explanation": "Terminate in a finite time หมายถึง อัลกอริทึมจะต้องมีการทำงานที่จบสิ้นลงในเวลาจำกัด"
    },
    {
      "question": "อัลกอริทึมที่หาตัวเลขที่มากที่สุดในกลุ่มของเลข 5 จำนวน ใช้วิธีใด?",
      "options": [
        "กำหนดตัวแปรเก็บค่ามากที่สุดแล้วเปรียบเทียบทีละตัว",
        "นำตัวเลขมาบวกกันทั้งหมดแล้วหาร 5",
        "การสุ่มตัวเลขขึ้นมา 1 ตัว",
        "เรียงลำดับตัวเลขทั้งหมดก่อนเสมอ"
      ],
      "answer": 0,
      "explanation": "ใช้วิธีเก็บค่าลงตัวแปร (เช่น Largest) แล้วเปรียบเทียบกับข้อมูลทีละตัว"
    },
    {
      "question": "การออกแบบขั้นตอนเพื่อแก้ปัญหาที่มีขนาดใหญ่โดยเขียนรูปแบบให้ทำซ้ำ N ครั้ง แทนการเขียนซ้ำๆ เป็นการประยุกต์ใช้ทักษะใด?",
      "options": [
        "Generalization",
        "Abstraction",
        "Decomposition",
        "Pattern Recognition"
      ],
      "answer": 0,
      "explanation": "Generalization (การทำเป็นกรณีทั่วไป) คือการปรับให้อัลกอริทึมใช้ได้กับค่า N ครั้ง"
    },
    {
      "question": "โครงสร้างการเขียนโปรแกรม (Constructs) มีพื้นฐานอยู่กี่รูปแบบ?",
      "options": [
        "3 รูปแบบ",
        "2 รูปแบบ",
        "4 รูปแบบ",
        "5 รูปแบบ"
      ],
      "answer": 0,
      "explanation": "โครงสร้าง 3 รูปแบบ (Three constructs) คือ Sequence, Decision, Repetition"
    },
    {
      "question": "ข้อใดคือ 3 รูปแบบพื้นฐานของโครงสร้างโปรแกรม?",
      "options": [
        "Sequence, Decision, Repetition",
        "Input, Process, Output",
        "Start, Loop, Stop",
        "Array, Record, Link"
      ],
      "answer": 0,
      "explanation": "Sequence (ลำดับ), Decision (ตัดสินใจ), Repetition (ทำซ้ำ)"
    },
    {
      "question": "โครงสร้างการทำงานแบบมีเงื่อนไข (If-Then-Else) จัดอยู่ในรูปแบบใด?",
      "options": [
        "Decision",
        "Sequence",
        "Repetition",
        "Abstraction"
      ],
      "answer": 0,
      "explanation": "Decision หรือ Selection ใช้สำหรับการทำงานที่มีการตัดสินใจหรือเงื่อนไข"
    },
    {
      "question": "โครงสร้างการทำงานแบบทำซ้ำ (While loop) จัดอยู่ในรูปแบบใด?",
      "options": [
        "Repetition",
        "Sequence",
        "Decision",
        "Condition"
      ],
      "answer": 0,
      "explanation": "Repetition ใช้ควบคุมการทำงานซ้ำตามเงื่อนไข (ลูป)"
    },
    {
      "question": "การแทนอัลกอริทึมด้วยรูปภาพเพื่อแสดงขั้นตอนการทำงานและภาพรวมของตรรกะ เรียกว่าอะไร?",
      "options": [
        "ผังงาน (Flowchart)",
        "รหัสเทียม (Pseudocode)",
        "โค้ดโปรแกรม (Source code)",
        "ไดอะแกรมชั้นข้อมูล"
      ],
      "answer": 0,
      "explanation": "ผังงาน (Flowchart) ใช้รูปภาพแสดงลำดับการทำงาน"
    },
    {
      "question": "การแทนอัลกอริทึมด้วยภาษาเขียนที่มีลักษณะคล้ายภาษาอังกฤษ เรียกว่าอะไร?",
      "options": [
        "รหัสเทียม (Pseudocode)",
        "ผังงาน (Flowchart)",
        "โครงสร้างต้นไม้ (Tree)",
        "รหัสเครื่อง (Machine code)"
      ],
      "answer": 0,
      "explanation": "รหัสเทียม (Pseudocode) ใช้แทนอัลกอริทึมด้วยภาษาเขียนใกล้เคียงภาษามนุษย์/อังกฤษ"
    },
    {
      "question": "สัญลักษณ์รูปสี่เหลี่ยมข้าวหลามตัดในผังงาน (Flowchart) มีความหมายว่าอะไร?",
      "options": [
        "การตัดสินใจ (Decision)",
        "จุดเริ่มต้น (Start)",
        "การทำซ้ำ (Repetition)",
        "การรับข้อมูล (Input)"
      ],
      "answer": 0,
      "explanation": "สี่เหลี่ยมข้าวหลามตัดใช้แสดงเงื่อนไขในการตัดสินใจ"
    },
    {
      "question": "การแบ่งอัลกอริทึมใหญ่ๆ ออกเป็นหน่วยย่อยๆ เรียกว่าอะไร?",
      "options": [
        "Subalgorithm",
        "Main Algorithm",
        "Flowchart",
        "Pseudocode"
      ],
      "answer": 0,
      "explanation": "Subalgorithm คืออัลกอริทึมย่อยที่ถูกแบ่งออกมาเพื่อง่ายต่อการทำความเข้าใจ"
    },
    {
      "question": "คำว่า Subprogram, subroutine, function มีความหมายสอดคล้องกับแนวคิดใด?",
      "options": [
        "Subalgorithm",
        "Generalization",
        "Pattern Recognition",
        "Variables"
      ],
      "answer": 0,
      "explanation": "คำเหล่านี้เป็นชื่อเรียกของกระบวนการแบ่งโค้ดเป็นหน่วยย่อย (Subalgorithm)"
    },
    {
      "question": "อัลกอริทึมสำหรับการหาผลรวมของเลขหลายๆ จำนวน มีชื่อเรียกว่าอะไร?",
      "options": [
        "Summation",
        "Searching",
        "Sorting",
        "Selecting"
      ],
      "answer": 0,
      "explanation": "Summation คืออัลกอริทึมพื้นฐานสำหรับการหาผลรวม"
    },
    {
      "question": "อัลกอริทึมพื้นฐานใดที่ใช้สำหรับจัดเรียงข้อมูล?",
      "options": [
        "Sorting",
        "Summation",
        "Filtering",
        "Merging"
      ],
      "answer": 0,
      "explanation": "Sorting คือกระบวนการจัดเรียงลำดับข้อมูล"
    },
    {
      "question": "ข้อใดไม่ใช่วิธีการของ Sorting Algorithm ที่ระบุในบทเรียน?",
      "options": [
        "Hashing Sort",
        "Selection Sort",
        "Bubble Sort",
        "Insertion Sort"
      ],
      "answer": 0,
      "explanation": "Hashing ไม่ใช่วิธีการจัดเรียงข้อมูลพื้นฐานในชุดคำสั่ง (แต่ใช้หาข้อมูล/เก็บข้อมูล)"
    },
    {
      "question": "อัลกอริทึมที่ทำการเรียงลำดับโดยเปรียบเทียบข้อมูลที่อยู่ติดกันแล้วสลับตำแหน่งหากไม่ถูกต้อง คือวิธีใด?",
      "options": [
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort"
      ],
      "answer": 0,
      "explanation": "Bubble Sort ใช้การเปรียบเทียบข้อมูลติดกันแล้วสลับค่า"
    },
    {
      "question": "ใน Bubble Sort \"หนึ่งรอบ (One Pass)\" หมายถึงอะไร?",
      "options": [
        "การดำเนินการเปรียบเทียบและสลับข้อมูลติดกันจนถึงข้อมูลตัวสุดท้าย",
        "การสลับข้อมูลตัวแรกและตัวสุดท้าย",
        "การหาค่าต่ำสุดแล้วนำมาไว้หน้าสุด",
        "การแยกข้อมูลเป็นสองส่วน"
      ],
      "answer": 0,
      "explanation": "One Pass คือการตรวจสอบไปจนสุดอาร์เรย์หนึ่งรอบ ข้อมูลที่ใหญ่ที่สุดจะไปอยู่ท้ายสุด"
    },
    {
      "question": "ในการทำ Insertion Sort จะมีกระบวนการจัดกลุ่มรายการอย่างไร?",
      "options": [
        "แบ่งเป็นสองส่วนคือส่วนที่เรียงลำดับแล้วและส่วนที่ยังไม่เรียงลำดับ",
        "แบ่งออกเป็นคู่ๆ เพื่อสลับตำแหน่ง",
        "แบ่งข้อมูลเป็นส่วนบนและส่วนล่าง",
        "คัดลอกข้อมูลทั้งหมดไปใส่ในอีกรายการหนึ่ง"
      ],
      "answer": 0,
      "explanation": "Insertion Sort ทำงานโดยแยกรายการเป็นส่วน sorted และ unsorted"
    },
    {
      "question": "อัลกอริทึมใดต้องมีการหาตำแหน่ง \"แทรก\" ข้อมูลในส่วนที่เรียงลำดับไว้แล้ว?",
      "options": [
        "Insertion Sort",
        "Bubble Sort",
        "Selection Sort",
        "Quick Sort"
      ],
      "answer": 0,
      "explanation": "Insertion Sort ดึงข้อมูลมาแทรก (Insert) ลงในส่วนที่เรียงลำดับแล้ว"
    },
    {
      "question": "ตามนิยามอัลกอริทึม Ordered set หมายถึงอะไร?",
      "options": [
        "คำสั่งทั้งหมดต้องจัดเรียงลำดับอย่างชัดเจน",
        "ข้อมูลต้องจัดเรียงจากน้อยไปมาก",
        "ผลลัพธ์ต้องออกมาเป็นตัวเลข",
        "ข้อมูลนำเข้าต้องไม่มีซ้ำกัน"
      ],
      "answer": 0,
      "explanation": "Ordered set ในนิยามอัลกอริทึมหมายถึงลำดับของคำสั่งที่มีการจัดเรียงขั้นตอนไว้อย่างชัดเจน"
    },
    {
      "question": "ในกระบวนการ Computational Thinking ขั้นตอนใดที่เน้นการมองข้ามรายละเอียดที่ไม่จำเป็น เพื่อสร้างโมเดลหรือแนวคิดหลักในการแก้ปัญหา?",
      "options": [
        "Decomposition",
        "Pattern Recognition",
        "Abstraction",
        "Algorithm Design"
      ],
      "answer": 2,
      "explanation": "Abstraction (การคิดเชิงนามธรรม) คือการตัดรายละเอียดที่ไม่จำเป็นออก และมุ่งเน้นไปที่ข้อมูลที่สำคัญเพื่อสร้างแบบจำลองหรือวิธีแก้ปัญหา"
    },
    {
      "question": "การใช้แผนที่รถไฟฟ้า BTS ที่แสดงเฉพาะเส้นทางและสถานี โดยไม่แสดงรายละเอียดของถนนและอาคารโดยรอบ เป็นตัวอย่างของการใช้แนวคิดใดใน Computational Thinking?",
      "options": [
        "Decomposition",
        "Pattern Recognition",
        "Abstraction",
        "Algorithm Design"
      ],
      "answer": 2,
      "explanation": "แผนที่รถไฟฟ้าเป็นตัวอย่างที่ดีของ Abstraction เพราะตัดรายละเอียดเชิงภูมิศาสตร์ที่ซับซ้อนออกไป เหลือเพียงข้อมูลเส้นทางที่จำเป็นต่อการเดินทาง"
    },
    {
      "question": "หากคุณต้องการพัฒนาระบบแนะนำภาพยนตร์ (Movie Recommendation) การวิเคราะห์ประวัติการชมภาพยนตร์ของผู้ใช้เพื่อหาแนวโน้มความชอบ จัดอยู่ในขั้นตอนใด?",
      "options": [
        "Decomposition",
        "Pattern Recognition",
        "Abstraction",
        "Algorithm Design"
      ],
      "answer": 1,
      "explanation": "Pattern Recognition คือการหารูปแบบหรือแนวโน้มจากข้อมูล เช่น การดูพฤติกรรมหรือความชอบที่ซ้ำๆ กันเพื่อนำมาคาดการณ์"
    },
    {
      "question": "ข้อใดคือลักษณะสำคัญของ Algorithm ที่ดีตามนิยามที่เป็นทางการ (Formal Definition)?",
      "options": [
        "ต้องมีขั้นตอนที่กำกวมเพื่อให้ระบบยืดหยุ่น",
        "ต้องทำงานแบบไม่สิ้นสุด (Infinite Loop) เพื่อรอรับคำสั่งตลอดเวลา",
        "ต้องประกอบด้วย Unambiguous steps และ Terminate in a finite time",
        "ต้องเขียนด้วยภาษาโปรแกรมระดับสูงเท่านั้น"
      ],
      "answer": 2,
      "explanation": "Algorithm ที่ดีต้องมีขั้นตอนที่ชัดเจนไม่กำกวม (Unambiguous) และต้องทำงานเสร็จสิ้นภายในเวลาที่จำกัด (Terminate in a finite time)"
    },
    {
      "question": "ในการหาค่าที่มากที่สุด (FindLargest) จากชุดตัวเลข 5 จำนวน เหตุใดในขั้นตอนแรกจึงนิยมกำหนดให้ค่า Largest เท่ากับตัวเลขแรกของชุดข้อมูล แทนที่จะกำหนดเป็น 0?",
      "options": [
        "เพราะ 0 อาจมีค่ามากกว่าตัวเลขในชุดข้อมูล หากชุดข้อมูลมีแต่จำนวนเต็มลบ",
        "เพราะช่วยลดจำนวนรอบในการเปรียบเทียบลง 1 รอบเสมอ",
        "เพราะคอมพิวเตอร์ไม่สามารถประมวลผลค่า 0 ได้อย่างรวดเร็ว",
        "เพราะเป็นข้อบังคับของโครงสร้างแบบ Repetition"
      ],
      "answer": 0,
      "explanation": "หากชุดข้อมูลมีแต่จำนวนเต็มลบ (เช่น -5, -10) การตั้ง Largest = 0 จะทำให้ผลลัพธ์ผิดพลาด การให้ Largest เท่ากับค่าแรกจึงครอบคลุมทุกกรณี"
    },
    {
      "question": "จากโครงสร้างพื้นฐาน 3 รูปแบบ (Three Constructs) โครงสร้างแบบใดที่ช่วยให้โปรแกรมสามารถข้ามการทำงานบางคำสั่งเงื่อนไขไม่เป็นจริง?",
      "options": [
        "Sequence",
        "Decision (Selection)",
        "Repetition",
        "Recursion"
      ],
      "answer": 1,
      "explanation": "Decision หรือ Selection (การตัดสินใจ) เช่น if-else จะใช้เงื่อนไขในการเลือกทำหรือไม่ทำคำสั่งบางชุด"
    },
    {
      "question": "หากคุณมีรายการย่อยที่เรียงลำดับแล้วและรายการย่อยที่ยังไม่เรียง การหยิบข้อมูลตัวแรกจากกลุ่มที่ยังไม่เรียงไปแทรกในตำแหน่งที่ถูกต้องของกลุ่มที่เรียงแล้ว คือหลักการของอัลกอริทึมใด?",
      "options": [
        "Selection Sort",
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort"
      ],
      "answer": 2,
      "explanation": "Insertion Sort ทำงานโดยแบ่งข้อมูลเป็นส่วนที่เรียงแล้วและยังไม่เรียง จากนั้นนำข้อมูลที่ยังไม่เรียงทีละตัวไปแทรก (Insert) ในตำแหน่งที่ถูกต้อง"
    },
    {
      "question": "ในการทำงานของ Bubble Sort แบบปกติ (Ascending Order) เมื่อจบการทำงานใน Pass ที่ 1 ข้อมูลใดจะไปอยู่ในตำแหน่งที่ถูกต้องอย่างแน่นอน?",
      "options": [
        "ข้อมูลที่มีค่าน้อยที่สุดจะไปอยู่ตำแหน่งแรกสุด",
        "ข้อมูลที่มีค่ามากที่สุดจะไปอยู่ตำแหน่งสุดท้าย",
        "ข้อมูลที่อยู่ตรงกลางจะถูกจัดเรียง",
        "ข้อมูลจะถูกสลับแบบสุ่มจนกว่าจะเรียงเสร็จ"
      ],
      "answer": 1,
      "explanation": "Bubble Sort ทำการเปรียบเทียบและสลับค่าที่มากกว่าไปทางขวาเรื่อยๆ ทำให้ใน Pass แรก ค่าที่มากที่สุดจะไปอยู่ตำแหน่งสุดท้ายเสมอ (Bubble up)"
    },
    {
      "question": "Selection Sort ทำการเรียงลำดับข้อมูลอย่างไร?",
      "options": [
        "เปรียบเทียบและสลับข้อมูลที่อยู่ติดกันเรื่อยๆ",
        "หาข้อมูลที่มีค่าน้อยที่สุด (หรือมากที่สุด) ในกลุ่มที่ยังไม่เรียง แล้วนำมาสลับกับข้อมูลตัวแรกของกลุ่มนั้น",
        "แบ่งข้อมูลเป็นสองส่วนแล้วทำ Recursion",
        "แทรกข้อมูลทีละตัวลงในตำแหน่งที่ถูกต้อง"
      ],
      "answer": 1,
      "explanation": "Selection Sort จะหาค่าที่น้อยที่สุดใน Unsorted list แล้วนำมาสลับ (Swap) กับสมาชิกตัวแรกของ Unsorted list นั้น"
    },
    {
      "question": "สถานการณ์ใดที่ Insertion Sort จะทำงานได้เร็วที่สุด (Best Case)?",
      "options": [
        "ข้อมูลถูกเรียงลำดับกลับด้านจากมากไปน้อย",
        "ข้อมูลทุกตัวมีค่าเท่ากันทั้งหมด",
        "ข้อมูลถูกเรียงลำดับจากน้อยไปมากอย่างถูกต้องอยู่แล้ว",
        "ข้อมูลถูกสุ่มกระจายอย่างสมบูรณ์"
      ],
      "answer": 2,
      "explanation": "หากข้อมูลถูกเรียงอยู่แล้ว Insertion Sort จะทำการเปรียบเทียบเพียง 1 ครั้งต่อตัวข้อมูลและไม่ต้องสลับตำแหน่งเลย ทำให้ทำงานได้เร็วที่สุด"
    },
    {
      "question": "ข้อความใดกล่าวถึงการใช้ Subalgorithms (อัลกอริทึมย่อย) ได้ถูกต้องที่สุด?",
      "options": [
        "ทำให้โปรแกรมทำงานช้าลงเพราะต้องเสียเวลาเรียกใช้",
        "เป็นหลักการของ Structured Programming ที่ช่วยแบ่งปัญหาใหญ่ให้เป็นส่วนเล็กๆ ทำให้ทำความเข้าใจและแก้ไขได้ง่ายขึ้น",
        "ไม่สามารถเรียกใช้งานซ้ำได้ในโปรแกรมเดียวกัน",
        "เหมาะสำหรับโปรแกรมที่มีขนาดเล็กและมีเพียงลำดับแบบ Sequence เท่านั้น"
      ],
      "answer": 1,
      "explanation": "Subalgorithms (เช่น functions/methods) เป็นหัวใจของ Structured Programming ช่วยแบ่งปัญหาและให้โค้ดสามารถอ่าน แก้ไข และนำกลับมาใช้ใหม่ได้ง่าย"
    },
    {
      "question": "ในกระบวนการ Decomposition หากคุณกำลังจะพัฒนาระบบ e-Commerce การแบ่งปัญหาข้อใดเหมาะสมที่สุด?",
      "options": [
        "แบ่งเป็น ระบบฐานข้อมูล, ระบบจัดการตะกร้าสินค้า, ระบบชำระเงิน",
        "แบ่งเป็น การเลือกสีพื้นหลัง, การเลือกขนาดตัวอักษร, การเลือกปุ่ม",
        "แบ่งเป็น การติดตั้งเซิร์ฟเวอร์, การเชื่อมต่ออินเทอร์เน็ต, การเปิดเครื่อง",
        "แบ่งเป็น การสั่งซื้อของลูกค้าคนที่ 1, ลูกค้าคนที่ 2, ลูกค้าคนที่ 3"
      ],
      "answer": 0,
      "explanation": "Decomposition คือการแตกปัญหาระบบใหญ่เป็นโมดูลหรือระบบย่อยที่สามารถพัฒนาและจัดการได้ง่ายขึ้น เช่น ระบบจัดการตะกร้า, ระบบชำระเงิน"
    },
    {
      "question": "จากรหัสเทียม (Pseudocode) ของ Bubble Sort หากมีข้อมูล 10 ตัว จะต้องทำการวนลูป (Pass) ในกรณีที่แย่ที่สุดกี่ครั้งถึงจะรับประกันว่าข้อมูลเรียงลำดับเสร็จสมบูรณ์?",
      "options": [
        "10 ครั้ง",
        "9 ครั้ง",
        "5 ครั้ง",
        "ไม่สามารถระบุได้"
      ],
      "answer": 1,
      "explanation": "สำหรับข้อมูล N ตัว Bubble Sort ต้องการลูป (Pass) อย่างมาก N-1 ครั้งเพื่อให้ข้อมูลทั้งหมดถูกจัดเรียงอย่างสมบูรณ์ (10 - 1 = 9)"
    },
    {
      "question": "ข้อใดเป็นตัวอย่างของ Pattern Recognition ในชีวิตประจำวัน?",
      "options": [
        "การแบ่งขั้นตอนการทำอาหารออกเป็นการเตรียมวัตถุดิบและการปรุง",
        "การสังเกตว่ารถมักจะติดในเส้นทาง A ในเวลา 17.00 น. ของทุกวันธรรมดา",
        "การสร้างแผนที่เดินทางโดยละทิ้งชื่อซอยเล็กๆ",
        "การเขียนลำดับขั้นตอนการต้มบะหมี่กึ่งสำเร็จรูป"
      ],
      "answer": 1,
      "explanation": "การสังเกตเห็นแนวโน้มหรือเหตุการณ์ที่เกิดขึ้นซ้ำๆ ภายใต้เงื่อนไขเดียวกัน คือ Pattern Recognition"
    },
    {
      "question": "สิ่งใดเป็นข้อได้เปรียบของการใช้ Flowchart ในการแสดง Algorithm?",
      "options": [
        "สามารถคอมไพล์และรันเป็นโปรแกรมได้ทันที",
        "ประหยัดพื้นที่ในการเขียนมากกว่า Pseudocode",
        "แสดงภาพรวมของตรรกะได้ชัดเจนและเข้าใจง่ายกว่าข้อความ",
        "มีไวยากรณ์ที่เข้มงวดและเป็นมาตรฐานเดียวทั่วโลก"
      ],
      "answer": 2,
      "explanation": "Flowchart ใช้รูปภาพในการสื่อสาร ทำให้เห็นลำดับขั้นตอนและเงื่อนไขต่างๆ เป็นภาพรวมตรรกะได้อย่างชัดเจน"
    },
    {
      "question": "พิจารณาขั้นตอนการทำงาน: 1) ถอนเงิน 2) เช็คยอดเงิน 3) นำบัตรออก หากเกิดปัญหาตรรกะขัดข้อง (Logical Error) ขึ้นเพราะลำดับผิดพลาด เป็นปัญหาที่เกิดจากโครงสร้างใด?",
      "options": [
        "Sequence",
        "Decision",
        "Repetition",
        "Abstraction"
      ],
      "answer": 0,
      "explanation": "ลำดับการทำงานที่ผิดพลาด (ต้องเช็คยอดเงินก่อนถอนเงิน) เป็นข้อผิดพลาดในโครงสร้างแบบลำดับ (Sequence)"
    },
    {
      "question": "อัลกอริทึมแบบ Repetition (ลูป) ต้องมีองค์ประกอบที่สำคัญเพื่อป้องกันปัญหาใด?",
      "options": [
        "Syntax Error",
        "Infinite Loop",
        "Data Loss",
        "Memory Leak"
      ],
      "answer": 1,
      "explanation": "โครงสร้างแบบทำซ้ำต้องมีเงื่อนไขสำหรับการยุติ (Termination condition) มิฉะนั้นจะเกิด Infinite loop (ทำซ้ำไม่สิ้นสุด)"
    },
    {
      "question": "หากมีข้อมูลชุดหนึ่งคือ [50, 20, 40, 10, 30] หลังจากผ่านขั้นตอนแรก (Pass 1) ของ Selection Sort แบบน้อยไปมาก ผลลัพธ์จะเป็นอย่างไร?",
      "options": [
        "[20, 40, 10, 30, 50]",
        "[10, 20, 40, 50, 30]",
        "[10, 20, 40, 10, 30]",
        "[10, 50, 40, 20, 30]"
      ],
      "answer": 1,
      "explanation": "Selection Sort จะหาค่าน้อยสุดคือ 10 แล้วนำมาสลับกับตัวแรกคือ 50 ดังนั้นรอบแรกจะได้ [10, 20, 40, 50, 30]"
    },
    {
      "question": "จากชุดข้อมูล [35, 12, 43, 8] หากใช้ Bubble Sort (น้อยไปมาก) การสลับข้อมูลใน 1 Pass แรก จะส่งผลให้ตัวเลขใดไปอยู่ตำแหน่งสุดท้าย?",
      "options": [
        "8",
        "12",
        "35",
        "43"
      ],
      "answer": 3,
      "explanation": "ในกระบวนการ Bubble Sort ค่าที่มากที่สุดในกลุ่มที่พิจารณาจะเกิดการสลับ (Bubble up) ไปเรื่อยๆ จนถึงตำแหน่งสุดท้าย ซึ่งค่ามากสุดคือ 43"
    },
    {
      "question": "การหาพื้นที่สามเหลี่ยม (1/2 * ฐาน * สูง) เป็นการคำนวณที่ใช้โครงสร้างแบบใดเป็นหลัก?",
      "options": [
        "Sequence",
        "Selection",
        "Repetition",
        "Combination"
      ],
      "answer": 0,
      "explanation": "การคำนวณสูตรคณิตศาสตร์แบบตายตัว โดยไม่มีเงื่อนไขและการทำซ้ำ คือโครงสร้างแบบลำดับ (Sequence)"
    },
    {
      "question": "ในอัลกอริทึม FindLargest การทำงานในส่วนของการ \"ตรวจสอบตัวเลขปัจจุบันกับตัวแปร Largest\" จัดเป็นโครงสร้างแบบใด?",
      "options": [
        "Sequence",
        "Decision",
        "Repetition",
        "Subalgorithm"
      ],
      "answer": 1,
      "explanation": "การเปรียบเทียบว่า \"หาก\" ตัวเลขปัจจุบันมากกว่า Largest \"แล้ว\" ให้ปรับค่า Largest ถือเป็นเงื่อนไข (Decision/Selection)"
    },
    {
      "question": "ข้อความใดอธิบาย \"Pseudocode\" ได้ถูกต้องที่สุด?",
      "options": [
        "โค้ดโปรแกรมที่พร้อมจะถูก Execute โดยคอมพิวเตอร์",
        "รหัสภาพที่แสดงอัลกอริทึมในรูปแบบเรขาคณิต",
        "คำอธิบายอัลกอริทึมแบบกึ่งภาษาโปรแกรมและภาษามนุษย์",
        "ระบบปฏิบัติการประเภทหนึ่งที่ใช้สำหรับการออกแบบระบบ"
      ],
      "answer": 2,
      "explanation": "รหัสเทียม (Pseudocode) เป็นการเขียนอธิบายลำดับขั้นตอนการทำงานโดยมีโครงสร้างคล้ายภาษาโปรแกรมแต่เข้าใจได้ง่ายด้วยภาษามนุษย์ ไม่ยึดติดไวยากรณ์ภาษาใดๆ"
    },
    {
      "question": "ในอัลกอริทึม Selection Sort คำว่า \"Wall\" (กำแพงสมมติ) หมายถึงสิ่งใด?",
      "options": [
        "จุดแบ่งระหว่างหน่วยความจำหลักและหน่วยความจำรอง",
        "จุดที่ใช้แยกข้อมูลส่วนที่จัดเรียงแล้ว (Sorted) ออกจากส่วนที่ยังไม่ได้จัดเรียง (Unsorted)",
        "เงื่อนไขที่ใช้ในการหยุดอัลกอริทึม",
        "ตัวแปรที่ใช้เก็บค่าชั่วคราวในการสลับ (Swap)"
      ],
      "answer": 1,
      "explanation": "ในเชิงจินตภาพของ Selection Sort (และ Insertion Sort) จะมี \"กำแพง\" สมมติที่แบ่งรายการที่ถูกจัดเรียงแล้วและส่วนที่กำลังรอการจัดเรียง"
    },
    {
      "question": "ข้อใดเป็นจริงเกี่ยวกับการวิเคราะห์อัลกอริทึมเพื่อแก้ปัญหา (Algorithm Design)?",
      "options": [
        "ต้องเริ่มต้นด้วยการเขียนโปรแกรมลงคอมพิวเตอร์ทันที",
        "เป็นกระบวนการที่นำผลจากการย่อยปัญหา หารูปแบบ และสร้างนามธรรม มาเขียนเป็นลำดับขั้นตอน",
        "เป็นทักษะที่ไม่เกี่ยวข้องกับ Computational Thinking",
        "อัลกอริทึมที่มีความยาวมากที่สุดคืออัลกอริทึมที่ดีที่สุด"
      ],
      "answer": 1,
      "explanation": "Algorithm Design เป็นขั้นสุดท้ายของ Computational Thinking ที่นำเอาความเข้าใจปัญหา (Decomposition, Pattern Recognition, Abstraction) มาเรียบเรียงเป็นขั้นตอน"
    },
    {
      "question": "เหตุใดการเรียงลำดับแบบ Insertion Sort จึงมีลักษณะการ \"เลื่อน (Shift)\" ข้อมูล?",
      "options": [
        "เพื่อลบข้อมูลที่ซ้ำกันทิ้งไป",
        "เพื่อหาค่าที่น้อยที่สุดในรายการ",
        "เพื่อสร้างพื้นที่ว่างในการแทรกข้อมูลเข้าไปในตำแหน่งที่ถูกต้องของกลุ่มที่เรียงแล้ว",
        "เพื่อลดขนาดของ Array ให้ประหยัดหน่วยความจำ"
      ],
      "answer": 2,
      "explanation": "ใน Insertion Sort เมื่อพบตำแหน่งที่เหมาะสมที่จะแทรกค่า จำเป็นต้องเลื่อน (Shift) ข้อมูลที่มีค่ามากกว่าไปทางขวาเพื่อเปิดพื้นที่สำหรับการแทรก"
    },
    {
      "question": "สัญลักษณ์รูปสี่เหลี่ยมข้าวหลามตัด (Diamond) ใน Flowchart หมายถึงกระบวนการใด?",
      "options": [
        "จุดเริ่มต้น / สิ้นสุด",
        "การรับหรือแสดงผลข้อมูล",
        "การตัดสินใจ / เงื่อนไข",
        "การประมวลผลคำนวณ"
      ],
      "answer": 2,
      "explanation": "สี่เหลี่ยมข้าวหลามตัด (Diamond) ในผังงานใช้สำหรับเงื่อนไขการตัดสินใจ (Decision) ซึ่งมีทางออกมากกว่าหนึ่งทาง (เช่น True / False)"
    },
    {
      "question": "ในกรณีของ Bubble Sort หากใน Pass ที่กำหนด ไม่มีการ \"สลับตำแหน่ง (Swap)\" ข้อมูลใดๆ เลย อัลกอริทึมสามารถสรุปได้อย่างไร?",
      "options": [
        "ข้อมูลทั้งหมดถูกจัดเรียงอย่างสมบูรณ์แล้ว สามารถหยุดการทำงานได้",
        "เกิดข้อผิดพลาดในการรับข้อมูล",
        "ยังคงต้องทำงานจนกว่าจะครบ n-1 passes",
        "ต้องสลับกลับไปใช้ Selection Sort แทน"
      ],
      "answer": 0,
      "explanation": "หากไม่มีการสลับเลยในลูปของ Bubble Sort แสดงว่าข้อมูลถูกเรียงเรียบร้อยแล้ว จึงสามารถเพิ่มเงื่อนไขหยุดก่อนกำหนดเพื่อประหยัดเวลาได้"
    },
    {
      "question": "คุณมีขั้นตอนการเดินทางจากตากไปเปรโต๊ะลอซู โดยต้องเลือกว่าจะขับรถไปเองหรือนั่งรถโดยสาร นี่คือตัวอย่างของการใช้ Construct ชนิดใด?",
      "options": [
        "Sequence",
        "Decision",
        "Repetition",
        "Recursion"
      ],
      "answer": 1,
      "explanation": "การเลือกว่าจะใช้รูปแบบใดรูปแบบหนึ่งบนทางเลือก ถือเป็นการตัดสินใจ (Decision หรือ Selection)"
    },
    {
      "question": "ข้อใดไม่ใช่ข้อจำกัดหรือคุณสมบัติบังคับของอัลกอริทึมที่เป็นทางการ (Formal Algorithm)?",
      "options": [
        "ต้องไม่กำกวม (Unambiguous)",
        "ต้องสิ้นสุดได้ภายในระยะเวลาที่กำหนด (Finite time)",
        "ต้องถูกเขียนขึ้นด้วยภาษาคอมพิวเตอร์เท่านั้น",
        "ต้องสามารถรับและส่งคืนข้อมูลในลักษณะที่กำหนดได้ชัดเจน"
      ],
      "answer": 2,
      "explanation": "อัลกอริทึมสามารถถูกอธิบายด้วยภาษามนุษย์ ผังงาน หรือรหัสเทียมก็ได้ ไม่จำเป็นต้องเป็นภาษาโปรแกรมคอมพิวเตอร์ (Programming language) เสมอไป"
    },
    {
      "question": "กระบวนการคิดเชิงคำนวณ (Computational Thinking) มีความสำคัญอย่างไรในโลกยุคปัจจุบัน?",
      "options": [
        "ทำให้ทุกคนสามารถเป็นโปรแกรมเมอร์มืออาชีพได้",
        "ช่วยให้คิดแก้ปัญหาอย่างเป็นระบบและสามารถนำไปประยุกต์ใช้ได้ทั้งกับคอมพิวเตอร์และปัญหาในชีวิตจริง",
        "เป็นทักษะที่ใช้สำหรับประกอบเครื่องคอมพิวเตอร์เท่านั้น",
        "ช่วยให้เราทำงานโดยไม่ต้องพึ่งพาระบบดิจิทัลอีกต่อไป"
      ],
      "answer": 1,
      "explanation": "Computational Thinking เป็นทักษะการแก้ปัญหาเชิงวิเคราะห์ที่เป็นระบบ ซึ่งสามารถประยุกต์ใช้กับการแก้ปัญหาทั่วไปในชีวิตหรือการทำงาน ไม่จำกัดแค่การเขียนโปรแกรม"
    }
  ],
  "8-9": [
    {
      "question": "โครงสร้างข้อมูลแบบใดที่เก็บข้อมูลประเภทเดียวกันและมีขนาดคงที่?",
      "options": [
        "Array",
        "Record",
        "Linked List",
        "Stack"
      ],
      "answer": 0,
      "explanation": "Array (อะเรย์) เป็นโครงสร้างข้อมูลขนาดคงที่และเก็บข้อมูลประเภทเดียวกัน"
    },
    {
      "question": "ข้อใดคือลักษณะสำคัญของโครงสร้างข้อมูล Array?",
      "options": [
        "เก็บข้อมูลเรียงกันตามลำดับของหน่วยความจำ",
        "สามารถขยายขนาดได้เรื่อยๆ อัตโนมัติ",
        "เก็บข้อมูลต่างประเภทกันได้ในโครงสร้างเดียว",
        "ใช้ Pointer ชี้ไปยังข้อมูลถัดไปเสมอ"
      ],
      "answer": 0,
      "explanation": "Array อาศัยการเก็บข้อมูลเรียงต่อเนื่องกันในหน่วยความจำ"
    },
    {
      "question": "การอ้างอิงข้อมูลใน Array จะต้องใช้สิ่งใดเป็นตัวระบุตำแหน่ง?",
      "options": [
        "ดัชนี (Indexing)",
        "พอยน์เตอร์ (Pointer)",
        "ชื่อเรคคอร์ด (Record name)",
        "ฟิลด์ (Field)"
      ],
      "answer": 0,
      "explanation": "การอ้างอิงข้อมูลในอะเรย์ใช้ดัชนี (Index)"
    },
    {
      "question": "การเก็บข้อมูลของ Array 2 มิติในหน่วยความจำ มักนิยมเก็บแบบใด?",
      "options": [
        "Row-major order",
        "Column-major order",
        "Diagonal order",
        "Random order"
      ],
      "answer": 0,
      "explanation": "มักนิยมเก็บข้อมูลแบบ Row-major order (เอาแถวมาเรียงต่อกัน)"
    },
    {
      "question": "โครงสร้างข้อมูลแบบใดที่สามารถเก็บข้อมูลต่างประเภทกันรวมอยู่ในโครงสร้างเดียวกันได้?",
      "options": [
        "Record",
        "Array",
        "Matrix",
        "Queue"
      ],
      "answer": 0,
      "explanation": "Record (ระเบียน) สามารถเก็บฟิลด์ที่มีชนิดข้อมูลต่างกันได้"
    },
    {
      "question": "ข้อมูลแต่ละส่วนย่อยภายในระเบียน (Record) เรียกว่าอะไร?",
      "options": [
        "Field",
        "Node",
        "Index",
        "Element"
      ],
      "answer": 0,
      "explanation": "ส่วนประกอบย่อยของระเบียนเรียกว่า ฟิลด์ (Field)"
    },
    {
      "question": "การเข้าถึงฟิลด์ในระเบียน (Record) มักใช้เครื่องหมายใดในการระบุ?",
      "options": [
        "จุด (.)",
        "จุลภาค (,)",
        "วงเล็บ ([ ])",
        "ปีกกา ({ })"
      ],
      "answer": 0,
      "explanation": "การเข้าถึงฟิลด์ในระเบียนมักใช้เครื่องหมายจุด (.)"
    },
    {
      "question": "โครงสร้างข้อมูลใดที่ใช้ตัวชี้ (Pointer) ในการจำลองและเชื่อมโยงข้อมูลแต่ละตัวเข้าด้วยกัน?",
      "options": [
        "Linked List",
        "Array",
        "Record",
        "Sequence"
      ],
      "answer": 0,
      "explanation": "Linked List ใช้ตัวชี้ (Pointer) เพื่อเชื่อมโยงข้อมูลแต่ละโหนด"
    },
    {
      "question": "สมาชิกแต่ละตัวในลิงค์ลิสต์ (Linked List) มักเรียกว่าอะไร?",
      "options": [
        "โหนด (Node)",
        "ฟิลด์ (Field)",
        "ดัชนี (Index)",
        "แถว (Row)"
      ],
      "answer": 0,
      "explanation": "แต่ละรายการใน Linked List จะเรียกว่า โหนด (Node)"
    },
    {
      "question": "โหนด (Node) พื้นฐานใน Singly Linked List ประกอบด้วยกี่ส่วน?",
      "options": [
        "2 ส่วน (Data และ Link)",
        "1 ส่วน (Data)",
        "3 ส่วน (Data, Link1, Link2)",
        "4 ส่วน"
      ],
      "answer": 0,
      "explanation": "ประกอบด้วยข้อมูล (Data) และตัวชี้ไปยังโหนดถัดไป (Link)"
    },
    {
      "question": "ส่วน Link ของโหนดสุดท้ายใน Linked List ปกติจะมีค่าเป็นอะไร?",
      "options": [
        "Null pointer",
        "Head pointer",
        "0",
        "ไม่ระบุค่า"
      ],
      "answer": 0,
      "explanation": "โหนดสุดท้ายจะชี้ไปที่ Null เพื่อบอกว่าเป็นจุดสิ้นสุดของลิสต์"
    },
    {
      "question": "ตัวชี้ที่ใช้ชี้ไปยังโหนดแรกของ Linked List เรียกว่าอะไร?",
      "options": [
        "Head pointer",
        "Null pointer",
        "Tail pointer",
        "Current pointer"
      ],
      "answer": 0,
      "explanation": "Head pointer คือตัวชี้ที่ชี้ไปยังจุดเริ่มต้นของ Linked List"
    },
    {
      "question": "โครงสร้างข้อมูลแบบ Linear List แบ่งออกเป็น 2 ประเภทใหญ่ๆ คือข้อใด?",
      "options": [
        "Restricted list และ General list",
        "Array และ Record",
        "Stack และ Queue",
        "Node และ Pointer"
      ],
      "answer": 0,
      "explanation": "Linear List แบ่งเป็น Restricted list (จำกัดการเข้าถึง) และ General list"
    },
    {
      "question": "Stack และ Queue จัดเป็นโครงสร้างข้อมูลประเภทใดใน Linear List?",
      "options": [
        "Restricted list",
        "General list",
        "Unordered list",
        "Non-linear list"
      ],
      "answer": 0,
      "explanation": "Stack และ Queue มีข้อจำกัดการเอาเข้า/ออก จึงเป็น Restricted list"
    },
    {
      "question": "Stack มีหลักการทำงานแบบใด?",
      "options": [
        "LIFO (Last In First Out)",
        "FIFO (First In First Out)",
        "Random Access",
        "Sequential Access"
      ],
      "answer": 0,
      "explanation": "Stack เป็น LIFO ข้อมูลเข้าทีหลังออกก่อน"
    },
    {
      "question": "การเพิ่มข้อมูลหรือสมาชิกเข้าไปใน Stack เรียกว่าอะไร?",
      "options": [
        "Push",
        "Pop",
        "Enqueue",
        "Dequeue"
      ],
      "answer": 0,
      "explanation": "การเพิ่มข้อมูลใน Stack คือการ Push"
    },
    {
      "question": "การนำข้อมูลหรือสมาชิกออกจาก Stack เรียกว่าอะไร?",
      "options": [
        "Pop",
        "Push",
        "Enqueue",
        "Dequeue"
      ],
      "answer": 0,
      "explanation": "การนำข้อมูลออกจาก Stack คือการ Pop"
    },
    {
      "question": "หากทำการ Push ข้อมูลลงใน Stack ที่ไม่มีที่ว่างเหลืออยู่ จะเกิดสถานะใด?",
      "options": [
        "Overflow",
        "Underflow",
        "Error Empty",
        "Collision"
      ],
      "answer": 0,
      "explanation": "เมื่อ Stack เต็มและพยายามใส่ข้อมูลจะเกิด Overflow"
    },
    {
      "question": "หากทำการ Pop ข้อมูลออกจาก Stack ที่ไม่มีข้อมูลอยู่เลย จะเกิดสถานะใด?",
      "options": [
        "Underflow",
        "Overflow",
        "Full",
        "Memory Leak"
      ],
      "answer": 0,
      "explanation": "การดึงข้อมูลจากโครงสร้างที่ว่างเปล่าทำให้เกิด Underflow"
    },
    {
      "question": "โครงสร้างข้อมูลใดทำงานคล้ายกับการเข้าแถวซื้อสินค้า?",
      "options": [
        "Queue",
        "Stack",
        "Array",
        "Record"
      ],
      "answer": 0,
      "explanation": "Queue ทำงานตามลำดับคิว (มาก่อนได้ก่อน)"
    },
    {
      "question": "Queue มีหลักการทำงานแบบใด?",
      "options": [
        "FIFO (First In First Out)",
        "LIFO (Last In First Out)",
        "Random Access",
        "Indexed Access"
      ],
      "answer": 0,
      "explanation": "Queue ใช้หลักการ FIFO ข้อมูลเข้าก่อนออกก่อน"
    },
    {
      "question": "การเพิ่มข้อมูลลงใน Queue เรียกว่าอะไร และทำที่ตำแหน่งใด?",
      "options": [
        "Enqueue ทำที่ด้านท้าย (Rear)",
        "Enqueue ทำที่ด้านหน้า (Front)",
        "Dequeue ทำที่ด้านท้าย (Rear)",
        "Dequeue ทำที่ด้านหน้า (Front)"
      ],
      "answer": 0,
      "explanation": "การใส่ข้อมูลเรียกว่า Enqueue โดยทำต่อที่ท้าย (Rear/Tail)"
    },
    {
      "question": "การนำข้อมูลออกจาก Queue เรียกว่าอะไร และทำที่ตำแหน่งใด?",
      "options": [
        "Dequeue ทำที่ด้านหน้า (Front)",
        "Dequeue ทำที่ด้านท้าย (Rear)",
        "Enqueue ทำที่ด้านหน้า (Front)",
        "Enqueue ทำที่ด้านท้าย (Rear)"
      ],
      "answer": 0,
      "explanation": "การเอาข้อมูลออกเรียกว่า Dequeue โดยดึงออกจากหัวคิว (Front/Head)"
    },
    {
      "question": "โครงสร้างข้อมูล General list แบบใดที่ข้อมูลมีการจัดลำดับตามคีย์ (Key)?",
      "options": [
        "Ordered list",
        "Random list",
        "Stack",
        "Queue"
      ],
      "answer": 0,
      "explanation": "Ordered list คือลิสต์ที่มีการเรียงข้อมูลตามค่าคีย์"
    },
    {
      "question": "การเพิ่มโหนด (Inserting a Node) ใหม่แทรกกลาง Linked List ต้องใช้การจัดการกี่ขั้นตอนหลัก?",
      "options": [
        "3 ขั้นตอน",
        "1 ขั้นตอน",
        "2 ขั้นตอน",
        "4 ขั้นตอน"
      ],
      "answer": 0,
      "explanation": "การแทรกโหนดต้องทำ 3 ขั้นตอน: 1. สร้างและใส่ข้อมูลโหนดใหม่ 2. ชี้โหนดใหม่ไปตัวถัดไป 3. ชี้โหนดก่อนหน้ามาที่โหนดใหม่"
    },
    {
      "question": "ในการตัดโหนด (Deleting a node) ออกจาก Linked List สิ่งที่สำคัญที่สุดคืออะไร?",
      "options": [
        "การเปลี่ยนลิงค์ฟิลด์ของโหนดก่อนหน้าให้ชี้ข้ามโหนดที่ต้องการตัด",
        "การลบข้อมูลในโหนดทิ้งทันที",
        "การเปลี่ยนค่า Head pointer เสมอ",
        "การทำสำเนาโหนดทั้งหมด"
      ],
      "answer": 0,
      "explanation": "ต้องนำตัวชี้ของโหนดก่อนหน้า ชี้ข้ามไปยังโหนดถัดจากโหนดที่ถูกตัด"
    },
    {
      "question": "การดึงหรือค้นข้อมูลจากโหนดในลิงค์ลิสต์ ทำได้โดยวิธีใด?",
      "options": [
        "ท่องลิสต์และเปรียบเทียบทีละโหนดจนพบ",
        "ใช้ดัชนีระบุตำแหน่งข้อมูลโดยตรง",
        "คำนวณตำแหน่งด้วย Hash Function",
        "ดึงข้อมูลจากตำแหน่งสุดท้ายเสมอ"
      ],
      "answer": 0,
      "explanation": "Linked list ต้องมีการท่องลิสต์ (Traversing) ตั้งแต่เริ่มเพื่อค้นหาโหนด"
    },
    {
      "question": "การท่องลิสต์ (Traversing a List) มีจุดประสงค์เพื่ออะไร?",
      "options": [
        "เพื่อเข้าถึงและประมวลผลทุกโหนดในลิสต์ตามลำดับ",
        "เพื่อลบโหนดทั้งหมด",
        "เพื่อสุ่มข้อมูลขึ้นมา",
        "เพื่อเพิ่มขนาดของลิสต์"
      ],
      "answer": 0,
      "explanation": "การท่องลิสต์คือการเข้าถึงข้อมูลแต่ละโหนดตามลำดับในลิสต์"
    },
    {
      "question": "โครงสร้างใดที่จำเป็นต้องมี Head Pointer เพื่อไม่ให้ข้อมูลสูญหาย?",
      "options": [
        "Linked List",
        "Array",
        "Record",
        "Sequential File"
      ],
      "answer": 0,
      "explanation": "Linked List ต้องมี Head Pointer เป็นจุดเริ่มต้น มิเช่นนั้นจะไม่สามารถเข้าถึงข้อมูลใดได้เลย"
    },
    {
      "question": "หากกำหนด Stack ว่าง แล้วทำคำสั่ง Push(5), Push(10), Pop(), Push(20) ลำดับข้อมูลที่เหลือใน Stack (จากล่างขึ้นบน) คือข้อใด?",
      "options": [
        "5, 20",
        "10, 20",
        "5, 10",
        "20, 5"
      ],
      "answer": 0,
      "explanation": "Push 5, Push 10 (Stack: 5, 10), Pop ได้ 10 ออก (Stack: 5), Push 20 (Stack: 5, 20)"
    },
    {
      "question": "โครงสร้างข้อมูลแบบ Array มีลักษณะสำคัญอย่างไร?",
      "options": [
        "เก็บข้อมูลต่างประเภทกันได้ในโครงสร้างเดียว",
        "เก็บข้อมูลประเภทเดียวกันและมีขนาดคงที่ในหน่วยความจำที่เรียงต่อกัน",
        "เก็บข้อมูลโดยใช้ Pointer ชี้ไปยังตำแหน่งต่างๆ ในหน่วยความจำ",
        "เป็นโครงสร้างแบบ LIFO (Last In First Out)"
      ],
      "answer": 1,
      "explanation": "Array (อะเรย์) เป็นโครงสร้างข้อมูลที่เก็บข้อมูลประเภทเดียวกัน มีขนาดคงที่ และเก็บเรียงต่อกันตามลำดับในหน่วยความจำ"
    },
    {
      "question": "หากต้องการเก็บข้อมูลตารางที่มี 5 แถวและ 4 คอลัมน์ ควรใช้โครงสร้างข้อมูลแบบใด?",
      "options": [
        "1D Array",
        "2D Array",
        "Linked List",
        "Stack"
      ],
      "answer": 1,
      "explanation": "2D Array (อะเรย์ 2-มิติ) เหมาะสำหรับการเก็บข้อมูลในรูปแบบตารางที่มีแถว (row) และคอลัมน์ (column)"
    },
    {
      "question": "การจัดเก็บข้อมูลของ 2D Array แบบ Row-major storage คืออะไร?",
      "options": [
        "การเก็บข้อมูลเรียงตามคอลัมน์จากซ้ายไปขวา",
        "การเก็บข้อมูลเรียงตามแถว โดยนำข้อมูลในแถวแรกมาเก็บให้หมดก่อนแล้วตามด้วยแถวถัดไป",
        "การเก็บข้อมูลโดยสุ่มตำแหน่งในหน่วยความจำ",
        "การเก็บข้อมูลแบบมี Pointer ชี้ไปยังแต่ละแถว"
      ],
      "answer": 1,
      "explanation": "Row-major storage คือการเก็บข้อมูลทีละแถว (row) ลงในหน่วยความจำ โดยเก็บสมาชิกทุกตัวในแถวแรกจนจบ แล้วจึงเริ่มเก็บแถวที่สองต่อไปเรื่อยๆ"
    },
    {
      "question": "ข้อใดกล่าวถึงโครงสร้างข้อมูลแบบ Record (ระเบียน) ได้ถูกต้อง?",
      "options": [
        "เก็บข้อมูลประเภทเดียวกันเท่านั้นคล้ายกับ Array",
        "ข้อมูลแต่ละส่วนย่อยใน Record เรียกว่า Node",
        "สามารถเก็บข้อมูลหลายประเภทที่สัมพันธ์กันไว้ในชื่อเดียวกันได้",
        "ไม่สามารถสร้างตัวแปร Array ของ Record ได้"
      ],
      "answer": 2,
      "explanation": "Record (ระเบียน) เป็นโครงสร้างที่สามารถเก็บข้อมูลต่างประเภทกันได้ (เช่น ตัวเลขและข้อความ) แต่มีความสัมพันธ์กัน (เช่น ข้อมูลของนักเรียน 1 คน) โดยส่วนย่อยเรียกว่า Field"
    },
    {
      "question": "การอ้างอิงถึงฟิลด์ name ในระเบียนชื่อ student1 สามารถเขียนได้อย่างไร?",
      "options": [
        "student1[name]",
        "student1->name",
        "student1.name",
        "name(student1)"
      ],
      "answer": 2,
      "explanation": "การเข้าถึงฟิลด์ในระเบียน จะใช้รูปแบบ ชื่อระเบียน.ชื่อฟิลด์ (เช่น student1.name)"
    },
    {
      "question": "ในโครงสร้าง Linked List สมาชิกแต่ละตัวเรียกว่าอะไร?",
      "options": [
        "Field",
        "Cell",
        "Node",
        "Index"
      ],
      "answer": 2,
      "explanation": "สมาชิกใน Linked List มักจะเรียกว่า โหนด (Node)"
    },
    {
      "question": "แต่ละ Node ใน Singly Linked List ประกอบด้วยอะไรบ้าง?",
      "options": [
        "ข้อมูล (Data) และดัชนี (Index)",
        "ข้อมูล (Data) และตัวเชื่อมโยง (Link/Pointer) ไปยังโหนดถัดไป",
        "ตัวเชื่อมโยง (Link) ไปยังโหนดก่อนหน้าและโหนดถัดไป",
        "ฟิลด์ (Field) และ เรคคอร์ด (Record)"
      ],
      "answer": 1,
      "explanation": "ใน Singly Linked List แต่ละ Node ประกอบด้วย 2 ส่วนคือ ส่วนที่เก็บข้อมูล (Data) และส่วนที่เก็บตัวชี้ (Link/Pointer) ไปยัง Node ถัดไป"
    },
    {
      "question": "Null pointer ใน Linked List มีความหมายว่าอย่างไร?",
      "options": [
        "เป็นตัวชี้ที่ชี้กลับไปยังโหนดแรกสุด",
        "เป็นโหนดที่ข้อมูลภายในมีค่าเป็นศูนย์",
        "เป็นตัวชี้ของโหนดสุดท้ายที่บ่งบอกว่าจบลิสต์แล้ว",
        "เป็นพอยน์เตอร์ที่ทำให้เกิด Error"
      ],
      "answer": 2,
      "explanation": "Null pointer คือตัวชี้ของโหนดสุดท้ายในลิงค์ลิสต์ที่ไม่ได้ชี้ไปที่ใดเลย ใช้เพื่อบ่งบอกจุดสิ้นสุดของลิสต์"
    },
    {
      "question": "ในการเพิ่มโหนด (Inserting a Node) ลงใน Linked List ข้อใดคือขั้นตอนที่สำคัญที่สุดเพื่อไม่ให้สายของลิสต์ขาด?",
      "options": [
        "ต้องลบโหนดก่อนหน้าทิ้งเสียก่อน",
        "กำหนด Link ของโหนดใหม่ให้ชี้ไปยังโหนดถัดไป ก่อนที่จะเปลี่ยน Link ของโหนดก่อนหน้าให้ชี้มาที่โหนดใหม่",
        "กำหนดค่า Null ให้กับโหนดใหม่ทันที",
        "ต้องขยับข้อมูลทุกตัวในลิสต์ไปข้างหลัง 1 ตำแหน่งเสมอ"
      ],
      "answer": 1,
      "explanation": "การเพิ่มโหนดต้องระวังไม่ให้ที่อยู่ (Address) ของโหนดถัดไปสูญหาย จึงต้องให้ Link ของโหนดใหม่ชี้ไปโหนดถัดไปก่อน แล้วจึงแก้ Link ของโหนดก่อนหน้าให้ชี้มาที่โหนดใหม่"
    },
    {
      "question": "ข้อใดอธิบายโครงสร้าง Stack ได้ถูกต้องที่สุด?",
      "options": [
        "เข้าก่อน ออกก่อน (FIFO)",
        "เข้าหลัง ออกก่อน (LIFO)",
        "สามารถเพิ่มและลบข้อมูลจากตรงกลางได้",
        "ข้อมูลจะถูกจัดเรียงจากน้อยไปมากโดยอัตโนมัติ"
      ],
      "answer": 1,
      "explanation": "Stack (สแตก) เป็นโครงสร้างข้อมูลแบบ Last In, First Out (LIFO) คือข้อมูลที่ใส่เข้าไปหลังสุด จะถูกนำออกมาใช้งานก่อน"
    },
    {
      "question": "การเพิ่มข้อมูลลงใน Stack เรียกว่าอะไร?",
      "options": [
        "Pop",
        "Push",
        "Enqueue",
        "Insert"
      ],
      "answer": 1,
      "explanation": "การเพิ่มข้อมูลลงใน Stack เรียกว่าการ Push ส่วนการนำออกเรียกว่า Pop"
    },
    {
      "question": "สถานการณ์ใดก่อให้เกิด Stack Underflow?",
      "options": [
        "การพยายาม Push ข้อมูลลงใน Stack ที่เต็มแล้ว",
        "การพยายาม Pop ข้อมูลออกจาก Stack ที่ว่างเปล่า",
        "การพยายามเข้าถึงข้อมูลตรงกลางของ Stack",
        "การ Push ข้อมูลที่ผิดประเภทลงใน Stack"
      ],
      "answer": 1,
      "explanation": "Stack Underflow เกิดขึ้นเมื่อมีความพยายามจะดึงข้อมูล (Pop) ออกจาก Stack ที่ไม่มีข้อมูลอยู่ (Empty stack)"
    },
    {
      "question": "หากทำการ Push ค่า 10, 20, 30 ลงใน Stack ตามลำดับ จากนั้นทำการ Pop 1 ครั้ง ค่าใดจะถูกนำออกมา?",
      "options": [
        "10",
        "20",
        "30",
        "เกิด Error"
      ],
      "answer": 2,
      "explanation": "เนื่องจาก Stack เป็นแบบ LIFO ค่าที่ถูกใส่ไปล่าสุดคือ 30 (อยู่บนสุด หรือ Top) ดังนั้นการ Pop ครั้งแรกจะได้ค่า 30"
    },
    {
      "question": "ข้อใดอธิบายโครงสร้าง Queue ได้ถูกต้องที่สุด?",
      "options": [
        "เข้าก่อน ออกก่อน (FIFO)",
        "เข้าหลัง ออกก่อน (LIFO)",
        "ข้อมูลเข้าทาง Top และออกทาง Top",
        "ข้อมูลเข้าทาง Front และออกทาง Rear"
      ],
      "answer": 0,
      "explanation": "Queue (คิว) เป็นโครงสร้างข้อมูลแบบ First In, First Out (FIFO) คือข้อมูลที่เข้าคิวก่อน จะได้รับการประมวลผลหรือนำออกก่อน"
    },
    {
      "question": "ใน Queue ข้อมูลใหม่จะถูกเพิ่มเข้าทางตำแหน่งใด?",
      "options": [
        "Top",
        "Front",
        "Rear (Tail)",
        "Middle"
      ],
      "answer": 2,
      "explanation": "ใน Queue การเพิ่มข้อมูล (Enqueue) จะกระทำที่ส่วนท้าย (Rear/Tail) ส่วนการนำข้อมูลออก (Dequeue) จะกระทำที่ส่วนหน้า (Front/Head)"
    },
    {
      "question": "หากทำการ Enqueue ค่า A, B, C ลงใน Queue ตามลำดับ จากนั้นทำการ Dequeue 1 ครั้ง ค่าใดจะถูกนำออกมา?",
      "options": [
        "A",
        "B",
        "C",
        "นำออกพร้อมกันทั้งหมด"
      ],
      "answer": 0,
      "explanation": "Queue เป็นแบบ FIFO ค่า A เข้ามาก่อนสุด (อยู่ตำแหน่ง Front) จึงถูกนำออกมาก่อน"
    },
    {
      "question": "Empty List (ลิสต์ว่าง) ใน Linked List สังเกตได้จากอะไร?",
      "options": [
        "ทุกโหนดมีข้อมูลเป็น 0",
        "Head pointer มีค่าเป็น Null",
        "ไม่มี Link field ใน Node",
        "โหนดแรกและโหนดสุดท้ายชี้เข้าหากัน"
      ],
      "answer": 1,
      "explanation": "ใน Linked List หากลิสต์ว่างเปล่า ตัวชี้ส่วนหัว (Head pointer) จะไม่มีโหนดให้ชี้ จึงมีค่าเป็น Null"
    },
    {
      "question": "แอปพลิเคชันใดต่อไปนี้ เหมาะสมที่จะใช้โครงสร้าง Queue มากที่สุด?",
      "options": [
        "ปุ่ม Undo ในโปรแกรมแก้ไขข้อความ (Text Editor)",
        "ระบบจัดการงานพิมพ์ (Print Spooler) ของเครื่องปริ้นเตอร์",
        "การแปลงนิพจน์คณิตศาสตร์ (Expression Evaluation)",
        "การเรียกใช้ฟังก์ชันย่อยซ้อนกัน (Function Call)"
      ],
      "answer": 1,
      "explanation": "Print Spooler จะนำงานที่ส่งเข้ามาพิมพ์ก่อนไปพิมพ์ก่อนเสมอ ซึ่งตรงกับหลักการ FIFO ของ Queue (ส่วนฟังก์ชันและ Undo ใช้หลักการ Stack)"
    },
    {
      "question": "โครงสร้าง Linked List มีข้อได้เปรียบเหนือ Array ในเรื่องใด?",
      "options": [
        "สามารถเข้าถึงข้อมูลตำแหน่งใดๆ แบบสุ่ม (Random Access) ได้เร็วกว่า",
        "สามารถเพิ่มหรือลบข้อมูลตรงกลางได้ง่ายและรวดเร็วกว่าโดยไม่ต้องขยับข้อมูลอื่น",
        "ประหยัดพื้นที่หน่วยความจำมากกว่าเพราะไม่ต้องใช้ Pointer",
        "ข้อมูลถูกจัดเรียงตามลำดับตัวอักษรโดยอัตโนมัติ"
      ],
      "answer": 1,
      "explanation": "Linked List สามารถเพิ่ม/ลบโหนดได้โดยการเปลี่ยนแค่ตัวชี้ (Pointer) ไม่เหมือน Array ที่ต้องเลื่อน (Shift) ข้อมูลทั้งหมด"
    },
    {
      "question": "การทำ Traversal ใน Linked List หมายถึงอะไร?",
      "options": [
        "การค้นหาโหนดที่มีค่าตรงตามที่ต้องการเพียงตัวเดียว",
        "การเข้าถึงและประมวลผลทุกโหนดในลิสต์ตามลำดับตั้งแต่ต้นจนจบ",
        "การลบโหนดที่อยู่ท้ายสุด",
        "การจัดเรียงโหนดใหม่จากหลังไปหน้า"
      ],
      "answer": 1,
      "explanation": "Traversing a List คือการท่องไปในลิสต์ตั้งแต่โหนดแรกไปจนถึงโหนดสุดท้ายเพื่อประมวลผล เช่น การพิมพ์ค่าหรือการหาผลรวม"
    },
    {
      "question": "หากเรามี Queue ที่ทำงานปกติและประกอบด้วย [Front -> 1, 5, 9 <- Rear] หลังจากทำคำสั่ง Dequeue แล้ว รูปแบบของ Queue จะเป็นอย่างไร?",
      "options": [
        "Front -> 5, 9 <- Rear",
        "Front -> 1, 5 <- Rear",
        "Front -> 9, 5, 1 <- Rear",
        "Front -> 1, 5, 9 <- Rear"
      ],
      "answer": 0,
      "explanation": "คำสั่ง Dequeue จะนำข้อมูลจากด้านหน้าสุด (Front) ออกไป ซึ่งคือ 1 ทำให้ Queue ที่เหลือคือ 5, 9"
    },
    {
      "question": "พิจารณาการทำงานของ Stack ต่อไปนี้:\npush(A)\npush(B)\npop()\npush(C)\nค่าที่อยู่บนสุด (Top) ของ Stack ในปัจจุบันคือค่าใด?",
      "options": [
        "A",
        "B",
        "C",
        "Stack ว่างเปล่า"
      ],
      "answer": 2,
      "explanation": "ลำดับ: ใส่ A -> ใส่ B -> นำ B ออก (เหลือ A) -> ใส่ C ผลลัพธ์คือ C อยู่บนสุด"
    },
    {
      "question": "General List แตกต่างจาก Restricted List (เช่น Stack หรือ Queue) อย่างไร?",
      "options": [
        "General List เก็บได้เฉพาะตัวเลข แต่ Restricted List เก็บตัวอักษรได้",
        "General List สามารถแทรกหรือลบข้อมูล ณ ตำแหน่งใดก็ได้ แต่ Restricted List ทำได้เฉพาะบางตำแหน่ง",
        "General List ไม่ต้องใช้หน่วยความจำ แต่ Restricted List ใช้หน่วยความจำเยอะ",
        "General List ใช้ได้เฉพาะในการคำนวณทางคณิตศาสตร์"
      ],
      "answer": 1,
      "explanation": "General List อนุญาตให้ดำเนินการ (Insert/Delete) ตรงไหนของลิสต์ก็ได้ ต่างจาก Stack (เฉพาะที่ Top) และ Queue (เฉพาะหน้าและหลัง)"
    },
    {
      "question": "ในโค้ด C ที่ใช้ struct กำหนด Record หากมีฟิลด์ 'char name[50];' หมายความว่าอย่างไร?",
      "options": [
        "Record นี้จะเก็บจำนวนเต็มได้ 50 ตัว",
        "ฟิลด์ name สามารถเก็บข้อความ (string) ที่มีความยาวสูงสุดประมาน 50 ตัวอักษร",
        "ฟิลด์ name จะเปลี่ยนชื่อเป็น 50",
        "เป็นโครงสร้างแบบ Linked List ที่มีโหนด 50 โหนด"
      ],
      "answer": 1,
      "explanation": "char name[50]; คืออาร์เรย์ของตัวอักษรที่ใช้เก็บสตริงใน C ความยาว 50 ตัวอักษร"
    },
    {
      "question": "หากคุณลบโหนด (Delete a Node) ใน Singly Linked List แต่ลืมอัปเดต Pointer ของโหนดก่อนหน้าให้ชี้ข้ามโหนดที่ลบ จะเกิดปัญหาใด?",
      "options": [
        "คอมพิวเตอร์จะทำงานเร็วขึ้นอย่างเห็นได้ชัด",
        "โหนดก่อนหน้าจะชี้ไปยังตำแหน่งหน่วยความจำที่ไม่มีข้อมูลที่ถูกต้อง (Dangling pointer หรือลิสต์ขาด)",
        "ข้อมูลทั้งหมดในลิสต์จะกลายเป็นศูนย์",
        "โหนดจะถูกสลับลำดับจากหน้าไปหลัง"
      ],
      "answer": 1,
      "explanation": "การไม่อัปเดต Pointer จะทำให้สายโซ่ของลิสต์ขาดหาย หรือชี้ไปยังพื้นที่หน่วยความจำที่ถูกยกเลิกไปแล้ว"
    },
    {
      "question": "โครงสร้าง Array มีข้อเสียเปรียบสำคัญในเรื่องใดเมื่อเปรียบเทียบกับ Linked List?",
      "options": [
        "เข้าถึงข้อมูลแบบสุ่ม (Random Access) ช้ามาก",
        "ขนาดของ Array ถูกกำหนดตายตัวและปรับเปลี่ยนขนาดระหว่างทำงานได้ยาก",
        "ไม่สามารถใช้โครงสร้าง Repetition (ลูป) ในการประมวลผลได้",
        "กินพื้นที่หน่วยความจำในส่วนของ Pointer อย่างมหาศาล"
      ],
      "answer": 1,
      "explanation": "Array เป็นโครงสร้างแบบ Static มีขนาดคงที่ ไม่สามารถย่อหรือขยายได้ง่ายระหว่างที่โปรแกรมทำงาน (Runtime)"
    },
    {
      "question": "ใน 2D Array แบบ Row-major storage ข้อมูลตำแหน่งใดจะถูกเก็บต่อจากข้อมูลแถวที่ 0 คอลัมน์สุดท้าย?",
      "options": [
        "แถวที่ 0 คอลัมน์แรก",
        "แถวที่ 1 คอลัมน์แรก",
        "แถวสุดท้าย คอลัมน์สุดท้าย",
        "แถวที่ 1 คอลัมน์สุดท้าย"
      ],
      "answer": 1,
      "explanation": "Row-major storage จะเก็บเรียงทีละแถว เมื่อจบแถวแรก (แถวที่ 0 คอลัมน์สุดท้าย) จะขึ้นแถวถัดไปทันที (แถวที่ 1 คอลัมน์แรก)"
    },
    {
      "question": "คำสั่ง enqueue() และ dequeue() ใช้เพื่อทำอะไรกับโครงสร้างข้อมูลแบบใด?",
      "options": [
        "เพิ่มและลบโหนดใน Stack",
        "เพิ่มและลบโหนดใน Queue",
        "เพิ่มและค้นหาข้อมูลใน Array",
        "สร้างและทำลาย Record"
      ],
      "answer": 1,
      "explanation": "enqueue คือการนำข้อมูลเข้าคิว (ต่อท้าย) และ dequeue คือการนำข้อมูลออกจากคิว (ด้านหน้า)"
    },
    {
      "question": "การหาค่าผลรวมของข้อมูลทั้งหมดใน Linked List ต้องใช้การดำเนินการพื้นฐานข้อใด?",
      "options": [
        "Inserting a Node",
        "Deleting a Node",
        "Traversing a List",
        "Sorting a List"
      ],
      "answer": 2,
      "explanation": "การหาผลรวมต้องเข้าถึงทุกโหนดตั้งแต่ต้นจนจบ ซึ่งคือกระบวนการท่องไปในลิสต์ (Traversing)"
    },
    {
      "question": "หากคุณต้องการโครงสร้างข้อมูลสำหรับบันทึกหน้าเว็บที่ผู้ใช้เคยเข้าชม เพื่อให้ผู้ใช้สามารถกดปุ่ม \"Back\" (ย้อนกลับ) ไปยังหน้าที่แล้วได้ตามลำดับ โครงสร้างข้อมูลใดเหมาะสมที่สุด?",
      "options": [
        "Queue",
        "Stack",
        "Record",
        "2D Array"
      ],
      "answer": 1,
      "explanation": "ปุ่ม ย้อนกลับ (Back) ทำงานในลักษณะที่หน้าเว็บที่เข้าชมล่าสุดจะถูกดึงกลับมาก่อน ซึ่งตรงกับหลักการ LIFO ของ Stack"
    }
  ],
  "10-11": [
    {
      "question": "แฟ้มข้อมูล (File) ตามโครงสร้างในคอมพิวเตอร์ เกิดจากการรวมกลุ่มของอะไร?",
      "options": [
        "ระเบียน (Record)",
        "ฟิลด์ (Field)",
        "ไบต์ (Byte)",
        "บิต (Bit)"
      ],
      "answer": 0,
      "explanation": "แฟ้มข้อมูลเกิดจากการรวมกันของหลายๆ ระเบียน (Record)"
    },
    {
      "question": "ข้อมูลดิบที่ยังไม่ผ่านการประมวลผล เรียกว่าอะไร?",
      "options": [
        "Data (ข้อมูล)",
        "Information (สารสนเทศ)",
        "Record (ระเบียน)",
        "File (แฟ้มข้อมูล)"
      ],
      "answer": 0,
      "explanation": "Data คือข้อเท็จจริงหรือข้อมูลดิบที่ยังไม่ผ่านการประมวลผล"
    },
    {
      "question": "ข้อมูลที่ผ่านการประมวลผลและพร้อมนำไปใช้ประโยชน์ เรียกว่าอะไร?",
      "options": [
        "Information (สารสนเทศ)",
        "Data (ข้อมูล)",
        "Field (ฟิลด์)",
        "Entity (เอนทิตี)"
      ],
      "answer": 0,
      "explanation": "Information คือข้อมูลที่ผ่านกระบวนการเพื่อให้สามารถนำไปใช้ประโยชน์ได้"
    },
    {
      "question": "หน่วยจัดเก็บข้อมูลที่เล็กที่สุดในระบบคอมพิวเตอร์คืออะไร?",
      "options": [
        "บิต (Bit)",
        "ไบต์ (Byte)",
        "ฟิลด์ (Field)",
        "ระเบียน (Record)"
      ],
      "answer": 0,
      "explanation": "บิต (Bit) เป็นหน่วยข้อมูลพื้นฐานที่เล็กที่สุด มีค่า 0 หรือ 1"
    },
    {
      "question": "การอ้างอิงและเข้าถึงข้อมูลในแฟ้มข้อมูลโดยทั่วไปแบ่งเป็นกี่แบบหลักๆ?",
      "options": [
        "2 แบบ (Sequential และ Random)",
        "3 แบบ",
        "4 แบบ",
        "5 แบบ"
      ],
      "answer": 0,
      "explanation": "มี 2 แบบหลักคือ การเข้าถึงตามลำดับ (Sequential) และการเข้าถึงแบบสุ่ม (Random)"
    },
    {
      "question": "แฟ้มข้อมูลใดที่การอ่านข้อมูลต้องอ่านเรียงตามลำดับตั้งแต่เรคคอร์ดแรกเสมอ?",
      "options": [
        "Sequential File",
        "Indexed File",
        "Hashed File",
        "Random File"
      ],
      "answer": 0,
      "explanation": "Sequential File จะต้องเข้าถึงแบบเรียงลำดับไปเรื่อยๆ"
    },
    {
      "question": "ในกระบวนการปรับปรุงแฟ้มข้อมูลลำดับ (Updating Sequential Files) แฟ้มข้อมูลที่เก็บรายละเอียดการเปลี่ยนแปลงใหม่ๆ เรียกว่าอะไร?",
      "options": [
        "Transaction File",
        "Old Master File",
        "New Master File",
        "Error Report File"
      ],
      "answer": 0,
      "explanation": "Transaction File เก็บรายละเอียดการเปลี่ยนแปลง (Add, Delete, Update) เพื่อนำไปปรับปรุง Master File"
    },
    {
      "question": "หากใน Transaction File มีคำสั่งลบ (Delete) ข้อมูลที่ไม่มีอยู่ใน Master File จะส่งผลอย่างไร?",
      "options": [
        "ถูกนำไปบันทึกลง Error Report File",
        "ลบข้อมูลทั้งหมดทิ้ง",
        "เพิ่มข้อมูลใหม่เข้าไปแทน",
        "บันทึกซ้ำใน New Master File"
      ],
      "answer": 0,
      "explanation": "หากกระทำคำสั่งผิดพลาด จะรายงานข้อผิดพลาดใน Error Report File"
    },
    {
      "question": "แฟ้มข้อมูลใดที่ใช้โครงสร้างดัชนีเพื่อชี้ไปยังตำแหน่งของข้อมูลจริงในแฟ้มหลัก?",
      "options": [
        "Indexed File",
        "Sequential File",
        "Hashed File",
        "Direct File"
      ],
      "answer": 0,
      "explanation": "Indexed File เป็นแฟ้มข้อมูลแบบสุ่มที่มีแฟ้มดัชนี (Index) ชี้ไปยังข้อมูลหลัก"
    },
    {
      "question": "การทำงานของ Hashed File ต้องใช้สิ่งใดในการแปลงคีย์เพื่อหาตำแหน่งจัดเก็บ?",
      "options": [
        "Hash Function",
        "Sequential Search",
        "Index Table",
        "Pointer"
      ],
      "answer": 0,
      "explanation": "Hashed File ใช้ Hash Function คำนวณคีย์เป็น Address ในการจัดเก็บ"
    },
    {
      "question": "กรณีที่ทำการแฮช (Hash) ด้วยคีย์ 2 คีย์ที่ต่างกัน แต่ได้ผลลัพธ์ตำแหน่ง (Address) เดียวกัน เรียกว่าอะไร?",
      "options": [
        "การชนกัน (Collision)",
        "การแทรก (Insertion)",
        "ดัชนีล้มเหลว (Index Failure)",
        "โอเวอร์โฟลว์ (Overflow)"
      ],
      "answer": 0,
      "explanation": "การชนกัน (Collision) เกิดขึ้นเมื่อสองเรคคอร์ดคำนวณแอดเดรสได้ที่เดียวกัน"
    },
    {
      "question": "เรคคอร์ดที่มีค่าคีย์ต่างกันแต่เมื่อผ่าน Hash Function แล้วได้ตำแหน่งเดียวกัน เรียกว่าอะไร?",
      "options": [
        "Synonym",
        "Homonym",
        "Duplicate",
        "Alias"
      ],
      "answer": 0,
      "explanation": "Synonym เป็นศัพท์ใช้เรียกคีย์ที่สร้างจากฟังก์ชันแฮชแล้วลงตำแหน่งเดียวกัน"
    },
    {
      "question": "วิธี Modulo Division นิยมใช้ตัวหารเป็นเลขแบบใดเพื่อลดการชนกัน?",
      "options": [
        "จำนวนเฉพาะ (Prime number)",
        "เลขคู่ (Even number)",
        "เลขคี่ (Odd number)",
        "จำนวนเต็มบวกใดๆ"
      ],
      "answer": 0,
      "explanation": "มักใช้จำนวนเฉพาะเป็นตัวหาร เพื่อให้เกิดการกระจายที่อยู่ได้ดีและลดการชนกัน"
    },
    {
      "question": "การแก้ปัญหาการชนกัน (Collision Resolution) โดยหาพื้นที่ว่างถัดไปในแฟ้มเพื่อเก็บเรคคอร์ด เรียกว่าวิธีใด?",
      "options": [
        "Open Addressing",
        "Linked list resolution",
        "Bucket hashing",
        "Chaining"
      ],
      "answer": 0,
      "explanation": "Open Addressing เป็นวิธีแก้การชนโดยเลื่อนหาตำแหน่งว่างถัดไป (เช่น Address+1)"
    },
    {
      "question": "การแก้ปัญหาการชนกันโดยใช้ตัวชี้ (Pointer) ชี้ไปยังพื้นที่ล้น (Overflow Area) แยกต่างหาก เรียกว่าวิธีใด?",
      "options": [
        "Linked list resolution",
        "Open Addressing",
        "Bucket hashing",
        "Linear Probing"
      ],
      "answer": 0,
      "explanation": "Linked list resolution ใช้ Pointer ชี้ไปยัง Overflow Area"
    },
    {
      "question": "การแก้ปัญหาการชนกันโดยจัดพื้นที่หนึ่งแอดเดรสให้เป็นบล็อก (Bucket) เพื่อเก็บได้มากกว่า 1 เรคคอร์ด เรียกว่าวิธีใด?",
      "options": [
        "Bucket hashing resolution",
        "Linked list resolution",
        "Open Addressing",
        "Direct addressing"
      ],
      "answer": 0,
      "explanation": "Bucket hashing ทำให้หนึ่ง Address สามารถเก็บได้หลายเรคคอร์ดเหมือนถัง"
    },
    {
      "question": "DBMS ย่อมาจากอะไร?",
      "options": [
        "Database Management System",
        "Data Backup Management System",
        "Data Block Memory System",
        "Database Master System"
      ],
      "answer": 0,
      "explanation": "DBMS คือ ระบบจัดการฐานข้อมูล"
    },
    {
      "question": "องค์ประกอบของระบบจัดการฐานข้อมูล (DBMS) มีกี่ส่วนหลัก?",
      "options": [
        "5 ส่วน",
        "3 ส่วน",
        "4 ส่วน",
        "6 ส่วน"
      ],
      "answer": 0,
      "explanation": "ประกอบด้วย 5 ส่วน: Hardware, Software, Data, Users, Procedures"
    },
    {
      "question": "บุคคลที่มีหน้าที่กำหนดสิทธิ์ ควบคุม และบริหารจัดการฐานข้อมูล คือใคร?",
      "options": [
        "DBA (Database Administrator)",
        "End User",
        "Programmer",
        "System Analyst"
      ],
      "answer": 0,
      "explanation": "DBA เป็นผู้ดูแลบริหารและกำหนดสิทธิ์ผู้ใช้งาน"
    },
    {
      "question": "แบบจำลองฐานข้อมูลใดที่นิยมใช้มากที่สุดในปัจจุบัน โดยเก็บข้อมูลในรูปตาราง?",
      "options": [
        "Relational Database Model",
        "Hierarchical Model",
        "Network Model",
        "Object-Oriented Model"
      ],
      "answer": 0,
      "explanation": "Relational Database Model เป็นแบบจำลองเชิงสัมพันธ์ที่เก็บข้อมูลเป็นตาราง"
    },
    {
      "question": "ในฐานข้อมูลเชิงสัมพันธ์ (Relational Model) ตารางข้อมูล (Table) มีชื่อเรียกทางทฤษฎีว่าอะไร?",
      "options": [
        "Relation",
        "Tuple",
        "Attribute",
        "Entity"
      ],
      "answer": 0,
      "explanation": "ตารางในแบบจำลองเชิงสัมพันธ์ถูกเรียกว่า Relation"
    },
    {
      "question": "ในฐานข้อมูลเชิงสัมพันธ์ แถว (Row) แต่ละแถวในตารางเรียกว่าอะไร?",
      "options": [
        "Tuple",
        "Attribute",
        "Relation",
        "Domain"
      ],
      "answer": 0,
      "explanation": "ข้อมูล 1 รายการหรือ 1 แถวในตารางเรียกว่า Tuple"
    },
    {
      "question": "ในฐานข้อมูลเชิงสัมพันธ์ คอลัมน์ (Column) แต่ละคอลัมน์ในตารางเรียกว่าอะไร?",
      "options": [
        "Attribute",
        "Tuple",
        "Relation",
        "Record"
      ],
      "answer": 0,
      "explanation": "คอลัมน์ใช้เก็บคุณลักษณะ เรียกว่า Attribute"
    },
    {
      "question": "คุณสมบัติที่สำคัญของ Primary Key คือข้อใด?",
      "options": [
        "มีค่าไม่ซ้ำกันและเป็นค่าว่างไม่ได้",
        "สามารถเป็นค่าว่างได้",
        "มีค่าซ้ำกันได้หากอยู่ในตารางเดียวกัน",
        "ต้องเป็นตัวเลขเท่านั้น"
      ],
      "answer": 0,
      "explanation": "Primary Key ต้องมีค่าเป็นเอกลักษณ์ (Unique) และห้ามเป็นค่าว่าง (Not null)"
    },
    {
      "question": "Foreign Key มีหน้าที่หลักเพื่ออะไร?",
      "options": [
        "ใช้เชื่อมโยงความสัมพันธ์ระหว่างตาราง",
        "ป้องกันไม่ให้ใครลบข้อมูล",
        "ใช้กำหนดความปลอดภัยของฐานข้อมูล",
        "ทำหน้าที่แทน Primary Key เมื่อเกิดข้อผิดพลาด"
      ],
      "answer": 0,
      "explanation": "Foreign Key ใช้เป็นคีย์นอกที่ใช้อ้างอิงไปยัง Primary Key ของอีกตารางหนึ่ง"
    },
    {
      "question": "ภาษามาตรฐานที่ใช้จัดการกับฐานข้อมูลเชิงสัมพันธ์ คือภาษาใด?",
      "options": [
        "SQL (Structured Query Language)",
        "C++",
        "Java",
        "Python"
      ],
      "answer": 0,
      "explanation": "SQL เป็นภาษามาตรฐานในการเข้าถึงและจัดการฐานข้อมูลเชิงสัมพันธ์"
    },
    {
      "question": "คำสั่งการดำเนินการเชิงสัมพันธ์ (Relational Operations) ข้อใดที่ใช้ดึงข้อมูลหรือเลือก \"แถว (Row)\" ที่ตรงตามเงื่อนไข?",
      "options": [
        "Select",
        "Project",
        "Join",
        "Union"
      ],
      "answer": 0,
      "explanation": "คำสั่ง Select ใช้กรองดึงข้อมูลระดับแถว (Row)"
    },
    {
      "question": "คำสั่งการดำเนินการเชิงสัมพันธ์ (Relational Operations) ข้อใดที่ใช้เลือกเฉพาะ \"คอลัมน์ (Column)\" ที่ต้องการออกมาแสดง?",
      "options": [
        "Project",
        "Select",
        "Join",
        "Union"
      ],
      "answer": 0,
      "explanation": "คำสั่ง Project ใช้ระบุว่าต้องการดึงเฉพาะคอลัมน์ใดมาแสดง"
    },
    {
      "question": "การนำตารางสองตารางมาเชื่อมต่อกันเพื่อดึงข้อมูลที่สัมพันธ์กัน เรียกว่าปฏิบัติการใด?",
      "options": [
        "Join",
        "Union",
        "Intersection",
        "Difference"
      ],
      "answer": 0,
      "explanation": "การ Join คือการเชื่อมตารางตั้งแต่ 2 ตารางขึ้นไปเข้าด้วยกันผ่านคีย์ที่สัมพันธ์กัน"
    },
    {
      "question": "คำสั่ง Difference ในการดำเนินการกับ Relation มีผลลัพธ์เป็นอย่างไร?",
      "options": [
        "ดึงข้อมูลที่มีอยู่ในตารางแรกแต่ไม่มีในตารางที่สอง",
        "ดึงข้อมูลที่มีอยู่ในทั้งสองตาราง",
        "รวมข้อมูลทั้งหมดของสองตาราง",
        "เชื่อมตารางสองตารางเข้าด้วยกัน"
      ],
      "answer": 0,
      "explanation": "Difference คือการหาผลต่าง นำข้อมูลที่มีในตารางแรกแต่ลบส่วนที่มีในตารางสองออก"
    },
    {
      "question": "ข้อใดเป็นลักษณะเด่นของการจัดเก็บข้อมูลแบบ Sequential File?",
      "options": [
        "การเข้าถึงข้อมูลใดๆ สามารถทำได้โดยตรงผ่านตำแหน่ง Address",
        "ข้อมูลจะถูกอ่านและเขียนตามลำดับตั้งแต่ต้นจนจบ",
        "สามารถค้นหาข้อมูลที่อยู่ตรงกลางไฟล์ได้เร็วกว่าแบบอื่น",
        "ใช้ฟังก์ชัน Hash ในการหาตำแหน่งข้อมูล"
      ],
      "answer": 1,
      "explanation": "Sequential File เป็นไฟล์ที่ต้องอ่านและเขียนข้อมูลไปตามลำดับ (Sequential) จากจุดเริ่มต้นไปเรื่อยๆ จนถึง EOF (End of File)"
    },
    {
      "question": "คำสั่ง Seek() ใน Random Access File มีหน้าที่อะไร?",
      "options": [
        "ลบข้อมูลในไฟล์ทิ้งทั้งหมด",
        "ตรวจสอบว่าถึงจุดสิ้นสุดของไฟล์หรือยัง (EOF)",
        "ข้ามไปยังตำแหน่ง Byte Offset หรือเรคคอร์ดที่ต้องการได้โดยตรง",
        "เรียงลำดับข้อมูลในไฟล์จากน้อยไปมาก"
      ],
      "answer": 2,
      "explanation": "ฟังก์ชัน Seek() ใช้สำหรับเลื่อนตัวชี้ตำแหน่ง (Pointer) ไปยังตำแหน่งไบต์หรือเรคคอร์ดที่ต้องการใน Random Access File เพื่ออ่านหรือเขียนทันที"
    },
    {
      "question": "ในกระบวนการ Updating Sequential Files หาก Transaction File ส่งรหัส 'A' (Add) แต่พบว่ามีรหัสนั้นใน Old Master File แล้ว จะเกิดอะไรขึ้น?",
      "options": [
        "ข้อมูลจะถูกบันทึกทับ (Overwrite) ทันที",
        "ระบบจะสร้างไฟล์ใหม่เพื่อเก็บข้อมูลส่วนเกิน",
        "เกิดข้อผิดพลาด (Duplicate key) และมักจะบันทึกลงใน Error Report File",
        "ระบบจะลบข้อมูลนั้นใน Old Master File อัตโนมัติ"
      ],
      "answer": 2,
      "explanation": "การเพิ่มข้อมูล (Add) ที่มี Key ซ้ำกับใน Master File ถือเป็น Error (Duplicate key) และจะต้องถูกส่งไปแจ้งเตือนใน Error Report File"
    },
    {
      "question": "กระบวนการปรับปรุงแฟ้มข้อมูล (File Updating) มักจะต้องใช้ไฟล์ใดเป็นหลักเพื่อให้ได้ New Master File?",
      "options": [
        "Old Master File และ Transaction File",
        "Transaction File และ Error Report File",
        "Error Report File และ Old Master File",
        "Sequential File และ Random Access File"
      ],
      "answer": 0,
      "explanation": "กระบวนการ Update จะอ่านข้อมูลจาก Old Master File และ Transaction File มาเทียบเคียงกันเพื่อสร้าง New Master File"
    },
    {
      "question": "Direct Hashing คือการใช้ฟังก์ชันแฮชในลักษณะใด?",
      "options": [
        "ใช้ Key หารด้วยจำนวนเฉพาะเพื่อหาที่อยู่",
        "ใช้ Key นั้นๆ เป็นที่อยู่ (Address) สำหรับเก็บข้อมูลโดยตรง",
        "ใช้การบวกเลขทุกหลักของ Key เข้าด้วยกัน",
        "ใช้ตารางจับคู่ค่าคีย์โดยสุ่ม"
      ],
      "answer": 1,
      "explanation": "Direct Hashing คือรูปแบบพื้นฐานที่สุดที่นำค่าคีย์ (Key) มาใช้เป็นที่อยู่ (Address) ในหน่วยความจำหรือในไฟล์โดยตรง"
    },
    {
      "question": "การหาค่า Hash ด้วยวิธี Modulo Arithmetic นิยมใช้ตัวหารเป็นจำนวนแบบใดเพื่อลดการชน (Collision)?",
      "options": [
        "จำนวนคู่",
        "จำนวนคี่",
        "จำนวนเฉพาะ (Prime number)",
        "จำนวนเต็มลบ"
      ],
      "answer": 2,
      "explanation": "การใช้จำนวนเฉพาะ (Prime number) ในการหารเอาเศษ (Modulo) จะช่วยกระจายข้อมูลได้ดีขึ้นและลดโอกาสการเกิด Collision"
    },
    {
      "question": "ถ้าใช้ฟังก์ชัน Hash แบบ H(k) = (k % 11) + 1 หากคีย์คือ 156734 ค่า Address จะเป็นเท่าใด?",
      "options": [
        "7",
        "6",
        "8",
        "9"
      ],
      "answer": 0,
      "explanation": "156734 หารด้วย 11 ได้ 14248 เศษ 6 ดังนั้น (6) + 1 = 7"
    },
    {
      "question": "หากใช้ H(k) = (k % 11) + 1 กับคีย์ 123453 ได้ที่อยู่ 1 และเมื่อนำคีย์ 423458 มาแฮชก็ได้ที่อยู่ 3 หากนำ 114237 มาแฮชก็ได้ที่อยู่ 3 ปรากฏการณ์นี้เรียกว่าอะไร?",
      "options": [
        "Data Corruption",
        "Underflow",
        "Overflow",
        "Collision"
      ],
      "answer": 3,
      "explanation": "เมื่อข้อมูลตั้งแต่ 2 ตัวขึ้นไป (เช่น 423458 และ 114237) ผ่าน Hash Function แล้วได้ค่าตำแหน่ง (Address) เดียวกัน จะเรียกว่าการชนกัน (Collision)"
    },
    {
      "question": "Open Addressing มีวิธีการจัดการกับปัญหา Collision อย่างไร?",
      "options": [
        "ลบข้อมูลตัวเก่าทิ้งเพื่อเก็บข้อมูลใหม่",
        "หาที่อยู่ถัดไปที่ยังว่างอยู่ (เช่น Address + 1) แล้วนำข้อมูลไปเก็บ",
        "สร้างโครงสร้าง Linked List ต่อท้ายตำแหน่งเดิม",
        "ขยายขนาดตารางให้ใหญ่ขึ้นเป็น 2 เท่าทันที"
      ],
      "answer": 1,
      "explanation": "Open Addressing จัดการ Collision โดยการเลื่อนหาตำแหน่งช่องว่างถัดไป (เช่น +1) ที่ยังว่างอยู่เพื่อใส่ข้อมูล (Linear Probing)"
    },
    {
      "question": "การแก้ปัญหา Collision ด้วยโครงสร้างแบบ Linked List (Chaining) มีลักษณะอย่างไร?",
      "options": [
        "หาที่ว่างถัดไปในตารางแบบเส้นตรง",
        "แบ่งช่อง Address ให้มีขนาดใหญ่พอที่จะรับข้อมูลหลายตัว",
        "สร้างตัวชี้เชื่อมโยงข้อมูลที่ชนกันให้ต่อกันเป็นสายโซ่ในตำแหน่งเดิม",
        "ใช้ Hash Function ตัวที่สอง (Double Hashing)"
      ],
      "answer": 2,
      "explanation": "Chaining คือการใช้ Linked List สร้างโหนดต่อท้ายกันไปเรื่อยๆ สำหรับคีย์ที่ถูก Hash มาตกใน Address เดียวกัน"
    },
    {
      "question": "Bucket Hashing จัดการกับปัญหา Collision อย่างไร?",
      "options": [
        "หาที่ว่างถัดไปในตารางทีละ 1 ตำแหน่ง",
        "1 Address ถูกออกแบบให้เป็น Bucket ที่สามารถเก็บเรคคอร์ดได้มากกว่า 1 เรคคอร์ด",
        "เก็บเฉพาะข้อมูลที่มีค่าน้อยกว่าลงในตาราง",
        "ใช้ Linked List ชี้ข้อมูลออกไปนอกตาราง"
      ],
      "answer": 1,
      "explanation": "Bucket Hashing แบ่งพื้นที่ในหนึ่ง Address ให้เป็นถัง (Bucket) ซึ่ง 1 ถังมีช่องว่างให้ใส่ข้อมูลได้หลายเรคคอร์ดเพื่อรองรับการชนกันในระดับหนึ่ง"
    },
    {
      "question": "การทำ Extract Digit ใน Hash Function มีกระบวนการอย่างไร?",
      "options": [
        "ดึงเฉพาะบางหลักของ Key มาประกอบกันเป็น Address",
        "หาผลรวมของเลขทุกหลัก",
        "หารค่า Key ด้วยจำนวนหลัก",
        "นำเลขแต่ละหลักมายกกำลังสอง"
      ],
      "answer": 0,
      "explanation": "Extract Digit คือการสกัดเอาเฉพาะบางตำแหน่งหรือบางหลักของคีย์ (เช่น ดึงหลักที่ 1, 3, และ 4) มาเรียงต่อกันเป็นค่า Address"
    },
    {
      "question": "หากต้องการประมวลผลข้อมูลเงินเดือนพนักงานประจำเดือน โครงสร้างแฟ้มข้อมูลแบบใดเหมาะสมและมีประสิทธิภาพที่สุด?",
      "options": [
        "Random Access File",
        "Sequential File",
        "Indexed File",
        "Direct Hash File"
      ],
      "answer": 1,
      "explanation": "การคำนวณเงินเดือนต้องอ่านข้อมูลพนักงานทุกคนตามลำดับจนหมด (Batch Processing) การใช้ Sequential File และนำมา Update จึงมีประสิทธิภาพมากที่สุด"
    },
    {
      "question": "ข้อใดไม่ใช่รหัสการกระทำ (Action Code) ทั่วไปใน Transaction File สำหรับการ Update Sequential File?",
      "options": [
        "A (Add)",
        "D (Delete)",
        "C (Change/Modify)",
        "S (Seek)"
      ],
      "answer": 3,
      "explanation": "S (Seek) เป็นฟังก์ชันใน Random Access File ไม่ใช่รหัส Action Code ใน Transaction File ซึ่งโดยทั่วไปจะมี A (เพิ่ม), D (ลบ) หรือ C (แก้ไข)"
    },
    {
      "question": "ในการทำ Sequential File Update ทั้ง Old Master File และ Transaction File จะต้องมีลักษณะใดเหมือนกัน?",
      "options": [
        "มีจำนวนเรคคอร์ดเท่ากัน",
        "ต้องถูกเข้ารหัสด้วย Hash Function เดียวกัน",
        "ต้องถูกเรียงลำดับ (Sorted) ตามคีย์ (Key) เดียวกัน",
        "ต้องเป็นไฟล์ประเภท Binary File เท่านั้น"
      ],
      "answer": 2,
      "explanation": "เพื่อให้การเปรียบเทียบและการ Update สมบูรณ์และรวดเร็วแบบ Sequential ไฟล์ทั้งสองจะต้องถูกเรียงลำดับตาม Primary Key เดียวกัน"
    },
    {
      "question": "Indexed File ทำงานคล้ายคลึงกับสิ่งใดในชีวิตประจำวันมากที่สุด?",
      "options": [
        "การต่อคิวซื้อตั๋วรถหนัง",
        "สารบัญของหนังสือที่บอกหมายเลขหน้า",
        "การอ่านหนังสือนิยายจากหน้าแรกถึงหน้าสุดท้าย",
        "การจัดหนังสือซ้อนกันเป็นตั้งๆ"
      ],
      "answer": 1,
      "explanation": "Indexed File มีตารางดัชนี (Index) ที่จับคู่ระหว่าง Key กับ Address (ตำแหน่งที่เก็บข้อมูล) คล้ายกับสารบัญหนังสือที่ชี้ไปยังหน้าต่างๆ ทำให้ค้นหาได้รวดเร็ว"
    },
    {
      "question": "ถ้าฟังก์ชัน Hash คือ H(k) = k mod 7 ข้อมูลใดที่จะเกิด Collision กับคีย์ 10?",
      "options": [
        "14",
        "17",
        "20",
        "24"
      ],
      "answer": 1,
      "explanation": "10 mod 7 = 3 ดังนั้นต้องหาคำตอบที่ mod 7 แล้วได้ 3 ซึ่งก็คือ 17 (17 = 7*2 + 3)"
    },
    {
      "question": "ในกระบวนการ Update Master File หาก Transaction code เป็น 'D' (Delete) แต่หา Key นั้นไม่พบใน Old Master File จะเกิดอะไรขึ้น?",
      "options": [
        "ระบบจะข้ามเรคคอร์ดนั้นไปเฉยๆ",
        "โปรแกรมจะหยุดทำงานทันที (Crash)",
        "จะเกิด Error 'Record not found' และบันทึกใน Error Report File",
        "ระบบจะสร้างเรคคอร์ดนั้นขึ้นมาใหม่"
      ],
      "answer": 2,
      "explanation": "การขอลบข้อมูลที่ไม่มีอยู่จริง ถือเป็นความผิดพลาด (Error) โปรแกรมจะส่งรายการนี้ไปลงใน Error Report File เพื่อตรวจสอบต่อไป"
    },
    {
      "question": "โครงสร้างแฟ้มแบบ Random Access มีข้อดีหลักเหนือ Sequential Access อย่างไร?",
      "options": [
        "ประหยัดพื้นที่จัดเก็บข้อมูลได้ดีกว่า",
        "อ่านข้อมูลตามลำดับได้รวดเร็วกว่า",
        "สามารถเข้าถึงและแก้ไขเรคคอร์ดใดๆ ได้ทันทีโดยไม่ต้องอ่านข้อมูลก่อนหน้าทั้งหมด",
        "ข้อมูลถูกบีบอัดอัตโนมัติแบบ Real-time"
      ],
      "answer": 2,
      "explanation": "Random Access ทำให้เข้าถึงข้อมูล (Seek) เพื่ออ่านหรือเขียน ณ ตำแหน่งใดๆ ก็ได้ทันที ทำให้เหมาะกับงานที่ต้องการค้นหา/แก้ไขแบบกระจัดกระจาย (Interactive)"
    },
    {
      "question": "ข้อใดอธิบายตรรกะ EOF (End of File) ได้ถูกต้อง?",
      "options": [
        "ใช้เช็คว่าฮาร์ดดิสก์เต็มหรือยัง",
        "ใช้เช็คว่าอ่านข้อมูลในไฟล์จนถึงจุดสิ้นสุดแล้วหรือยัง",
        "ใช้ค้นหาตำแหน่งของไฟล์ในโฟลเดอร์",
        "ใช้ปิดการเชื่อมต่ออินเทอร์เน็ต"
      ],
      "answer": 1,
      "explanation": "EOF เป็นแฟล็กหรือฟังก์ชันที่ใช้ตรวจสอบว่าการอ่านไฟล์ไปถึงตำแหน่งสุดท้ายและไม่มีข้อมูลให้อ่านต่อแล้วหรือยัง"
    },
    {
      "question": "ความแตกต่างระหว่าง Sequential File และ Indexed Sequential File คืออะไร?",
      "options": [
        "Indexed Sequential File ไม่สามารถอ่านข้อมูลตามลำดับได้",
        "Indexed Sequential File มีตารางดัชนีชี้ตำแหน่งเพิ่มเติม เพื่อให้สืบค้นเฉพาะเจาะจงได้รวดเร็วขึ้น",
        "Sequential File เก็บข้อมูลใน RAM ส่วน Indexed เก็บใน Hard disk",
        "Indexed Sequential File ต้องใช้ Hash Function เสมอ"
      ],
      "answer": 1,
      "explanation": "Indexed Sequential สามารถทำงานแบบลำดับได้เหมือน Sequential ปกติ แต่มีตารางดัชนี (Index) เสริม ทำให้ค้นหาแบบเจาะจงตำแหน่ง (Random/Direct access) ทำได้รวดเร็วขึ้น"
    },
    {
      "question": "พิจารณาการเก็บไฟล์ข้อมูลสมุดโทรศัพท์ ถ้าผู้ใช้มักจะค้นหาเบอร์โทรจาก 'ชื่อ' โครงสร้างใดจะช่วยให้ค้นหาได้เร็วที่สุดโดยไม่ต้องสร้างตารางขนาดใหญ่จนเกินไป?",
      "options": [
        "Sequential File ปกติ",
        "Hash File พร้อมฟังก์ชัน Hash จากชื่อ",
        "Random Access File แบบเรียงตามเบอร์โทร",
        "เก็บแบบ Stack"
      ],
      "answer": 1,
      "explanation": "Hash File ที่ใช้ชื่อเป็นคีย์สามารถคำนวณตำแหน่งและเข้าถึงข้อมูลได้ในเวลาใกล้เคียง O(1) ซึ่งรวดเร็วที่สุดสำหรับการค้นหาด้วยคีย์เฉพาะเจาะจง"
    },
    {
      "question": "เหตุใดการทำ Direct Hashing (ใช้คีย์เป็น Address ตรงๆ) จึงไม่ค่อยเป็นที่นิยมสำหรับคีย์ที่มีขนาดใหญ่ (เช่น เลขบัตรประชาชน)?",
      "options": [
        "คอมพิวเตอร์ไม่สามารถประมวลผลเลขหลายหลักได้",
        "ทำให้เกิด Collision มากเกินไป",
        "เปลืองพื้นที่หน่วยความจำมหาศาล เพราะต้องสร้างตารางรองรับค่าคีย์ที่ใหญ่ที่สุดแม้ข้อมูลจะน้อย",
        "ความเร็วในการประมวลผลจะช้าลงตามขนาดของคีย์"
      ],
      "answer": 2,
      "explanation": "Direct Hashing ใช้คีย์เป็น Index หากคีย์มีขนาดใหญ่มาก เช่น เลข 13 หลัก จะต้องเตรียมอาร์เรย์หรือพื้นที่ขนาดมหาศาล (หลายล้านล้านช่อง) ซึ่งสิ้นเปลืองพื้นที่อย่างมาก"
    },
    {
      "question": "คำว่า 'Probing' เกี่ยวข้องกับเรื่องใดใน Hashing?",
      "options": [
        "การคำนวณหาค่า Modulo",
        "การหาวิธีแปลงตัวอักษรเป็นตัวเลข",
        "การค้นหาช่องว่างใหม่ในตารางเพื่อเก็บข้อมูลเมื่อเกิด Collision แบบ Open Addressing",
        "การสร้าง Bucket ขนาดใหญ่ๆ"
      ],
      "answer": 2,
      "explanation": "Probing (เช่น Linear Probing, Quadratic Probing) เป็นกระบวนการที่เกิดขึ้นเมื่อพบว่าที่อยู่เป้าหมายถูกจองแล้ว (เกิด Collision) จึงต้องทำการ 'สำรวจ' (Probe) หาที่อยู่ถัดไปที่ว่างอยู่"
    },
    {
      "question": "ถ้าตาราง Hash มีขนาด N วิธีใดต่อไปนี้สามารถรับประกันได้ว่าจะสามารถเข้าถึงข้อมูลทุกตัวและหาที่ว่างได้เสมอ (หากตารางยังไม่เต็ม)?",
      "options": [
        "Linear Probing",
        "Chaining (Linked List)",
        "Bucket Hashing ที่มี Bucket ขนาด 1",
        "Direct Hashing เท่านั้น"
      ],
      "answer": 1,
      "explanation": "Chaining จะสร้างโหนดต่อท้ายกันไปเรื่อยๆ นอกตารางแบบ Linked List ดังนั้นจะไม่เกิดปัญหาตารางเต็มหรือหาที่ว่างไม่ได้ ตราบใดที่ยังมีหน่วยความจำเหลือในระบบ"
    },
    {
      "question": "กระบวนการ Merge ไฟล์สองไฟล์ที่เรียงลำดับมาแล้วเข้าด้วยกัน เป็นหลักการเดียวกับกระบวนการใด?",
      "options": [
        "การหาตำแหน่ง Hash",
        "การทำงานของ Indexed File",
        "การ Update Sequential File ระหว่าง Old Master และ Transaction",
        "การหาข้อมูลใน Random Access File"
      ],
      "answer": 2,
      "explanation": "การ Update Sequential File อาศัยกระบวนการแบบ Merging คืออ่านข้อมูลจาก Old Master และ Transaction ทีละเรคคอร์ดมาเปรียบเทียบกันและเขียนเป็น New Master"
    },
    {
      "question": "ข้อใดเป็นข้อเสียที่สำคัญที่สุดของ Sequential File?",
      "options": [
        "ไม่สามารถเปิดไฟล์เพื่ออ่านข้อมูลได้",
        "โครงสร้างซับซ้อนเกินไป",
        "หากต้องการค้นหาหรือแก้ไขข้อมูลตัวสุดท้าย จะต้องอ่านข้อมูลทุกตัวตั้งแต่ต้นไฟล์",
        "ขนาดไฟล์มีขนาดใหญ่กว่าความเป็นจริง"
      ],
      "answer": 2,
      "explanation": "ข้อเสียหลักของ Sequential File คือไม่มีการเข้าถึงข้อมูลโดยตรง (No Direct Access) การจะค้นหาเรคคอร์ดที่ N จะต้องอ่านผ่าน 1 ถึง N-1 ก่อนเสมอ"
    },
    {
      "question": "สมมติว่า Master File มีเรคคอร์ดคีย์ 10, 20, 30 และ Transaction File ส่งคำสั่ง C (Change) มาที่คีย์ 15 ระบบจะประมวลผลอย่างไร?",
      "options": [
        "แทรกข้อมูล 15 ลงไปใหม่ทันที",
        "แก้ไขข้อมูลของ 10",
        "ระบบจะสร้าง Error 'Record Not Found' เพราะไม่มีคีย์ 15 ให้แก้ไข",
        "ลบคีย์ 20 ทิ้งเพื่อสร้างพื้นที่ให้ 15"
      ],
      "answer": 2,
      "explanation": "เมื่อมีคำสั่ง Change แต่ไม่มีคีย์ใน Old Master File จะถือเป็น Error 'Record Not Found' และถูกเขียนลง Error Report File"
    },
    {
      "question": "Bucket Overflow หมายถึงอะไร?",
      "options": [
        "มีข้อมูลใน Bucket น้อยเกินไป",
        "เมื่อเกิด Collision มากจนกระทั่งที่ว่างใน Bucket ที่เตรียมไว้ไม่เพียงพอต่อการจัดเก็บ",
        "ระบบไม่สามารถหา Hash Function ได้",
        "การอ่านข้อมูลเกินกว่าความยาวของไฟล์"
      ],
      "answer": 1,
      "explanation": "Bucket Hashing อนุญาตให้เก็บข้อมูลหลายตัวใน Address เดียวกันได้ แต่หากเกิด Collision บ่อยมากจนถัง (Bucket) นั้นเต็ม จะก่อให้เกิดสภาวะ Bucket Overflow"
    },
    {
      "question": "โครงสร้างไฟล์แบบใดที่เหมาะกับ 'ระบบจองตั๋วเครื่องบิน' แบบ Real-time มากที่สุด?",
      "options": [
        "Sequential File แบบเทปแม่เหล็ก",
        "Random Access File ร่วมกับระบบ Indexed หรือ Hash",
        "Batch Processing File",
        "Error Report File"
      ],
      "answer": 1,
      "explanation": "ระบบจองตั๋วแบบ Real-time มีการสืบค้นและปรับปรุงข้อมูลแบบกระจัดกระจายและรวดเร็วตลอดเวลา ดังนั้นจึงจำเป็นต้องใช้ Random Access File หรือ Indexed/Hash File"
    }
  ]
};
