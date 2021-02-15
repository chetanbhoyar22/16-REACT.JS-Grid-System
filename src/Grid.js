
import './Grid.css';

function Grid() {
    return (
      <div>
       <h2 className="text-danger text-center">Grid System Using Width (515px)</h2>
       <div className="row">
            <div className="div_1"></div>
            <div className="div_2"></div>
            <div className="div_3"></div>
       </div>
       <h2 className="text-danger text-center">Grid System Using Bootstrap (col-4,4,4)</h2>
       <div className="row">
            <div className="div_4 col-4"></div>
            <div className="div_5 col-4"></div>
            <div className="div_6 col-4 "></div>
       </div>
       <h2 className="text-danger text-center">Grid System Using large Screen (col-lg-6,3,3)</h2>
       <div className="row">
            <div className="div_4 col-lg-6"></div>
            <div className="div_5 col-lg-3"></div>
            <div className="div_6 col-lg-3"></div>
       </div>
       <h2 className="text-danger text-center">Grid System Using Medium Screen (col-md-4,4,4)</h2>
       <div className="row">
            <div className="div_4 col-md-4"></div>
            <div className="div_5 col-md-4"></div>
            <div className="div_6 col-md-4"></div>
       </div>
       <h2 className="text-danger text-center">Grid System Using Small Screen (col-sm-12,12,12)</h2>
       <div className="row">
            <div className="div_4 col-sm-12"></div>
            <div className="div_5 col-sm-12"></div>
            <div className="div_6 col-sm-12"></div>
       </div>
       
       </div>
    );
  }
  
  export default Grid;
  