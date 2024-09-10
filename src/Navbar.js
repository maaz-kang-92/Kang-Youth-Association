import './index.css'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.textUtils}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/textform">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>

            {/* these switches are used to change the color of body */}
            <div className={`form-check form-switch switchMargin text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
              <label onClick={props.redMode} style={{ border: '4px solid #fb143f', borderRadius: '50%', backgroundColor: '#fb143f', width: '13px', height: '13px' }}>
              </label>
            </div>

            <div className={`form-check form-switch switchMargin text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
              <label onClick={props.blueMode} style={{ border: '4px solid #0a3386', borderRadius: '50%', backgroundColor: '#0a3386', width: '13px', height: '13px', }}>
              </label>

            </div>
            <div className={`form-check form-switch switchMargin text-${props.mode === 'dark' ? 'light' : 'dark'}`} onClick={props.brownMode} >
              <label onClick={props.brownMode} style={{ border: '4px solid brown', borderRadius: '50%', backgroundColor: 'brown', width: '13px', height: '13px' }}>

              </label>
            </div>

            <div className={`form-check form-switch switchMargin text-${props.mode === 'dark' ? 'light' : 'dark'}`} onClick={props.greenMode} >
              <label onClick={props.greenMode} style={{ border: '4px solid green', borderRadius: '50%', backgroundColor: 'green', width: '13px', height: '13px', }} >
              </label>
            </div>

            <div className={`form-check form-switch switchMargin text-${props.mode === 'dark' ? 'light' : 'dark'}`} onClick={props.purpleMode} >
              <label onClick={props.purpleMode} style={{ border: '4px solid purple', borderRadius: '50%', backgroundColor: 'purple', width: '13px', height: '13px', marginRight: '99px' }} />

            </div>

            {/* here is the ternary operater used to change the text color */}
            <div className={`form-check form-switch switchMargin text-${props.mode === 'dark' ? 'light' : 'dark'}`}  >
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} />
              <label className="form-check-label" htmlForfor="flexSwitchCheckChecked">{props.text}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

