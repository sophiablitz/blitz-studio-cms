const LOGIN_TEMPLATE = `
<div class="container" id="login-div">
    <div class="section heading">
      <h1>Blitz Studio Class Log in</h1>
    </div>

    <div class="section">
      <h2>Please select your profile</h2>

      <div id="user-profiles" >
      </div>
    </div>
    <div class="section">
      <h2>Or.. Add new user</h2>
      <button class="button" onclick="onClickCreateNewUser()">Add New User</button>
    </div>
  </div>
`;
const USER_DATA = `
 <div class="user-profile" data-name="" data-student="" data-email="" data-balance="">
</div>
`;
const PROFILE_TEMPLATE = `
<div class="container" id="profile-div">
  <div id="profile-info" class="section heading">
    <span id="profile-name"> </span>  
    <span id="profile-balance"> </span> 
    <span id="profile-email"> </span>
    <span id="profile-student"> </span>
    <button class="button" id="change-btn" onclick="goToUpdateInfo()">Update Info</button>
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
      <button id="Cash" class="button payment-btn" onclick="onClickPaymentMethod(this)">Cash</button>
      <button id="PayPal" class="button payment-btn" onclick="onClickPaymentMethod(this)">PayPal</button>
      <button id="Venmo" class="button payment-btn" onclick="onClickPaymentMethod(this)">Venmo</button>
      <button class="button payment-btn" onclick="onClickPaymentMethod(this)">Other</button>
    </div>
  </div>
  <button class="button" id="back-btn" onclick="goToLogin()" > << Select Different User </button>
  <button class="button" id="submit-btn" onclick="onClickSubmitSignIn()"> Submit </button>
</div>`;

const CLASS_OPTIONS_TEMPLATE = `
    <div class="class wednesday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">7pm</div>
      <div class="class-name">Beginner Salsa Series</div>
      <div class="class-cost">$30</div>
    </div>
    <div class="class wednesday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Beginner Bachata Series</div>
      <div class="class-cost">$30</div>
    </div>    
    <div class="class thursday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">7pm</div>
      <div class="class-name">Connection Workshop</div>
      <div class="class-cost">$5-$10</div>
    </div>
    <div class="class thursday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Intermediate Bachata Series</div>
      <div class="class-cost">$5-$10</div>
    </div>  

    <!-- test cases for other days-->
    <div class="class sunday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Sunday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
     <div class="class sunday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Sunday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class monday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Monday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class monday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Monday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class tuesday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Tuesday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class tuesday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Tuesday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class friday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Friday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class friday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Friday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class saturday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Saturday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
    <div class="class saturday hidden">
      <div class="done-icon">&#x2705</div>
      <div class="class-time">8pm</div>
      <div class="class-name">Saturday Test Series</div>
      <div class="class-cost">$5-$10</div>
    </div> 
  `;

const UPDATE_PROFILE_TEMPLATE = `
<div class="container" id="update-profile-div">
  <div id="profile-update" class="section heading">
    <h1>Update profile information</h1>
  </div>
  <div class="section">
    <div id="profileUpdateErrorDiv" class="hidden"> </div>
    Name: <input type="text" id="name"><br>
    Email: <input type="text" id="email"><br>
    Current MUM Student: 
    <select id="student"">
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    Default Payment Method:
    <select id="pref-payment">
      <option value="Cash">Cash</option>
      <option value="Venmo">Venmo</option>
      <option value="PayPal">PayPal</option>
    </select>

    <button id="cancel-btn" class="button" onclick="goToProfile()"> << Cancel <button>
    <button id="save-btn" class="button" onclick="onClickSaveProfileChanges()"> Save <button>
  </div>
</div>
`;
const NEW_PROFILE_TEMPLATE = `
<div class="container" id="update-profile-div">
  <div id="profile-update" class="section heading">
    <h1>Enter new profile information</h1>
  </div>
  <div class="section">
    <div id="profileUpdateErrorDiv" class="hidden"> </div>
    Name: <input type="text" id="name"><br>
    Email: <input type="text" id="email"><br>
    Current MUM Student: 
    <select id="student"">
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    Default Payment Method:
    <select id="pref-payment">
      <option value="Cash">Cash</option>
      <option value="Venmo">Venmo</option>
      <option value="PayPal">PayPal</option>
    </select>

    <button id="cancel-btn" class="button" onclick="onClickCancelCreateProfile()"> << Cancel </button>
    <button id="save-btn" class="button" onclick="onClickAddNewProfile()"> Save </button>
  </div>
</div>
`;