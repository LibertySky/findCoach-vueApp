export default {
  registerCoach(context, formData) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: formData.first,
      lastName: formData.last,
      description: formData.desc,
      hourlyRate: formData.rate,
      areas: formData.areas
    };
    console.log(coachData);
    context.commit('registerCoach', coachData);
  }
};
