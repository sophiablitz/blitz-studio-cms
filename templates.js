const LOGIN_TEMPLATE = `
<div class="container" id="login-div">
    <h1>Blitz Studio Class Log in</h1>
    <h2>Please select your profile</h2>
    <div class="user-profile" data-name="Patrick" data-student="false" data-balance="0">
      <h1>Patrick</h1>
    </div>
    <div class="user-profile" data-name="Sascha" data-student="false" data-balance="0">
      <h1>Sascha</h1>
    </div>
    <div class="user-profile" data-name="Sophia" data-student="true" data-balance="0">
      <h1>Sophia</h1>
    </div>
  </div>
`;
const PROFILE_TEMPLATE = `
<div class="container" id="profile-div">
  <div id="profile-info" class="section">
    <span id="profile-name"> </span>  
    <span id="profile-balance"> </span> 
    <span id="profile-student"> </span>
  </div>
  <div id="class-selection" class="section">
    <h2>What classes are you attending tonight?</h2>
    <div id="class-list">
    </div>
  </div>
  <div id="balance-due" class="section">
    <h2>Amount due: <span id="due"></span></h2>
  </div>
  <div id="payment-method" class="section">
    <h2>Select payment method</h2>
    <div id="payment-btn-list">
      <button class="button payment-btn selected" onclick="selectPaymentMethod(this)">Cash</button>
      <button class="button payment-btn" onclick="selectPaymentMethod(this)">PayPal</button>
      <button class="button payment-btn" onclick="selectPaymentMethod(this)">Venmo</button>
      <button class="button payment-btn" onclick="selectPaymentMethod(this)">Other</button>
    </div>
  </div>
  <button class="button" id="back-btn" onclick="goToLogin()" > << back </button>
</div>`;

const CLASS_OPTIONS_TEMPLATE = `
    <div class="class wednesday hidden">
      <div class="class-time">7pm</div>
      <div class="class-name">Beginner Salsa Series</div>
      <div class="class-cost">$30</div>
    </div>
    <div class="class wednesday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Beginner Bachata Series</div>
      <div class="class-cost">$30</div>
    </div>    
    <div class="class thursday hidden">
      <div class="class-time">7pm</div>
      <div class="class-name">Connection Workshop</div>
      <div class="class-cost">$5-$10</div>
    </div>
    <div class="class thursday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Intermediate Bachata Series</div>
      <div class="class-cost">$5-$10</div>
    </div>  

    <!-- test cases for other days-->
    <div class="class sunday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Sunday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
     <div class="class sunday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Sunday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class monday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Monday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class monday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Monday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class tuesday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Tuesday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class tuesday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Tuesday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class friday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Friday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class friday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Friday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class saturday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Saturday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class saturday hidden">
      <div class="class-time">8pm</div>
      <div class="class-name">Saturday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
  `;