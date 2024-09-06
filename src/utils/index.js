const mapDBActivitiesToModel = ({
  activity_id,
  title,
  description,
  date,
  image,
  category,
  created_at,
}) => ({
  activity_id,
  title,
  description,
  date,
  image,
  category,
  createdAt: created_at,
});

module.exports = { mapDBActivitiesToModel };
