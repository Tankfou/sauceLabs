describe('sauce Demo', function() {

  before(browser => browser.navigateTo('https://www.saucedemo.com/'));

  it('Test sauceDemo.org', function(browser) {
    browser
      // Wait for the page
      .waitForElementVisible('#login_button_container', 10 * 1000)

      // Check if the textBox User Name is displayed
      .assert.visible('input[id=user-name]')
      // Set Value for the user Name
      .setValue('input[id=user-name]', 'standard_user')

      // Check if the textBox password is displayed
      .assert.visible('input[id=password]')
      // Set Value for the password
      .setValue('input[id=password]', 'secret_sauce')
      
      // Check if the login button is displayed
      .assert.visible('input[id=login-button]')
      // Click on the login Button
      .click('input[id=login-button]')

      // Check if the login is successfull
      .assert.visible('div[id=inventory_container')
      
      // Add Item Sauce Labs BackPack to the cart
      .click('button[id=add-to-cart-sauce-labs-backpack]')
      //Check button remove from cart is visible
      .assert.visible('button[id=remove-sauce-labs-backpack]')

      // Add Item Sauce Labs Bike Light to the cart
      .click('button[id=add-to-cart-sauce-labs-bike-light]')
      //Check button remove from cart is visible
      .assert.visible('button[id=remove-sauce-labs-bike-light]')

      //Check there is 2 items on the cart

      // Click on the cart button
      .click('div[id=shopping_cart_container]')
      // Check the 2 items is added  and can be removed
      .assert.visible('button[id=remove-sauce-labs-backpack]')
      .assert.visible('button[id=remove-sauce-labs-bike-light]')
      // Click on checkout
      .click('button[id=checkout]')

      // fill the information
      .assert.visible('input[id=first-name]')
      .assert.visible('input[id=last-name]')
      .assert.visible('input[id=postal-code]')
      .setValue('input[id=first-name]', 'MyName')
      .setValue('input[id=last-name]', 'isMyLastName')
      .setValue('input[id=postal-code]', '32190')
      //Click on Continue
      .click('input[id=continue]')

      //Click on finish
      //itemName = browser.getValue('div[class=inventory_item_name]')
      //console.log('itemName : ', itemName)
      .assert.visible('div[id=checkout_summary_container]')
      .click('button[id=finish]')

      //and back to home
      .click('button[id=back-to-products]')

  });

  after(browser => browser.end());
});