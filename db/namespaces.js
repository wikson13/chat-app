const Namespace = require('../classes/Namespace');
const Room = require('../classes/Room');

const namespaces = [];
const schoolNs = new Namespace(0, 'School', 'imgUrl', '/school');
const workNs = new Namespace(1, 'Work', 'imgUrl', '/work');

namespaces.push(schoolNs, workNs);

schoolNs.addRoom(new Room(0, 'Room1', 'School'));
schoolNs.addRoom(new Room(1, 'Room2', 'School'));
schoolNs.addRoom(new Room(2, 'Room3', 'School'));

workNs.addRoom(new Room(0, 'Room11', 'Work'));
workNs.addRoom(new Room(1, 'Room12', 'Work'));
workNs.addRoom(new Room(2, 'Room13', 'Work'));
workNs.addRoom(new Room(3, 'Room14', 'Work'));

module.exports = namespaces;
