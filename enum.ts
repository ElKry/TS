enum Membership {
  Simple,
  Stendard,
  Premium
}

const membership = Membership.Premium;
const membershopString = Membership[2];

console.log(membership);
console.log(membershopString);

enum SocialMedia {
  VK = 'VK',
  FB = 'FB',
  INST = 'INST'
}
const social = SocialMedia.INST;
console.log(social);