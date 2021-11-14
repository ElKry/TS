var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Stendard"] = 1] = "Stendard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Premium;
var membershopString = Membership[2];
console.log(membership);
console.log(membershopString);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FB"] = "FB";
    SocialMedia["INST"] = "INST";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INST;
console.log(social);
