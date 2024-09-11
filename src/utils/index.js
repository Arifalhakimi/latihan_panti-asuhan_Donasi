const mapDBActivitiesToModel = ({
  activity_id,
  title,
  description,
  date,
  image,
  category,
  created_at,
}) => ({
  activityId: activity_id,
  title,
  description,
  date,
  image,
  category,
  createdAt: created_at,
});

const mapDBProgramsToModel = ({
  program_id,
  title,
  target,
  created_at,
  updated_at,
  end_date,
  total_donasi,
}) => ({
  programId: program_id,
  title,
  target,
  createdAt: created_at,
  updatedAt: updated_at,
  endDate: end_date,
  totalDonasi: total_donasi
});

module.exports = { mapDBActivitiesToModel, mapDBProgramsToModel };
