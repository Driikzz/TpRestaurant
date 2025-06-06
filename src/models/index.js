const User = require('./User');
const Table = require('./Table');
const Reservation = require('./Reservation');
const MenuItem = require('./MenuItem');
const ReservationTable = require('./ReservationTable');
const OpeningSlot = require('./OpeningSlot');
const ExceptionalDate = require('./ExceptionalDate');
const ExceptionalSlot = require('./ExceptionalSlot');

// Association Many-to-Many entre Reservation et Table
Reservation.belongsToMany(Table, { 
  through: ReservationTable,
  foreignKey: 'ReservationId',
  otherKey: 'TableId'
});
Table.belongsToMany(Reservation, { 
  through: ReservationTable,
  foreignKey: 'TableId',
  otherKey: 'ReservationId'
});

// Association One-to-Many entre User et Reservation
User.hasMany(Reservation, { foreignKey: 'user_id' });
Reservation.belongsTo(User, { foreignKey: 'user_id' });

// Association One-to-Many entre ExceptionalDate et ExceptionalSlot
ExceptionalDate.hasMany(ExceptionalSlot, { foreignKey: 'exceptional_date_id' });
ExceptionalSlot.belongsTo(ExceptionalDate, { foreignKey: 'exceptional_date_id' });

module.exports = {
  User,
  Table,
  Reservation,
  MenuItem,
  ReservationTable,
  OpeningSlot,
  ExceptionalDate,
  ExceptionalSlot
}; 