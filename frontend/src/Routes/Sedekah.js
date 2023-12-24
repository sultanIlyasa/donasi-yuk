import "./Sedekah.css"

function Sedekah() {
  return (
    <>
    <header>
      <h1>Sedekah</h1>
    </header>
    
    <div className="deskripsi">
      <p>Sedekah merupakan amalan yang dicintai Allah SWT. Hal ini dibuktikan dengan banyaknya ayat Al-Qur’an yang menyebutkan tentang sedekah, salah satunya dalam surat Al-Baqarah ayat 271.
        “Jika kamu menampakkan sedekah (mu), maka itu adalah baik sekali. Dan jika kamu menyembunyikannya dan kamu berikan kepada orang-orang fakir, maka menyembunyikan itu lebih baik bagimu. Dan Allah akan menghapuskan dari kamu sebagian kesalahan-kesalahanmu, dan Allah mengetahui apa yang kamu kerjakan.” (QS. Al-Baqarah: 271)</p>
    </div>

    <button type="submit-sedekah">Sedekah sekarang</button>

    <div className="donatur">
      <h3>Donatur</h3>
    </div>
    </>
  );
  
}

export default Sedekah;
