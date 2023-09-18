import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="container-fluid" id="grad1">
  <div className="row justify-content-center mt-0">
    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
      <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
        <div className="row">
          <div className="col-md-12 mx-0">
            <form id="msform">
              {/* progressbar */}
              {/* fieldsets */}
              <fieldset>
                <div className="form-card">
                  <h2 className="fs-title">Personal Details</h2>
                  <br />
                  <label htmlFor="fname" style={{ color: "black" }}>
                    Name :
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Name"
                  />
                  <br />
                  <label htmlFor="femail" style={{ color: "black" }}>
                    Personal Email-Id :
                  </label>
                  <input
                    type="text"
                    name="uname"
                    placeholder="Enter Your Personal Email id"
                  />
                  <br />
                  <label htmlFor="fcollege" style={{ color: "black" }}>
                    College Email-Id :
                  </label>
                  <input
                    type="text"
                    name="pwd"
                    placeholder="Enter Your College Email id"
                  />
                  <br />
                  <label htmlFor="fcollege" style={{ color: "black" }}>
                    Sap - Id :
                  </label>
                  <input type="number" name="cpwd" placeholder="Enter Sap id" />
                  <br />
                  <label htmlFor="fcollege" style={{ color: "black" }}>
                    Whatsapp Number :
                  </label>
                  <input
                    type="number"
                    name="cpwd"
                    placeholder="Ente Your Whatsapp Number"
                  />
                </div>
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  defaultValue="Next Step"
                />
              </fieldset>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
