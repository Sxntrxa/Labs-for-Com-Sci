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
      "question": "von Neumann architecture ประกอบด้วยอะไรเป็นหลัก (คำถามที่ 1)",
      "options": [
        "Memory, CPU (ALU, Control)",
        "Harddisk, SSD",
        "Monitor, Keyboard",
        "OS, Application"
      ],
      "answer": 0,
      "explanation": "von Neumann มี Memory และ CPU ที่ประกอบด้วย ALU และ Control unit"
    },
    {
      "question": "คำสั่งใดต่อไปนี้เป็นลักษณะของ Imperative Programming (คำถามที่ 2)",
      "options": [
        "ระบุลำดับขั้นตอนชัดเจน",
        "ใช้กฎทางตรรกะ",
        "ไม่มีการเปลี่ยนค่าตัวแปร",
        "เน้นการเรียกซ้ำ (recursive)"
      ],
      "answer": 0,
      "explanation": "Imperative programming เป็นการสั่งงานแบบระบุขั้นตอน (how) และใช้ mutable variables"
    },
    {
      "question": "Prolog จัดอยู่ใน Programming Paradigm แบบใด (คำถามที่ 3)",
      "options": [
        "Logic",
        "Imperative",
        "Functional",
        "Object-Oriented"
      ],
      "answer": 0,
      "explanation": "Prolog เป็นภาษาแบบ Logic Programming"
    },
    {
      "question": "ขั้นตอนใดในกระบวนการแปลภาษา (Compilation) ทำหน้าที่แปลงตัวอักษรเป็น lexical units (คำถามที่ 4)",
      "options": [
        "Lexical analysis",
        "Syntax analysis",
        "Semantic analysis",
        "Code generation"
      ],
      "answer": 0,
      "explanation": "Lexical analysis หรือ Scanner ทำหน้าที่นี้"
    },
    {
      "question": "ข้อใดคือข้อดีของ Interpreter เมื่อเทียบกับ Compiler (คำถามที่ 5)",
      "options": [
        "แสดงข้อผิดพลาด (Run-time error) ได้ทันทีและพัฒนาโปรแกรมได้ง่าย",
        "ทำงานได้เร็วกว่า 10 ถึง 100 เท่า",
        "ใช้พื้นที่หน่วยความจำน้อยกว่ามาก",
        "ไม่ต้องใช้ซอร์สโค้ดในการทำงาน"
      ],
      "answer": 0,
      "explanation": "Interpreter มักจะแสดงข้อผิดพลาดระหว่างรันได้ทันทีและง่ายต่อการพัฒนาโปรแกรม"
    },
    {
      "question": "Hybrid Implementation Systems หมายถึงอะไร (คำถามที่ 6)",
      "options": [
        "แปลซอร์สโค้ดเป็น Intermediate language (เช่น Bytecode) ก่อนนำไปแปลด้วย Interpreter",
        "ใช้ทั้ง Windows และ Linux พร้อมกัน",
        "รันโปรแกรมบน CPU หลายตัวพร้อมกัน",
        "การแปลเป็นภาษาเครื่องโดยตรง"
      ],
      "answer": 0,
      "explanation": "Hybrid implementation เป็นการนำข้อดีของ compiler และ interpreter มาผสมกัน เช่น Java แปลเป็น Bytecode แล้วรันบน JVM"
    },
    {
      "question": "ตัวอย่างใดคือ Syntax error (คำถามที่ 7)",
      "options": [
        "เขียน x = x + u; โดยที่ u ยังไม่นิยาม",
        "พิมพ์ กิน ข้าว คน แทนที่จะเป็น คน กิน ข้าว",
        "หารด้วยศูนย์",
        "ลืมปิดไฟล์"
      ],
      "answer": 1,
      "explanation": "Syntax error คือการเขียนผิดไวยากรณ์ของภาษา เช่น กิน ข้าว คน"
    },
    {
      "question": "Semantics ในภาษาโปรแกรมหมายถึงอะไร (คำถามที่ 8)",
      "options": [
        "ความหมายของการทำงานของชุดคำสั่ง",
        "โครงสร้างไวยากรณ์",
        "การแปลภาษา",
        "ความเร็วในการประมวลผล"
      ],
      "answer": 0,
      "explanation": "Semantics คือความหมายหรือการทำงานที่ถูกต้องของโปรแกรม"
    },
    {
      "question": "ภาษาใดถูกออกแบบมาเพื่องานด้านปัญญาประดิษฐ์ (AI) และใช้สถาปัตยกรรมแบบ Functional (คำถามที่ 9)",
      "options": [
        "LISP",
        "FORTRAN",
        "COBOL",
        "C"
      ],
      "answer": 0,
      "explanation": "LISP เป็นภาษา Functional รุ่นแรกๆ นิยมใช้ในงาน AI"
    },
    {
      "question": "ลักษณะเด่นของ Object-Oriented Paradigm คือข้อใด (คำถามที่ 10)",
      "options": [
        "นำ Data และ Behavior มารวมกันเป็น Object",
        "ไม่มีตัวแปรที่เปลี่ยนค่าได้ (Immutable)",
        "ใช้การพิสูจน์ทางคณิตศาสตร์",
        "เน้นไปที่การประกาศผลลัพธ์ (Declarative)"
      ],
      "answer": 0,
      "explanation": "OOP เน้นการสร้าง Object ที่ประกอบด้วยข้อมูลและพฤติกรรม"
    },
    {
      "question": "von Neumann architecture ประกอบด้วยอะไรเป็นหลัก (คำถามที่ 11)",
      "options": [
        "Memory, CPU (ALU, Control)",
        "Harddisk, SSD",
        "Monitor, Keyboard",
        "OS, Application"
      ],
      "answer": 0,
      "explanation": "von Neumann มี Memory และ CPU ที่ประกอบด้วย ALU และ Control unit"
    },
    {
      "question": "คำสั่งใดต่อไปนี้เป็นลักษณะของ Imperative Programming (คำถามที่ 12)",
      "options": [
        "ระบุลำดับขั้นตอนชัดเจน",
        "ใช้กฎทางตรรกะ",
        "ไม่มีการเปลี่ยนค่าตัวแปร",
        "เน้นการเรียกซ้ำ (recursive)"
      ],
      "answer": 0,
      "explanation": "Imperative programming เป็นการสั่งงานแบบระบุขั้นตอน (how) และใช้ mutable variables"
    },
    {
      "question": "Prolog จัดอยู่ใน Programming Paradigm แบบใด (คำถามที่ 13)",
      "options": [
        "Logic",
        "Imperative",
        "Functional",
        "Object-Oriented"
      ],
      "answer": 0,
      "explanation": "Prolog เป็นภาษาแบบ Logic Programming"
    },
    {
      "question": "ขั้นตอนใดในกระบวนการแปลภาษา (Compilation) ทำหน้าที่แปลงตัวอักษรเป็น lexical units (คำถามที่ 14)",
      "options": [
        "Lexical analysis",
        "Syntax analysis",
        "Semantic analysis",
        "Code generation"
      ],
      "answer": 0,
      "explanation": "Lexical analysis หรือ Scanner ทำหน้าที่นี้"
    },
    {
      "question": "ข้อใดคือข้อดีของ Interpreter เมื่อเทียบกับ Compiler (คำถามที่ 15)",
      "options": [
        "แสดงข้อผิดพลาด (Run-time error) ได้ทันทีและพัฒนาโปรแกรมได้ง่าย",
        "ทำงานได้เร็วกว่า 10 ถึง 100 เท่า",
        "ใช้พื้นที่หน่วยความจำน้อยกว่ามาก",
        "ไม่ต้องใช้ซอร์สโค้ดในการทำงาน"
      ],
      "answer": 0,
      "explanation": "Interpreter มักจะแสดงข้อผิดพลาดระหว่างรันได้ทันทีและง่ายต่อการพัฒนาโปรแกรม"
    },
    {
      "question": "Hybrid Implementation Systems หมายถึงอะไร (คำถามที่ 16)",
      "options": [
        "แปลซอร์สโค้ดเป็น Intermediate language (เช่น Bytecode) ก่อนนำไปแปลด้วย Interpreter",
        "ใช้ทั้ง Windows และ Linux พร้อมกัน",
        "รันโปรแกรมบน CPU หลายตัวพร้อมกัน",
        "การแปลเป็นภาษาเครื่องโดยตรง"
      ],
      "answer": 0,
      "explanation": "Hybrid implementation เป็นการนำข้อดีของ compiler และ interpreter มาผสมกัน เช่น Java แปลเป็น Bytecode แล้วรันบน JVM"
    },
    {
      "question": "ตัวอย่างใดคือ Syntax error (คำถามที่ 17)",
      "options": [
        "เขียน x = x + u; โดยที่ u ยังไม่นิยาม",
        "พิมพ์ กิน ข้าว คน แทนที่จะเป็น คน กิน ข้าว",
        "หารด้วยศูนย์",
        "ลืมปิดไฟล์"
      ],
      "answer": 1,
      "explanation": "Syntax error คือการเขียนผิดไวยากรณ์ของภาษา เช่น กิน ข้าว คน"
    },
    {
      "question": "Semantics ในภาษาโปรแกรมหมายถึงอะไร (คำถามที่ 18)",
      "options": [
        "ความหมายของการทำงานของชุดคำสั่ง",
        "โครงสร้างไวยากรณ์",
        "การแปลภาษา",
        "ความเร็วในการประมวลผล"
      ],
      "answer": 0,
      "explanation": "Semantics คือความหมายหรือการทำงานที่ถูกต้องของโปรแกรม"
    },
    {
      "question": "ภาษาใดถูกออกแบบมาเพื่องานด้านปัญญาประดิษฐ์ (AI) และใช้สถาปัตยกรรมแบบ Functional (คำถามที่ 19)",
      "options": [
        "LISP",
        "FORTRAN",
        "COBOL",
        "C"
      ],
      "answer": 0,
      "explanation": "LISP เป็นภาษา Functional รุ่นแรกๆ นิยมใช้ในงาน AI"
    },
    {
      "question": "ลักษณะเด่นของ Object-Oriented Paradigm คือข้อใด (คำถามที่ 20)",
      "options": [
        "นำ Data และ Behavior มารวมกันเป็น Object",
        "ไม่มีตัวแปรที่เปลี่ยนค่าได้ (Immutable)",
        "ใช้การพิสูจน์ทางคณิตศาสตร์",
        "เน้นไปที่การประกาศผลลัพธ์ (Declarative)"
      ],
      "answer": 0,
      "explanation": "OOP เน้นการสร้าง Object ที่ประกอบด้วยข้อมูลและพฤติกรรม"
    },
    {
      "question": "von Neumann architecture ประกอบด้วยอะไรเป็นหลัก (คำถามที่ 21)",
      "options": [
        "Memory, CPU (ALU, Control)",
        "Harddisk, SSD",
        "Monitor, Keyboard",
        "OS, Application"
      ],
      "answer": 0,
      "explanation": "von Neumann มี Memory และ CPU ที่ประกอบด้วย ALU และ Control unit"
    },
    {
      "question": "คำสั่งใดต่อไปนี้เป็นลักษณะของ Imperative Programming (คำถามที่ 22)",
      "options": [
        "ระบุลำดับขั้นตอนชัดเจน",
        "ใช้กฎทางตรรกะ",
        "ไม่มีการเปลี่ยนค่าตัวแปร",
        "เน้นการเรียกซ้ำ (recursive)"
      ],
      "answer": 0,
      "explanation": "Imperative programming เป็นการสั่งงานแบบระบุขั้นตอน (how) และใช้ mutable variables"
    },
    {
      "question": "Prolog จัดอยู่ใน Programming Paradigm แบบใด (คำถามที่ 23)",
      "options": [
        "Logic",
        "Imperative",
        "Functional",
        "Object-Oriented"
      ],
      "answer": 0,
      "explanation": "Prolog เป็นภาษาแบบ Logic Programming"
    },
    {
      "question": "ขั้นตอนใดในกระบวนการแปลภาษา (Compilation) ทำหน้าที่แปลงตัวอักษรเป็น lexical units (คำถามที่ 24)",
      "options": [
        "Lexical analysis",
        "Syntax analysis",
        "Semantic analysis",
        "Code generation"
      ],
      "answer": 0,
      "explanation": "Lexical analysis หรือ Scanner ทำหน้าที่นี้"
    },
    {
      "question": "ข้อใดคือข้อดีของ Interpreter เมื่อเทียบกับ Compiler (คำถามที่ 25)",
      "options": [
        "แสดงข้อผิดพลาด (Run-time error) ได้ทันทีและพัฒนาโปรแกรมได้ง่าย",
        "ทำงานได้เร็วกว่า 10 ถึง 100 เท่า",
        "ใช้พื้นที่หน่วยความจำน้อยกว่ามาก",
        "ไม่ต้องใช้ซอร์สโค้ดในการทำงาน"
      ],
      "answer": 0,
      "explanation": "Interpreter มักจะแสดงข้อผิดพลาดระหว่างรันได้ทันทีและง่ายต่อการพัฒนาโปรแกรม"
    },
    {
      "question": "Hybrid Implementation Systems หมายถึงอะไร (คำถามที่ 26)",
      "options": [
        "แปลซอร์สโค้ดเป็น Intermediate language (เช่น Bytecode) ก่อนนำไปแปลด้วย Interpreter",
        "ใช้ทั้ง Windows และ Linux พร้อมกัน",
        "รันโปรแกรมบน CPU หลายตัวพร้อมกัน",
        "การแปลเป็นภาษาเครื่องโดยตรง"
      ],
      "answer": 0,
      "explanation": "Hybrid implementation เป็นการนำข้อดีของ compiler และ interpreter มาผสมกัน เช่น Java แปลเป็น Bytecode แล้วรันบน JVM"
    },
    {
      "question": "ตัวอย่างใดคือ Syntax error (คำถามที่ 27)",
      "options": [
        "เขียน x = x + u; โดยที่ u ยังไม่นิยาม",
        "พิมพ์ กิน ข้าว คน แทนที่จะเป็น คน กิน ข้าว",
        "หารด้วยศูนย์",
        "ลืมปิดไฟล์"
      ],
      "answer": 1,
      "explanation": "Syntax error คือการเขียนผิดไวยากรณ์ของภาษา เช่น กิน ข้าว คน"
    },
    {
      "question": "Semantics ในภาษาโปรแกรมหมายถึงอะไร (คำถามที่ 28)",
      "options": [
        "ความหมายของการทำงานของชุดคำสั่ง",
        "โครงสร้างไวยากรณ์",
        "การแปลภาษา",
        "ความเร็วในการประมวลผล"
      ],
      "answer": 0,
      "explanation": "Semantics คือความหมายหรือการทำงานที่ถูกต้องของโปรแกรม"
    },
    {
      "question": "ภาษาใดถูกออกแบบมาเพื่องานด้านปัญญาประดิษฐ์ (AI) และใช้สถาปัตยกรรมแบบ Functional (คำถามที่ 29)",
      "options": [
        "LISP",
        "FORTRAN",
        "COBOL",
        "C"
      ],
      "answer": 0,
      "explanation": "LISP เป็นภาษา Functional รุ่นแรกๆ นิยมใช้ในงาน AI"
    },
    {
      "question": "ลักษณะเด่นของ Object-Oriented Paradigm คือข้อใด (คำถามที่ 30)",
      "options": [
        "นำ Data และ Behavior มารวมกันเป็น Object",
        "ไม่มีตัวแปรที่เปลี่ยนค่าได้ (Immutable)",
        "ใช้การพิสูจน์ทางคณิตศาสตร์",
        "เน้นไปที่การประกาศผลลัพธ์ (Declarative)"
      ],
      "answer": 0,
      "explanation": "OOP เน้นการสร้าง Object ที่ประกอบด้วยข้อมูลและพฤติกรรม"
    }
  ],
  "5": [
    {
      "question": "ระบบปฏิบัติการ (OS) จัดอยู่ในซอฟต์แวร์ประเภทใด (ข้อ 1)",
      "options": [
        "System Software",
        "Application Software",
        "Utility Software",
        "Malware"
      ],
      "answer": 0,
      "explanation": "OS เป็น System Software ที่จัดการฮาร์ดแวร์"
    },
    {
      "question": "ข้อใดคือวัตถุประสงค์หลักของระบบปฏิบัติการ (ข้อ 2)",
      "options": [
        "เพื่อให้การใช้ฮาร์ดแวร์มีประสิทธิภาพและผู้ใช้ใช้งานสะดวก",
        "เพื่อสร้างกราฟิกที่สวยงาม",
        "เพื่อป้องกันไวรัส 100%",
        "เพื่อเป็นโปรแกรมประมวลผลคำ"
      ],
      "answer": 0,
      "explanation": "OS ออกแบบมาเพื่อจัดการฮาร์ดแวร์อย่างมีประสิทธิภาพและให้บริการแก่ผู้ใช้"
    },
    {
      "question": "Bootstrap Program มักจะถูกเก็บไว้ที่ใดในคอมพิวเตอร์ (ข้อ 3)",
      "options": [
        "ROM",
        "RAM",
        "Harddisk",
        "Flash Drive"
      ],
      "answer": 0,
      "explanation": "Bootstrap program เป็นโปรแกรมขนาดเล็กที่ใช้เริ่มต้นระบบ มักเก็บใน ROM"
    },
    {
      "question": "ระบบปฏิบัติการแบบใดที่มีการประมวลผลหลายโปรแกรมพร้อมกันโดยสลับการทำงานของ CPU ไปมา (ข้อ 4)",
      "options": [
        "Multiprogramming",
        "Batch operating system",
        "Monoprogramming",
        "Real-time system"
      ],
      "answer": 0,
      "explanation": "Multiprogramming อนุญาตให้หลายโปรแกรมอยู่ในหน่วยความจำและสลับการทำงานได้"
    },
    {
      "question": "ในเรื่อง Process Management สถานะใดหมายถึงโปรแกรมที่กำลังรอรับการจัดสรร I/O (ข้อ 5)",
      "options": [
        "Waiting",
        "Running",
        "Ready",
        "Hold"
      ],
      "answer": 0,
      "explanation": "Waiting state คือสถานะที่โปรเซสรอเหตุการณ์บางอย่าง เช่น I/O"
    },
    {
      "question": "Deadlock คือสถานการณ์ใด (ข้อ 6)",
      "options": [
        "Process ไม่สามารถทำงานต่อได้เพราะรอทรัพยากรซึ่งกันและกันจนเกิดวงจร",
        "Process ทำงานเสร็จเร็วกว่าปกติ",
        "OS แฮงค์เพราะไวรัส",
        "CPU ร้อนเกินไป"
      ],
      "answer": 0,
      "explanation": "Deadlock คือการที่โปรเซสต่างถือทรัพยากรและรอทรัพยากรของอีกฝ่ายทำให้ไม่มีใครไปต่อได้"
    },
    {
      "question": "ข้อใดไม่ใช่เงื่อนไขการเกิด Deadlock (4 อย่าง) (ข้อ 7)",
      "options": [
        "Pre-emption",
        "Mutual exclusion",
        "Resource holding",
        "Circular waiting"
      ],
      "answer": 0,
      "explanation": "เงื่อนไขคือ No pre-emption, Mutual exclusion, Hold and wait, Circular wait"
    },
    {
      "question": "Starvation แตกต่างจาก Deadlock อย่างไร (ข้อ 8)",
      "options": [
        "Starvation คือการที่โปรเซสรอทรัพยากรนานมากแต่ไม่เกิดวงจรติดตาย",
        "Starvation คือการที่โปรเซสทำงานเสร็จ",
        "Starvation เกิดจาก RAM พัง",
        "ไม่ต่างกัน"
      ],
      "answer": 0,
      "explanation": "Starvation เกิดเมื่อโปรเซสไม่ได้รับทรัพยากรที่ต้องการเสียที แต่ระบบไม่ได้หยุดชะงักทั้งหมด"
    },
    {
      "question": "อุปกรณ์ใดมีหน้าที่รับผิดชอบในการแปลงชื่อโดเมนเป็น IP Address (เป็นของบท 6 แต่นำมาถามหลอก) (ข้อ 9)",
      "options": [
        "DNS Server",
        "OS",
        "Router",
        "Switch"
      ],
      "answer": 0,
      "explanation": "DNS ทำหน้าที่แปลงชื่อเป็น IP (ข้อนี้เป็นความรู้คาบเกี่ยว)"
    },
    {
      "question": "การจัดสรรหน่วยความจำแบบแบ่งเป็นส่วนๆ ที่มีขนาดเท่ากันเรียกว่าอะไร (ข้อ 10)",
      "options": [
        "Paging",
        "Partitioning",
        "Swapping",
        "Virtual Memory"
      ],
      "answer": 0,
      "explanation": "Paging คือการแบ่งเป็นหน้า (pages) และเฟรม (frames) ขนาดเท่าๆกัน"
    },
    {
      "question": "ระบบปฏิบัติการ (OS) จัดอยู่ในซอฟต์แวร์ประเภทใด (ข้อ 11)",
      "options": [
        "System Software",
        "Application Software",
        "Utility Software",
        "Malware"
      ],
      "answer": 0,
      "explanation": "OS เป็น System Software ที่จัดการฮาร์ดแวร์"
    },
    {
      "question": "ข้อใดคือวัตถุประสงค์หลักของระบบปฏิบัติการ (ข้อ 12)",
      "options": [
        "เพื่อให้การใช้ฮาร์ดแวร์มีประสิทธิภาพและผู้ใช้ใช้งานสะดวก",
        "เพื่อสร้างกราฟิกที่สวยงาม",
        "เพื่อป้องกันไวรัส 100%",
        "เพื่อเป็นโปรแกรมประมวลผลคำ"
      ],
      "answer": 0,
      "explanation": "OS ออกแบบมาเพื่อจัดการฮาร์ดแวร์อย่างมีประสิทธิภาพและให้บริการแก่ผู้ใช้"
    },
    {
      "question": "Bootstrap Program มักจะถูกเก็บไว้ที่ใดในคอมพิวเตอร์ (ข้อ 13)",
      "options": [
        "ROM",
        "RAM",
        "Harddisk",
        "Flash Drive"
      ],
      "answer": 0,
      "explanation": "Bootstrap program เป็นโปรแกรมขนาดเล็กที่ใช้เริ่มต้นระบบ มักเก็บใน ROM"
    },
    {
      "question": "ระบบปฏิบัติการแบบใดที่มีการประมวลผลหลายโปรแกรมพร้อมกันโดยสลับการทำงานของ CPU ไปมา (ข้อ 14)",
      "options": [
        "Multiprogramming",
        "Batch operating system",
        "Monoprogramming",
        "Real-time system"
      ],
      "answer": 0,
      "explanation": "Multiprogramming อนุญาตให้หลายโปรแกรมอยู่ในหน่วยความจำและสลับการทำงานได้"
    },
    {
      "question": "ในเรื่อง Process Management สถานะใดหมายถึงโปรแกรมที่กำลังรอรับการจัดสรร I/O (ข้อ 15)",
      "options": [
        "Waiting",
        "Running",
        "Ready",
        "Hold"
      ],
      "answer": 0,
      "explanation": "Waiting state คือสถานะที่โปรเซสรอเหตุการณ์บางอย่าง เช่น I/O"
    },
    {
      "question": "Deadlock คือสถานการณ์ใด (ข้อ 16)",
      "options": [
        "Process ไม่สามารถทำงานต่อได้เพราะรอทรัพยากรซึ่งกันและกันจนเกิดวงจร",
        "Process ทำงานเสร็จเร็วกว่าปกติ",
        "OS แฮงค์เพราะไวรัส",
        "CPU ร้อนเกินไป"
      ],
      "answer": 0,
      "explanation": "Deadlock คือการที่โปรเซสต่างถือทรัพยากรและรอทรัพยากรของอีกฝ่ายทำให้ไม่มีใครไปต่อได้"
    },
    {
      "question": "ข้อใดไม่ใช่เงื่อนไขการเกิด Deadlock (4 อย่าง) (ข้อ 17)",
      "options": [
        "Pre-emption",
        "Mutual exclusion",
        "Resource holding",
        "Circular waiting"
      ],
      "answer": 0,
      "explanation": "เงื่อนไขคือ No pre-emption, Mutual exclusion, Hold and wait, Circular wait"
    },
    {
      "question": "Starvation แตกต่างจาก Deadlock อย่างไร (ข้อ 18)",
      "options": [
        "Starvation คือการที่โปรเซสรอทรัพยากรนานมากแต่ไม่เกิดวงจรติดตาย",
        "Starvation คือการที่โปรเซสทำงานเสร็จ",
        "Starvation เกิดจาก RAM พัง",
        "ไม่ต่างกัน"
      ],
      "answer": 0,
      "explanation": "Starvation เกิดเมื่อโปรเซสไม่ได้รับทรัพยากรที่ต้องการเสียที แต่ระบบไม่ได้หยุดชะงักทั้งหมด"
    },
    {
      "question": "อุปกรณ์ใดมีหน้าที่รับผิดชอบในการแปลงชื่อโดเมนเป็น IP Address (เป็นของบท 6 แต่นำมาถามหลอก) (ข้อ 19)",
      "options": [
        "DNS Server",
        "OS",
        "Router",
        "Switch"
      ],
      "answer": 0,
      "explanation": "DNS ทำหน้าที่แปลงชื่อเป็น IP (ข้อนี้เป็นความรู้คาบเกี่ยว)"
    },
    {
      "question": "การจัดสรรหน่วยความจำแบบแบ่งเป็นส่วนๆ ที่มีขนาดเท่ากันเรียกว่าอะไร (ข้อ 20)",
      "options": [
        "Paging",
        "Partitioning",
        "Swapping",
        "Virtual Memory"
      ],
      "answer": 0,
      "explanation": "Paging คือการแบ่งเป็นหน้า (pages) และเฟรม (frames) ขนาดเท่าๆกัน"
    },
    {
      "question": "ระบบปฏิบัติการ (OS) จัดอยู่ในซอฟต์แวร์ประเภทใด (ข้อ 21)",
      "options": [
        "System Software",
        "Application Software",
        "Utility Software",
        "Malware"
      ],
      "answer": 0,
      "explanation": "OS เป็น System Software ที่จัดการฮาร์ดแวร์"
    },
    {
      "question": "ข้อใดคือวัตถุประสงค์หลักของระบบปฏิบัติการ (ข้อ 22)",
      "options": [
        "เพื่อให้การใช้ฮาร์ดแวร์มีประสิทธิภาพและผู้ใช้ใช้งานสะดวก",
        "เพื่อสร้างกราฟิกที่สวยงาม",
        "เพื่อป้องกันไวรัส 100%",
        "เพื่อเป็นโปรแกรมประมวลผลคำ"
      ],
      "answer": 0,
      "explanation": "OS ออกแบบมาเพื่อจัดการฮาร์ดแวร์อย่างมีประสิทธิภาพและให้บริการแก่ผู้ใช้"
    },
    {
      "question": "Bootstrap Program มักจะถูกเก็บไว้ที่ใดในคอมพิวเตอร์ (ข้อ 23)",
      "options": [
        "ROM",
        "RAM",
        "Harddisk",
        "Flash Drive"
      ],
      "answer": 0,
      "explanation": "Bootstrap program เป็นโปรแกรมขนาดเล็กที่ใช้เริ่มต้นระบบ มักเก็บใน ROM"
    },
    {
      "question": "ระบบปฏิบัติการแบบใดที่มีการประมวลผลหลายโปรแกรมพร้อมกันโดยสลับการทำงานของ CPU ไปมา (ข้อ 24)",
      "options": [
        "Multiprogramming",
        "Batch operating system",
        "Monoprogramming",
        "Real-time system"
      ],
      "answer": 0,
      "explanation": "Multiprogramming อนุญาตให้หลายโปรแกรมอยู่ในหน่วยความจำและสลับการทำงานได้"
    },
    {
      "question": "ในเรื่อง Process Management สถานะใดหมายถึงโปรแกรมที่กำลังรอรับการจัดสรร I/O (ข้อ 25)",
      "options": [
        "Waiting",
        "Running",
        "Ready",
        "Hold"
      ],
      "answer": 0,
      "explanation": "Waiting state คือสถานะที่โปรเซสรอเหตุการณ์บางอย่าง เช่น I/O"
    },
    {
      "question": "Deadlock คือสถานการณ์ใด (ข้อ 26)",
      "options": [
        "Process ไม่สามารถทำงานต่อได้เพราะรอทรัพยากรซึ่งกันและกันจนเกิดวงจร",
        "Process ทำงานเสร็จเร็วกว่าปกติ",
        "OS แฮงค์เพราะไวรัส",
        "CPU ร้อนเกินไป"
      ],
      "answer": 0,
      "explanation": "Deadlock คือการที่โปรเซสต่างถือทรัพยากรและรอทรัพยากรของอีกฝ่ายทำให้ไม่มีใครไปต่อได้"
    },
    {
      "question": "ข้อใดไม่ใช่เงื่อนไขการเกิด Deadlock (4 อย่าง) (ข้อ 27)",
      "options": [
        "Pre-emption",
        "Mutual exclusion",
        "Resource holding",
        "Circular waiting"
      ],
      "answer": 0,
      "explanation": "เงื่อนไขคือ No pre-emption, Mutual exclusion, Hold and wait, Circular wait"
    },
    {
      "question": "Starvation แตกต่างจาก Deadlock อย่างไร (ข้อ 28)",
      "options": [
        "Starvation คือการที่โปรเซสรอทรัพยากรนานมากแต่ไม่เกิดวงจรติดตาย",
        "Starvation คือการที่โปรเซสทำงานเสร็จ",
        "Starvation เกิดจาก RAM พัง",
        "ไม่ต่างกัน"
      ],
      "answer": 0,
      "explanation": "Starvation เกิดเมื่อโปรเซสไม่ได้รับทรัพยากรที่ต้องการเสียที แต่ระบบไม่ได้หยุดชะงักทั้งหมด"
    },
    {
      "question": "อุปกรณ์ใดมีหน้าที่รับผิดชอบในการแปลงชื่อโดเมนเป็น IP Address (เป็นของบท 6 แต่นำมาถามหลอก) (ข้อ 29)",
      "options": [
        "DNS Server",
        "OS",
        "Router",
        "Switch"
      ],
      "answer": 0,
      "explanation": "DNS ทำหน้าที่แปลงชื่อเป็น IP (ข้อนี้เป็นความรู้คาบเกี่ยว)"
    },
    {
      "question": "การจัดสรรหน่วยความจำแบบแบ่งเป็นส่วนๆ ที่มีขนาดเท่ากันเรียกว่าอะไร (ข้อ 30)",
      "options": [
        "Paging",
        "Partitioning",
        "Swapping",
        "Virtual Memory"
      ],
      "answer": 0,
      "explanation": "Paging คือการแบ่งเป็นหน้า (pages) และเฟรม (frames) ขนาดเท่าๆกัน"
    }
  ],
  "6": [
    {
      "question": "เครือข่ายระดับเมืองที่เชื่อมโยงสาขาต่างๆในจังหวัดเดียวกันเรียกว่าอะไร (ข้อ 1)",
      "options": [
        "MAN",
        "LAN",
        "WAN",
        "PAN"
      ],
      "answer": 0,
      "explanation": "MAN (Metropolitan Area Network) เป็นเครือข่ายระดับเมืองหรือจังหวัด"
    },
    {
      "question": "Topology แบบใดที่ใช้สายสัญญาณเส้นหลักเพียงเส้นเดียวในการเชื่อมต่อคอมพิวเตอร์ทุกเครื่อง (ข้อ 2)",
      "options": [
        "Bus",
        "Star",
        "Ring",
        "Mesh"
      ],
      "answer": 0,
      "explanation": "Bus topology ใช้สายสัญญาณแกนหลัก (Backbone) เส้นเดียวในการเชื่อมต่อ"
    },
    {
      "question": "อุปกรณ์ใดทำหน้าที่เชื่อมต่อเครือข่ายและค้นหาเส้นทางที่เหมาะสมที่สุด (ข้อ 3)",
      "options": [
        "Router",
        "Hub",
        "Switch",
        "NIC"
      ],
      "answer": 0,
      "explanation": "Router เป็นอุปกรณ์ที่ทำงานในระดับ Network Layer มีหน้าที่หาเส้นทาง"
    },
    {
      "question": "สายสัญญาณแบบใดที่มีแบนด์วิดท์สูงสุดและส่งข้อมูลด้วยความเร็วแสง (ข้อ 4)",
      "options": [
        "Fiber-Optic",
        "Coaxial",
        "Twisted-pair",
        "Infrared"
      ],
      "answer": 0,
      "explanation": "Fiber-Optic ใช้แสงในการนำสัญญาณ ทำให้แบนด์วิดท์สูงและไม่มีการรบกวนทางแม่เหล็กไฟฟ้า"
    },
    {
      "question": "ข้อใดคือแบบจำลองมาตรฐานการสื่อสารคอมพิวเตอร์ที่แบ่งเป็น 7 ชั้น (ข้อ 5)",
      "options": [
        "OSI Model",
        "TCP/IP",
        "ISO 9001",
        "IEEE 802.11"
      ],
      "answer": 0,
      "explanation": "OSI Model ประกอบด้วย 7 Layers"
    },
    {
      "question": "ชั้นใดใน OSI Model ทำหน้าที่เข้ารหัสและถอดรหัสข้อมูล (Encryption/Decryption) (ข้อ 6)",
      "options": [
        "Presentation Layer",
        "Application Layer",
        "Network Layer",
        "Physical Layer"
      ],
      "answer": 0,
      "explanation": "Presentation Layer จัดการรูปแบบข้อมูล การเข้ารหัส และบีบอัดข้อมูล"
    },
    {
      "question": "IP Address เวอร์ชัน 4 (IPv4) มีตัวอย่างตามข้อใด (ข้อ 7)",
      "options": [
        "72.14.207.99",
        "2001:4860::8844",
        "www.google.com",
        "00:1A:2B:3C:4D:5E"
      ],
      "answer": 0,
      "explanation": "IPv4 เป็นตัวเลข 4 ชุดคั่นด้วยจุด"
    },
    {
      "question": "บริการรับส่งแฟ้มข้อมูลบนอินเทอร์เน็ตใช้โปรโตคอลใด (ข้อ 8)",
      "options": [
        "FTP",
        "SMTP",
        "HTTP",
        "DNS"
      ],
      "answer": 0,
      "explanation": "FTP (File Transfer Protocol) ใช้สำหรับรับส่งแฟ้มข้อมูล"
    },
    {
      "question": "IaaS ใน Cloud Computing ย่อมาจากอะไร (ข้อ 9)",
      "options": [
        "Infrastructure as a Service",
        "Internet as a Service",
        "Information as a Service",
        "Interface as a Service"
      ],
      "answer": 0,
      "explanation": "IaaS คือการให้บริการโครงสร้างพื้นฐาน เช่น เซิร์ฟเวอร์หรือพื้นที่จัดเก็บข้อมูล"
    },
    {
      "question": "Photonic chips แตกต่างจากชิปประมวลผลทั่วไปอย่างไร (ข้อ 10)",
      "options": [
        "ใช้แสงแทนไฟฟ้าบางส่วนเพื่อลดการสูญเสียและเพิ่มประสิทธิภาพ",
        "ใช้ความร้อนในการประมวลผล",
        "ไม่ใช้พลังงานเลย",
        "เป็นชิปที่ทำจากพลาสติก"
      ],
      "answer": 0,
      "explanation": "Photonic chips นำแสงมาใช้ร่วมกับอิเล็กทรอนิกส์เพื่อเพิ่มความเร็วในการรับส่งข้อมูลและลด optical loss"
    },
    {
      "question": "เครือข่ายระดับเมืองที่เชื่อมโยงสาขาต่างๆในจังหวัดเดียวกันเรียกว่าอะไร (ข้อ 11)",
      "options": [
        "MAN",
        "LAN",
        "WAN",
        "PAN"
      ],
      "answer": 0,
      "explanation": "MAN (Metropolitan Area Network) เป็นเครือข่ายระดับเมืองหรือจังหวัด"
    },
    {
      "question": "Topology แบบใดที่ใช้สายสัญญาณเส้นหลักเพียงเส้นเดียวในการเชื่อมต่อคอมพิวเตอร์ทุกเครื่อง (ข้อ 12)",
      "options": [
        "Bus",
        "Star",
        "Ring",
        "Mesh"
      ],
      "answer": 0,
      "explanation": "Bus topology ใช้สายสัญญาณแกนหลัก (Backbone) เส้นเดียวในการเชื่อมต่อ"
    },
    {
      "question": "อุปกรณ์ใดทำหน้าที่เชื่อมต่อเครือข่ายและค้นหาเส้นทางที่เหมาะสมที่สุด (ข้อ 13)",
      "options": [
        "Router",
        "Hub",
        "Switch",
        "NIC"
      ],
      "answer": 0,
      "explanation": "Router เป็นอุปกรณ์ที่ทำงานในระดับ Network Layer มีหน้าที่หาเส้นทาง"
    },
    {
      "question": "สายสัญญาณแบบใดที่มีแบนด์วิดท์สูงสุดและส่งข้อมูลด้วยความเร็วแสง (ข้อ 14)",
      "options": [
        "Fiber-Optic",
        "Coaxial",
        "Twisted-pair",
        "Infrared"
      ],
      "answer": 0,
      "explanation": "Fiber-Optic ใช้แสงในการนำสัญญาณ ทำให้แบนด์วิดท์สูงและไม่มีการรบกวนทางแม่เหล็กไฟฟ้า"
    },
    {
      "question": "ข้อใดคือแบบจำลองมาตรฐานการสื่อสารคอมพิวเตอร์ที่แบ่งเป็น 7 ชั้น (ข้อ 15)",
      "options": [
        "OSI Model",
        "TCP/IP",
        "ISO 9001",
        "IEEE 802.11"
      ],
      "answer": 0,
      "explanation": "OSI Model ประกอบด้วย 7 Layers"
    },
    {
      "question": "ชั้นใดใน OSI Model ทำหน้าที่เข้ารหัสและถอดรหัสข้อมูล (Encryption/Decryption) (ข้อ 16)",
      "options": [
        "Presentation Layer",
        "Application Layer",
        "Network Layer",
        "Physical Layer"
      ],
      "answer": 0,
      "explanation": "Presentation Layer จัดการรูปแบบข้อมูล การเข้ารหัส และบีบอัดข้อมูล"
    },
    {
      "question": "IP Address เวอร์ชัน 4 (IPv4) มีตัวอย่างตามข้อใด (ข้อ 17)",
      "options": [
        "72.14.207.99",
        "2001:4860::8844",
        "www.google.com",
        "00:1A:2B:3C:4D:5E"
      ],
      "answer": 0,
      "explanation": "IPv4 เป็นตัวเลข 4 ชุดคั่นด้วยจุด"
    },
    {
      "question": "บริการรับส่งแฟ้มข้อมูลบนอินเทอร์เน็ตใช้โปรโตคอลใด (ข้อ 18)",
      "options": [
        "FTP",
        "SMTP",
        "HTTP",
        "DNS"
      ],
      "answer": 0,
      "explanation": "FTP (File Transfer Protocol) ใช้สำหรับรับส่งแฟ้มข้อมูล"
    },
    {
      "question": "IaaS ใน Cloud Computing ย่อมาจากอะไร (ข้อ 19)",
      "options": [
        "Infrastructure as a Service",
        "Internet as a Service",
        "Information as a Service",
        "Interface as a Service"
      ],
      "answer": 0,
      "explanation": "IaaS คือการให้บริการโครงสร้างพื้นฐาน เช่น เซิร์ฟเวอร์หรือพื้นที่จัดเก็บข้อมูล"
    },
    {
      "question": "Photonic chips แตกต่างจากชิปประมวลผลทั่วไปอย่างไร (ข้อ 20)",
      "options": [
        "ใช้แสงแทนไฟฟ้าบางส่วนเพื่อลดการสูญเสียและเพิ่มประสิทธิภาพ",
        "ใช้ความร้อนในการประมวลผล",
        "ไม่ใช้พลังงานเลย",
        "เป็นชิปที่ทำจากพลาสติก"
      ],
      "answer": 0,
      "explanation": "Photonic chips นำแสงมาใช้ร่วมกับอิเล็กทรอนิกส์เพื่อเพิ่มความเร็วในการรับส่งข้อมูลและลด optical loss"
    },
    {
      "question": "เครือข่ายระดับเมืองที่เชื่อมโยงสาขาต่างๆในจังหวัดเดียวกันเรียกว่าอะไร (ข้อ 21)",
      "options": [
        "MAN",
        "LAN",
        "WAN",
        "PAN"
      ],
      "answer": 0,
      "explanation": "MAN (Metropolitan Area Network) เป็นเครือข่ายระดับเมืองหรือจังหวัด"
    },
    {
      "question": "Topology แบบใดที่ใช้สายสัญญาณเส้นหลักเพียงเส้นเดียวในการเชื่อมต่อคอมพิวเตอร์ทุกเครื่อง (ข้อ 22)",
      "options": [
        "Bus",
        "Star",
        "Ring",
        "Mesh"
      ],
      "answer": 0,
      "explanation": "Bus topology ใช้สายสัญญาณแกนหลัก (Backbone) เส้นเดียวในการเชื่อมต่อ"
    },
    {
      "question": "อุปกรณ์ใดทำหน้าที่เชื่อมต่อเครือข่ายและค้นหาเส้นทางที่เหมาะสมที่สุด (ข้อ 23)",
      "options": [
        "Router",
        "Hub",
        "Switch",
        "NIC"
      ],
      "answer": 0,
      "explanation": "Router เป็นอุปกรณ์ที่ทำงานในระดับ Network Layer มีหน้าที่หาเส้นทาง"
    },
    {
      "question": "สายสัญญาณแบบใดที่มีแบนด์วิดท์สูงสุดและส่งข้อมูลด้วยความเร็วแสง (ข้อ 24)",
      "options": [
        "Fiber-Optic",
        "Coaxial",
        "Twisted-pair",
        "Infrared"
      ],
      "answer": 0,
      "explanation": "Fiber-Optic ใช้แสงในการนำสัญญาณ ทำให้แบนด์วิดท์สูงและไม่มีการรบกวนทางแม่เหล็กไฟฟ้า"
    },
    {
      "question": "ข้อใดคือแบบจำลองมาตรฐานการสื่อสารคอมพิวเตอร์ที่แบ่งเป็น 7 ชั้น (ข้อ 25)",
      "options": [
        "OSI Model",
        "TCP/IP",
        "ISO 9001",
        "IEEE 802.11"
      ],
      "answer": 0,
      "explanation": "OSI Model ประกอบด้วย 7 Layers"
    },
    {
      "question": "ชั้นใดใน OSI Model ทำหน้าที่เข้ารหัสและถอดรหัสข้อมูล (Encryption/Decryption) (ข้อ 26)",
      "options": [
        "Presentation Layer",
        "Application Layer",
        "Network Layer",
        "Physical Layer"
      ],
      "answer": 0,
      "explanation": "Presentation Layer จัดการรูปแบบข้อมูล การเข้ารหัส และบีบอัดข้อมูล"
    },
    {
      "question": "IP Address เวอร์ชัน 4 (IPv4) มีตัวอย่างตามข้อใด (ข้อ 27)",
      "options": [
        "72.14.207.99",
        "2001:4860::8844",
        "www.google.com",
        "00:1A:2B:3C:4D:5E"
      ],
      "answer": 0,
      "explanation": "IPv4 เป็นตัวเลข 4 ชุดคั่นด้วยจุด"
    },
    {
      "question": "บริการรับส่งแฟ้มข้อมูลบนอินเทอร์เน็ตใช้โปรโตคอลใด (ข้อ 28)",
      "options": [
        "FTP",
        "SMTP",
        "HTTP",
        "DNS"
      ],
      "answer": 0,
      "explanation": "FTP (File Transfer Protocol) ใช้สำหรับรับส่งแฟ้มข้อมูล"
    },
    {
      "question": "IaaS ใน Cloud Computing ย่อมาจากอะไร (ข้อ 29)",
      "options": [
        "Infrastructure as a Service",
        "Internet as a Service",
        "Information as a Service",
        "Interface as a Service"
      ],
      "answer": 0,
      "explanation": "IaaS คือการให้บริการโครงสร้างพื้นฐาน เช่น เซิร์ฟเวอร์หรือพื้นที่จัดเก็บข้อมูล"
    },
    {
      "question": "Photonic chips แตกต่างจากชิปประมวลผลทั่วไปอย่างไร (ข้อ 30)",
      "options": [
        "ใช้แสงแทนไฟฟ้าบางส่วนเพื่อลดการสูญเสียและเพิ่มประสิทธิภาพ",
        "ใช้ความร้อนในการประมวลผล",
        "ไม่ใช้พลังงานเลย",
        "เป็นชิปที่ทำจากพลาสติก"
      ],
      "answer": 0,
      "explanation": "Photonic chips นำแสงมาใช้ร่วมกับอิเล็กทรอนิกส์เพื่อเพิ่มความเร็วในการรับส่งข้อมูลและลด optical loss"
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
      "question": "คำสั่งการดำเนินการใน SQL ข้อใดที่ใช้ดึงข้อมูลหรือเลือก \"แถว (Row)\" ที่ตรงตามเงื่อนไข?",
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
      "question": "คำสั่งการดำเนินการใน SQL ข้อใดที่ใช้เลือกเฉพาะ \"คอลัมน์ (Column)\" ที่ต้องการออกมาแสดง?",
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
    }
  ],
  "8": [
    {
      "question": "ข้อใดไม่ใช่หนึ่งใน 4 องค์ประกอบหลักของ Computational Thinking",
      "options": [
        "Decomposition",
        "Pattern Recognition",
        "Abstraction",
        "Implementation"
      ],
      "answer": 3,
      "explanation": "องค์ประกอบ 4 อย่างของการคิดเชิงคอมพิวเตอร์คือ Decomposition (แยกย่อย), Pattern Recognition (หารูปแบบ), Abstraction (เชิงนามธรรม), และ Algorithm Design"
    },
    {
      "question": "โครงสร้างพื้นฐานในการเขียนอัลกอริธึม (Three Constructs) มีรูปแบบอะไรบ้าง",
      "options": [
        "Input, Process, Output",
        "Sequence, Decision, Repetition",
        "Start, Read, Stop",
        "Condition, Action, Result"
      ],
      "answer": 1,
      "explanation": "โครงสร้างหลัก 3 รูปแบบคือ การทำตามลำดับ (Sequence), การตัดสินใจ (Decision/Selection), และการทำซ้ำ (Repetition)"
    },
    {
      "question": "การเรียงลำดับอัลกอริธึมแบบ Bubble Sort มีหลักการทำงานอย่างไร",
      "options": [
        "เปรียบเทียบข้อมูลที่อยู่ติดกันคู่หนึ่ง และสลับตำแหน่งหากอยู่ในลำดับที่ไม่ถูกต้อง ทำซ้ำเป็นรอบๆ",
        "ค้นหาค่าที่น้อยที่สุดแล้วนำมาวางไว้ข้างหน้าสุดทีละตัว",
        "แบ่งข้อมูลเป็นสองส่วนแล้วทำการเรียงข้อมูลแต่ละส่วน",
        "สุ่มตัวเลขไปเรื่อยๆจนกว่าทุกตัวจะเรียงอย่างถูกต้อง"
      ],
      "answer": 0,
      "explanation": "Bubble sort จะเปรียบเทียบข้อมูลคู่ที่ติดกัน และสลับที่กันถ้าผิดลำดับ ทำวนลูปแบบนี้ซ้ำๆ จนกว่าข้อมูลทั้งหมดจะเรียงครบ"
    },
    {
      "question": "แนวคิด Abstraction (การคิดเชิงนามธรรม) มีลักษณะตรงกับข้อใดมากที่สุด",
      "options": [
        "การแบ่งปัญหาใหญ่ให้ออกเป็นปัญหาย่อยๆ",
        "การพยายามมองหาความเหมือนของรูปแบบปัญหา",
        "การคัดกรองรายละเอียดที่ไม่จำเป็นออกไป และมุ่งเน้นเฉพาะข้อมูลที่สำคัญ",
        "การเขียนโปรแกรมด้วยภาษาแอสเซมบลี"
      ],
      "answer": 2,
      "explanation": "Abstraction คือกระบวนการคัดกรอง หรือลบข้อมูลที่ไม่จำเป็นออกไป และมุ่งเน้นไปที่รายละเอียดที่สำคัญและจำเป็นต่อการแก้ปัญหา"
    },
    {
      "question": "รหัสเทียม (Pseudocode) หมายถึงอะไร",
      "options": [
        "การเขียนโปรแกรมด้วยภาษาเครื่องที่คอมพิวเตอร์เข้าใจทันที",
        "การวาดแผนภาพแสดงการทำงานในรูปแบบกราฟิก",
        "การแทนอัลกอริธึมโดยใช้ภาษาเขียนที่คล้ายกับภาษาโปรแกรม เพื่อให้มนุษย์เข้าใจได้ง่าย",
        "การทดสอบความเร็วในการรันโปรแกรมของระบบ"
      ],
      "answer": 2,
      "explanation": "Pseudocode เป็นการเขียนอธิบายขั้นตอนอัลกอริธึมด้วยข้อความและโครงสร้างที่คล้ายกับโค้ดจริง (มักคล้ายภาษาอังกฤษ) เพื่อให้มนุษย์อ่านและทำความเข้าใจตรรกะได้ง่าย"
    }
  ]
};
