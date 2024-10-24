// import componpents

// import styles
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home-header-container">
        <h1>Introduce yourself</h1>
      </div>
      <div className="home-introduce-container">
        <div className="home-img-container">
          <img src="me.jpg" alt="img" />
        </div>
        <div className="home-texts-container">
          <h4><b>ข้อมูลส่วนตัว</b></h4>
          <br />
          <p><b>ชื่อ :</b> นายสพณดณัย เชื้อชาญ</p>
          <p><b>รหัส :</b> 66076195</p>
          <p><b>คณะ :</b> เทคโนโลยีสารสนเทศ</p>
          <p><b>สาขา :</b> วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</p>
          <p><b>เพศ :</b> ชาย</p>
          <p><b>อายุ :</b> 19 ปี</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
