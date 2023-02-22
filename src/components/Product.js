import React from 'react'
import  './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Product() {
    

  return (
    <>
    

    <div className="container">
	<div className="row">
		<div className="col-md-2"> 
   {/* <!--sizes rows-->*/}
    <div className="row rounded">
    <div className="col-md-3 rounded1"> XS</div>
    <div className="col-md-3 rounded1"> S</div>
    <div className="col-md-3 rounded1"> M</div>
    <div className="col-md-3 rounded1"> ML</div>
    </div>

    <div className="row rounded">
    <div className="col-md-3 rounded1"> L</div>
    <div className="col-md-3 rounded1"> XL</div>
    <div className="col-md-3 rounded1"> XXL</div>
    <div className="col-md-3"> </div>
    </div>

   {/* <!--leave on github-->*/}
    <div className="row github">
    <div className="col-md-12 github"> Leave a star on Github if this repository was useful:)</div>
    </div>

    {/*<!--star 848-->*/}
    <div className="row star848">
    <div className="col-md-6 star848"> </div>
    </div>

  </div>
		{/*<!--columns for product images in row 1-->*/}
		<div className="col-md-10">
      <div className="row" >
			{/*<!--column 1-->*/}		
				<div className="col-md-3 card" style={{width: "14rem"}}>
            <img  src="azma/Cat-Tee-Black-T-shirt.4edb5154.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Cat Tee Black T-shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>10</strong>.90</p>
              <h5 className="card-text"> or 9x of &dollar; 1.21</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

				
			 {/* <!--column 2--> */}     
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/DarkThug.8da09d0b.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Dark Thug Blue-Navy T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>29</strong>.45</p>
              <h5 className="card-text"> or 9x of &dollar; 1.21</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        {/*<!--column 3-->   */}   
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/Sphynx.b047a598.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Sphynx Tie Dye Wine T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>9</strong>.00</p>
              <h5 className="card-text"> or 3x of &dollar; 3.00</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

       {/* <!--column 4-->   */}   
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/Skuul.cb8727d9.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Skuul</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>14</strong>.00</p>
              <h5 className="card-text"> or 5x of &dollar; 2.80</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

		  </div>
    </div>
	</div>

  <div className="row">
    <div className="col-md-2"></div>

    {/*<!--columns for product images in row 2-->*/}
    <div className="col-md-10 secondrow">
      <div className="row">

     {/* <!--column 1--> */}   
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/WineSkuul.c9fb4794.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Wine Skul T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>13</strong>.25</p>
              <h5 className="card-text"> or 3x of &dollar; 4.42</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        
       {/* <!--column 2-->  */}    
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/ShortSleeveT-Shirt.854f9ebd.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Short Sleeve T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>75</strong>.00</p>
              <h5 className="card-text"> or 5x of &dollar; 15.00</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

       {/* <!--column 3-->  */}        
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/BornOnTheStreet.a5707e84.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Born On The Streets</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>25</strong>.90</p>
              <h5 className="card-text"> or 12x of &dollar; 2.16</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        {/* <!--column 4-->  */}       
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/SphynxTieDyeGreyT-Shirt.7bbbf40e.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Sphynx Tie Dye Grey T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>10</strong>.90</p>
              <h5 className="card-text"> or 12x of &dollar; 1.21</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-2"></div>

     {/* <!--columns for product images in row 3--> */}   
    <div className="col-md-10 thirdrow">
      <div className="row">

      {/*<!--column 1-->   */}  
        <div className="col-md-3 card" style={{width:" 14rem"}}>
            <img src="azma/DangerKnife.16d87c7b.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Danger Knife Grey</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>14</strong>.90</p>
              <h5 className="card-text"> or 7x of &dollar; 2.13</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        
        {/*<!--column 2-->   */}    
        <div className="col-md-3 card" style={{width:" 14rem"}}>
            <img src="azma/WhiteDGK.76d63530.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">White DGK Script Tee</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>14</strong>.90</p>
              <h5 className="card-text"> or 7x of &dollar; 2.13</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        {/*<!--column 3-->   */}       
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/Cat-Tee-Black-T-shirt(2).08690d27.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Cat Tee Black T-Shirt A</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>10</strong>.90</p>
              <h5 className="card-text"> or 9x of &dollar; 1.21</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        {/*<!--column 4--> */}     
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/Tso3DBlack.d6803810.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Tso 3D Short Sleeve T-Shirt A</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>10</strong>.90</p>
              <h5 className="card-text"> or 9x of &dollar; 1.21</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-2"></div>

   {/*<!--columns for product images in row 4-->*/}
    <div className="col-md-10 fourthrow">
      <div className="row">

      {/*<!--column 1-->  */}   
        <div className="col-md-3 card" style={{width:" 14rem"}}>
            <img src="azma/CrazyMonkey.9d1a7699.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Crazy Monkey Black T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>22</strong>.50</p>
              <h5 className="card-text"> or 4x of &dollar; 5.63</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        
       {/* <!--column 2--> */}     
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/Tso3DBlack.d6803810.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Tso 3D Black T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>18</strong>.70</p>
              <h5 className="card-text"> or 4x of &dollar; 4.67</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        {/*<!--column 3-->*/}      
        <div className="col-md-3 card" style={{width: "14rem"}}>
            <img src="azma/CrazyMonkeyGrey.1fd27374.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">Crazy Monkey Grey</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>134</strong>.90</p>
              <h5 className="card-text"> or 5x of &dollar; 26.98</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

        {/*column 4*/}     
        <div className="col-md-3 card" style={{width: "14rem;"}}>
            <img src="azma/OnTheStreets.5a5265ad.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-title">On The Streets Black T-Shirt</h6>             
              <hr/>
              <p className="card-text"><span style={{fontSize: "12px"}}>&dollar;</span> <strong>10</strong>.90</p>
              <h5 className="card-text"> or 9x of &dollar; 1.21</h5>
            </div>
            <div className="card-body">
              <button type="button">Add to cart</button> 
            </div>
            <div className="top-right"><label>Free shipping</label></div>
        </div>

      </div>
    </div>
  </div>

</div>
  
    </>
  )
}

export default Product