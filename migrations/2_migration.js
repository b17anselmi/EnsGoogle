var Migrations = artifacts.require("./AddressBook.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
