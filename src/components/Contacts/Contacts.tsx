import '../../styles.css';

const Contacts = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="border border-primary-subtle rounded-4 container-contact">
          <div className="text-center">
            <h4>Контактная информация</h4>
          </div>
          <div className="text-center d-flex flex-column mt-4">
            <span className="ic-phone">+996555995018</span>
            <span className="ic-email">sergeev-michael@mail.ru</span>
          </div>
          <div className="text-center mt-3">
            <strong><i>Социальные сети</i></strong>
          </div>
          <div className="text-center">
            <a href="#" className="ic-facebook"></a>
            <a href="#" className="ic-linkedin"></a>
            <a href="#" className="ic-instagram"></a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contacts;