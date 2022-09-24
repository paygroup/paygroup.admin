
var Balance_possibleTypes = ['Balance']
module.exports.isBalance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBalance"')
  return Balance_possibleTypes.includes(obj.__typename)
}



var InviteOutput_possibleTypes = ['InviteOutput']
module.exports.isInviteOutput = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isInviteOutput"')
  return InviteOutput_possibleTypes.includes(obj.__typename)
}



var PeriodCompletionActionOutput_possibleTypes = ['PeriodCompletionActionOutput']
module.exports.isPeriodCompletionActionOutput = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPeriodCompletionActionOutput"')
  return PeriodCompletionActionOutput_possibleTypes.includes(obj.__typename)
}



var TestMessageOutput_possibleTypes = ['TestMessageOutput']
module.exports.isTestMessageOutput = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTestMessageOutput"')
  return TestMessageOutput_possibleTypes.includes(obj.__typename)
}



var authProviderRequests_possibleTypes = ['authProviderRequests']
module.exports.isauthProviderRequests = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviderRequests"')
  return authProviderRequests_possibleTypes.includes(obj.__typename)
}



var authProviderRequests_aggregate_possibleTypes = ['authProviderRequests_aggregate']
module.exports.isauthProviderRequests_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviderRequests_aggregate"')
  return authProviderRequests_aggregate_possibleTypes.includes(obj.__typename)
}



var authProviderRequests_aggregate_fields_possibleTypes = ['authProviderRequests_aggregate_fields']
module.exports.isauthProviderRequests_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviderRequests_aggregate_fields"')
  return authProviderRequests_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authProviderRequests_max_fields_possibleTypes = ['authProviderRequests_max_fields']
module.exports.isauthProviderRequests_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviderRequests_max_fields"')
  return authProviderRequests_max_fields_possibleTypes.includes(obj.__typename)
}



var authProviderRequests_min_fields_possibleTypes = ['authProviderRequests_min_fields']
module.exports.isauthProviderRequests_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviderRequests_min_fields"')
  return authProviderRequests_min_fields_possibleTypes.includes(obj.__typename)
}



var authProviderRequests_mutation_response_possibleTypes = ['authProviderRequests_mutation_response']
module.exports.isauthProviderRequests_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviderRequests_mutation_response"')
  return authProviderRequests_mutation_response_possibleTypes.includes(obj.__typename)
}



var authProviders_possibleTypes = ['authProviders']
module.exports.isauthProviders = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviders"')
  return authProviders_possibleTypes.includes(obj.__typename)
}



var authProviders_aggregate_possibleTypes = ['authProviders_aggregate']
module.exports.isauthProviders_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviders_aggregate"')
  return authProviders_aggregate_possibleTypes.includes(obj.__typename)
}



var authProviders_aggregate_fields_possibleTypes = ['authProviders_aggregate_fields']
module.exports.isauthProviders_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviders_aggregate_fields"')
  return authProviders_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authProviders_max_fields_possibleTypes = ['authProviders_max_fields']
module.exports.isauthProviders_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviders_max_fields"')
  return authProviders_max_fields_possibleTypes.includes(obj.__typename)
}



var authProviders_min_fields_possibleTypes = ['authProviders_min_fields']
module.exports.isauthProviders_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviders_min_fields"')
  return authProviders_min_fields_possibleTypes.includes(obj.__typename)
}



var authProviders_mutation_response_possibleTypes = ['authProviders_mutation_response']
module.exports.isauthProviders_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthProviders_mutation_response"')
  return authProviders_mutation_response_possibleTypes.includes(obj.__typename)
}



var authRefreshTokens_possibleTypes = ['authRefreshTokens']
module.exports.isauthRefreshTokens = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRefreshTokens"')
  return authRefreshTokens_possibleTypes.includes(obj.__typename)
}



var authRefreshTokens_aggregate_possibleTypes = ['authRefreshTokens_aggregate']
module.exports.isauthRefreshTokens_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_aggregate"')
  return authRefreshTokens_aggregate_possibleTypes.includes(obj.__typename)
}



var authRefreshTokens_aggregate_fields_possibleTypes = ['authRefreshTokens_aggregate_fields']
module.exports.isauthRefreshTokens_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_aggregate_fields"')
  return authRefreshTokens_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authRefreshTokens_max_fields_possibleTypes = ['authRefreshTokens_max_fields']
module.exports.isauthRefreshTokens_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_max_fields"')
  return authRefreshTokens_max_fields_possibleTypes.includes(obj.__typename)
}



var authRefreshTokens_min_fields_possibleTypes = ['authRefreshTokens_min_fields']
module.exports.isauthRefreshTokens_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_min_fields"')
  return authRefreshTokens_min_fields_possibleTypes.includes(obj.__typename)
}



var authRefreshTokens_mutation_response_possibleTypes = ['authRefreshTokens_mutation_response']
module.exports.isauthRefreshTokens_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRefreshTokens_mutation_response"')
  return authRefreshTokens_mutation_response_possibleTypes.includes(obj.__typename)
}



var authRoles_possibleTypes = ['authRoles']
module.exports.isauthRoles = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRoles"')
  return authRoles_possibleTypes.includes(obj.__typename)
}



var authRoles_aggregate_possibleTypes = ['authRoles_aggregate']
module.exports.isauthRoles_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRoles_aggregate"')
  return authRoles_aggregate_possibleTypes.includes(obj.__typename)
}



var authRoles_aggregate_fields_possibleTypes = ['authRoles_aggregate_fields']
module.exports.isauthRoles_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRoles_aggregate_fields"')
  return authRoles_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authRoles_max_fields_possibleTypes = ['authRoles_max_fields']
module.exports.isauthRoles_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRoles_max_fields"')
  return authRoles_max_fields_possibleTypes.includes(obj.__typename)
}



var authRoles_min_fields_possibleTypes = ['authRoles_min_fields']
module.exports.isauthRoles_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRoles_min_fields"')
  return authRoles_min_fields_possibleTypes.includes(obj.__typename)
}



var authRoles_mutation_response_possibleTypes = ['authRoles_mutation_response']
module.exports.isauthRoles_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthRoles_mutation_response"')
  return authRoles_mutation_response_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_possibleTypes = ['authUserAuthenticators']
module.exports.isauthUserAuthenticators = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators"')
  return authUserAuthenticators_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_aggregate_possibleTypes = ['authUserAuthenticators_aggregate']
module.exports.isauthUserAuthenticators_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_aggregate"')
  return authUserAuthenticators_aggregate_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_aggregate_fields_possibleTypes = ['authUserAuthenticators_aggregate_fields']
module.exports.isauthUserAuthenticators_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_aggregate_fields"')
  return authUserAuthenticators_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_avg_fields_possibleTypes = ['authUserAuthenticators_avg_fields']
module.exports.isauthUserAuthenticators_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_avg_fields"')
  return authUserAuthenticators_avg_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_max_fields_possibleTypes = ['authUserAuthenticators_max_fields']
module.exports.isauthUserAuthenticators_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_max_fields"')
  return authUserAuthenticators_max_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_min_fields_possibleTypes = ['authUserAuthenticators_min_fields']
module.exports.isauthUserAuthenticators_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_min_fields"')
  return authUserAuthenticators_min_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_mutation_response_possibleTypes = ['authUserAuthenticators_mutation_response']
module.exports.isauthUserAuthenticators_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_mutation_response"')
  return authUserAuthenticators_mutation_response_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_stddev_fields_possibleTypes = ['authUserAuthenticators_stddev_fields']
module.exports.isauthUserAuthenticators_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_stddev_fields"')
  return authUserAuthenticators_stddev_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_stddev_pop_fields_possibleTypes = ['authUserAuthenticators_stddev_pop_fields']
module.exports.isauthUserAuthenticators_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_stddev_pop_fields"')
  return authUserAuthenticators_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_stddev_samp_fields_possibleTypes = ['authUserAuthenticators_stddev_samp_fields']
module.exports.isauthUserAuthenticators_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_stddev_samp_fields"')
  return authUserAuthenticators_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_sum_fields_possibleTypes = ['authUserAuthenticators_sum_fields']
module.exports.isauthUserAuthenticators_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_sum_fields"')
  return authUserAuthenticators_sum_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_var_pop_fields_possibleTypes = ['authUserAuthenticators_var_pop_fields']
module.exports.isauthUserAuthenticators_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_var_pop_fields"')
  return authUserAuthenticators_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_var_samp_fields_possibleTypes = ['authUserAuthenticators_var_samp_fields']
module.exports.isauthUserAuthenticators_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_var_samp_fields"')
  return authUserAuthenticators_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var authUserAuthenticators_variance_fields_possibleTypes = ['authUserAuthenticators_variance_fields']
module.exports.isauthUserAuthenticators_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserAuthenticators_variance_fields"')
  return authUserAuthenticators_variance_fields_possibleTypes.includes(obj.__typename)
}



var authUserProviders_possibleTypes = ['authUserProviders']
module.exports.isauthUserProviders = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserProviders"')
  return authUserProviders_possibleTypes.includes(obj.__typename)
}



var authUserProviders_aggregate_possibleTypes = ['authUserProviders_aggregate']
module.exports.isauthUserProviders_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserProviders_aggregate"')
  return authUserProviders_aggregate_possibleTypes.includes(obj.__typename)
}



var authUserProviders_aggregate_fields_possibleTypes = ['authUserProviders_aggregate_fields']
module.exports.isauthUserProviders_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserProviders_aggregate_fields"')
  return authUserProviders_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authUserProviders_max_fields_possibleTypes = ['authUserProviders_max_fields']
module.exports.isauthUserProviders_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserProviders_max_fields"')
  return authUserProviders_max_fields_possibleTypes.includes(obj.__typename)
}



var authUserProviders_min_fields_possibleTypes = ['authUserProviders_min_fields']
module.exports.isauthUserProviders_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserProviders_min_fields"')
  return authUserProviders_min_fields_possibleTypes.includes(obj.__typename)
}



var authUserProviders_mutation_response_possibleTypes = ['authUserProviders_mutation_response']
module.exports.isauthUserProviders_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserProviders_mutation_response"')
  return authUserProviders_mutation_response_possibleTypes.includes(obj.__typename)
}



var authUserRoles_possibleTypes = ['authUserRoles']
module.exports.isauthUserRoles = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserRoles"')
  return authUserRoles_possibleTypes.includes(obj.__typename)
}



var authUserRoles_aggregate_possibleTypes = ['authUserRoles_aggregate']
module.exports.isauthUserRoles_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserRoles_aggregate"')
  return authUserRoles_aggregate_possibleTypes.includes(obj.__typename)
}



var authUserRoles_aggregate_fields_possibleTypes = ['authUserRoles_aggregate_fields']
module.exports.isauthUserRoles_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserRoles_aggregate_fields"')
  return authUserRoles_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var authUserRoles_max_fields_possibleTypes = ['authUserRoles_max_fields']
module.exports.isauthUserRoles_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserRoles_max_fields"')
  return authUserRoles_max_fields_possibleTypes.includes(obj.__typename)
}



var authUserRoles_min_fields_possibleTypes = ['authUserRoles_min_fields']
module.exports.isauthUserRoles_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserRoles_min_fields"')
  return authUserRoles_min_fields_possibleTypes.includes(obj.__typename)
}



var authUserRoles_mutation_response_possibleTypes = ['authUserRoles_mutation_response']
module.exports.isauthUserRoles_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauthUserRoles_mutation_response"')
  return authUserRoles_mutation_response_possibleTypes.includes(obj.__typename)
}



var auth_migrations_possibleTypes = ['auth_migrations']
module.exports.isauth_migrations = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations"')
  return auth_migrations_possibleTypes.includes(obj.__typename)
}



var auth_migrations_aggregate_possibleTypes = ['auth_migrations_aggregate']
module.exports.isauth_migrations_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_aggregate"')
  return auth_migrations_aggregate_possibleTypes.includes(obj.__typename)
}



var auth_migrations_aggregate_fields_possibleTypes = ['auth_migrations_aggregate_fields']
module.exports.isauth_migrations_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_aggregate_fields"')
  return auth_migrations_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_avg_fields_possibleTypes = ['auth_migrations_avg_fields']
module.exports.isauth_migrations_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_avg_fields"')
  return auth_migrations_avg_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_max_fields_possibleTypes = ['auth_migrations_max_fields']
module.exports.isauth_migrations_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_max_fields"')
  return auth_migrations_max_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_min_fields_possibleTypes = ['auth_migrations_min_fields']
module.exports.isauth_migrations_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_min_fields"')
  return auth_migrations_min_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_mutation_response_possibleTypes = ['auth_migrations_mutation_response']
module.exports.isauth_migrations_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_mutation_response"')
  return auth_migrations_mutation_response_possibleTypes.includes(obj.__typename)
}



var auth_migrations_stddev_fields_possibleTypes = ['auth_migrations_stddev_fields']
module.exports.isauth_migrations_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_stddev_fields"')
  return auth_migrations_stddev_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_stddev_pop_fields_possibleTypes = ['auth_migrations_stddev_pop_fields']
module.exports.isauth_migrations_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_stddev_pop_fields"')
  return auth_migrations_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_stddev_samp_fields_possibleTypes = ['auth_migrations_stddev_samp_fields']
module.exports.isauth_migrations_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_stddev_samp_fields"')
  return auth_migrations_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_sum_fields_possibleTypes = ['auth_migrations_sum_fields']
module.exports.isauth_migrations_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_sum_fields"')
  return auth_migrations_sum_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_var_pop_fields_possibleTypes = ['auth_migrations_var_pop_fields']
module.exports.isauth_migrations_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_var_pop_fields"')
  return auth_migrations_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_var_samp_fields_possibleTypes = ['auth_migrations_var_samp_fields']
module.exports.isauth_migrations_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_var_samp_fields"')
  return auth_migrations_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var auth_migrations_variance_fields_possibleTypes = ['auth_migrations_variance_fields']
module.exports.isauth_migrations_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauth_migrations_variance_fields"')
  return auth_migrations_variance_fields_possibleTypes.includes(obj.__typename)
}



var buckets_possibleTypes = ['buckets']
module.exports.isbuckets = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets"')
  return buckets_possibleTypes.includes(obj.__typename)
}



var buckets_aggregate_possibleTypes = ['buckets_aggregate']
module.exports.isbuckets_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_aggregate"')
  return buckets_aggregate_possibleTypes.includes(obj.__typename)
}



var buckets_aggregate_fields_possibleTypes = ['buckets_aggregate_fields']
module.exports.isbuckets_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_aggregate_fields"')
  return buckets_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var buckets_avg_fields_possibleTypes = ['buckets_avg_fields']
module.exports.isbuckets_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_avg_fields"')
  return buckets_avg_fields_possibleTypes.includes(obj.__typename)
}



var buckets_max_fields_possibleTypes = ['buckets_max_fields']
module.exports.isbuckets_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_max_fields"')
  return buckets_max_fields_possibleTypes.includes(obj.__typename)
}



var buckets_min_fields_possibleTypes = ['buckets_min_fields']
module.exports.isbuckets_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_min_fields"')
  return buckets_min_fields_possibleTypes.includes(obj.__typename)
}



var buckets_mutation_response_possibleTypes = ['buckets_mutation_response']
module.exports.isbuckets_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_mutation_response"')
  return buckets_mutation_response_possibleTypes.includes(obj.__typename)
}



var buckets_stddev_fields_possibleTypes = ['buckets_stddev_fields']
module.exports.isbuckets_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_stddev_fields"')
  return buckets_stddev_fields_possibleTypes.includes(obj.__typename)
}



var buckets_stddev_pop_fields_possibleTypes = ['buckets_stddev_pop_fields']
module.exports.isbuckets_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_stddev_pop_fields"')
  return buckets_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var buckets_stddev_samp_fields_possibleTypes = ['buckets_stddev_samp_fields']
module.exports.isbuckets_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_stddev_samp_fields"')
  return buckets_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var buckets_sum_fields_possibleTypes = ['buckets_sum_fields']
module.exports.isbuckets_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_sum_fields"')
  return buckets_sum_fields_possibleTypes.includes(obj.__typename)
}



var buckets_var_pop_fields_possibleTypes = ['buckets_var_pop_fields']
module.exports.isbuckets_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_var_pop_fields"')
  return buckets_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var buckets_var_samp_fields_possibleTypes = ['buckets_var_samp_fields']
module.exports.isbuckets_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_var_samp_fields"')
  return buckets_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var buckets_variance_fields_possibleTypes = ['buckets_variance_fields']
module.exports.isbuckets_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isbuckets_variance_fields"')
  return buckets_variance_fields_possibleTypes.includes(obj.__typename)
}



var en_notifications_possibleTypes = ['en_notifications']
module.exports.isen_notifications = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_notifications"')
  return en_notifications_possibleTypes.includes(obj.__typename)
}



var en_notifications_aggregate_possibleTypes = ['en_notifications_aggregate']
module.exports.isen_notifications_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_notifications_aggregate"')
  return en_notifications_aggregate_possibleTypes.includes(obj.__typename)
}



var en_notifications_aggregate_fields_possibleTypes = ['en_notifications_aggregate_fields']
module.exports.isen_notifications_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_notifications_aggregate_fields"')
  return en_notifications_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var en_notifications_max_fields_possibleTypes = ['en_notifications_max_fields']
module.exports.isen_notifications_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_notifications_max_fields"')
  return en_notifications_max_fields_possibleTypes.includes(obj.__typename)
}



var en_notifications_min_fields_possibleTypes = ['en_notifications_min_fields']
module.exports.isen_notifications_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_notifications_min_fields"')
  return en_notifications_min_fields_possibleTypes.includes(obj.__typename)
}



var en_notifications_mutation_response_possibleTypes = ['en_notifications_mutation_response']
module.exports.isen_notifications_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_notifications_mutation_response"')
  return en_notifications_mutation_response_possibleTypes.includes(obj.__typename)
}



var en_permissions_possibleTypes = ['en_permissions']
module.exports.isen_permissions = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_permissions"')
  return en_permissions_possibleTypes.includes(obj.__typename)
}



var en_permissions_aggregate_possibleTypes = ['en_permissions_aggregate']
module.exports.isen_permissions_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_permissions_aggregate"')
  return en_permissions_aggregate_possibleTypes.includes(obj.__typename)
}



var en_permissions_aggregate_fields_possibleTypes = ['en_permissions_aggregate_fields']
module.exports.isen_permissions_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_permissions_aggregate_fields"')
  return en_permissions_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var en_permissions_max_fields_possibleTypes = ['en_permissions_max_fields']
module.exports.isen_permissions_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_permissions_max_fields"')
  return en_permissions_max_fields_possibleTypes.includes(obj.__typename)
}



var en_permissions_min_fields_possibleTypes = ['en_permissions_min_fields']
module.exports.isen_permissions_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_permissions_min_fields"')
  return en_permissions_min_fields_possibleTypes.includes(obj.__typename)
}



var en_permissions_mutation_response_possibleTypes = ['en_permissions_mutation_response']
module.exports.isen_permissions_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_permissions_mutation_response"')
  return en_permissions_mutation_response_possibleTypes.includes(obj.__typename)
}



var en_recurrencies_possibleTypes = ['en_recurrencies']
module.exports.isen_recurrencies = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_recurrencies"')
  return en_recurrencies_possibleTypes.includes(obj.__typename)
}



var en_recurrencies_aggregate_possibleTypes = ['en_recurrencies_aggregate']
module.exports.isen_recurrencies_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_recurrencies_aggregate"')
  return en_recurrencies_aggregate_possibleTypes.includes(obj.__typename)
}



var en_recurrencies_aggregate_fields_possibleTypes = ['en_recurrencies_aggregate_fields']
module.exports.isen_recurrencies_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_recurrencies_aggregate_fields"')
  return en_recurrencies_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var en_recurrencies_max_fields_possibleTypes = ['en_recurrencies_max_fields']
module.exports.isen_recurrencies_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_recurrencies_max_fields"')
  return en_recurrencies_max_fields_possibleTypes.includes(obj.__typename)
}



var en_recurrencies_min_fields_possibleTypes = ['en_recurrencies_min_fields']
module.exports.isen_recurrencies_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_recurrencies_min_fields"')
  return en_recurrencies_min_fields_possibleTypes.includes(obj.__typename)
}



var en_recurrencies_mutation_response_possibleTypes = ['en_recurrencies_mutation_response']
module.exports.isen_recurrencies_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_recurrencies_mutation_response"')
  return en_recurrencies_mutation_response_possibleTypes.includes(obj.__typename)
}



var en_statuses_possibleTypes = ['en_statuses']
module.exports.isen_statuses = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_statuses"')
  return en_statuses_possibleTypes.includes(obj.__typename)
}



var en_statuses_aggregate_possibleTypes = ['en_statuses_aggregate']
module.exports.isen_statuses_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_statuses_aggregate"')
  return en_statuses_aggregate_possibleTypes.includes(obj.__typename)
}



var en_statuses_aggregate_fields_possibleTypes = ['en_statuses_aggregate_fields']
module.exports.isen_statuses_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_statuses_aggregate_fields"')
  return en_statuses_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var en_statuses_max_fields_possibleTypes = ['en_statuses_max_fields']
module.exports.isen_statuses_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_statuses_max_fields"')
  return en_statuses_max_fields_possibleTypes.includes(obj.__typename)
}



var en_statuses_min_fields_possibleTypes = ['en_statuses_min_fields']
module.exports.isen_statuses_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_statuses_min_fields"')
  return en_statuses_min_fields_possibleTypes.includes(obj.__typename)
}



var en_statuses_mutation_response_possibleTypes = ['en_statuses_mutation_response']
module.exports.isen_statuses_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_statuses_mutation_response"')
  return en_statuses_mutation_response_possibleTypes.includes(obj.__typename)
}



var en_trans_types_possibleTypes = ['en_trans_types']
module.exports.isen_trans_types = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_trans_types"')
  return en_trans_types_possibleTypes.includes(obj.__typename)
}



var en_trans_types_aggregate_possibleTypes = ['en_trans_types_aggregate']
module.exports.isen_trans_types_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_trans_types_aggregate"')
  return en_trans_types_aggregate_possibleTypes.includes(obj.__typename)
}



var en_trans_types_aggregate_fields_possibleTypes = ['en_trans_types_aggregate_fields']
module.exports.isen_trans_types_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_trans_types_aggregate_fields"')
  return en_trans_types_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var en_trans_types_max_fields_possibleTypes = ['en_trans_types_max_fields']
module.exports.isen_trans_types_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_trans_types_max_fields"')
  return en_trans_types_max_fields_possibleTypes.includes(obj.__typename)
}



var en_trans_types_min_fields_possibleTypes = ['en_trans_types_min_fields']
module.exports.isen_trans_types_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_trans_types_min_fields"')
  return en_trans_types_min_fields_possibleTypes.includes(obj.__typename)
}



var en_trans_types_mutation_response_possibleTypes = ['en_trans_types_mutation_response']
module.exports.isen_trans_types_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isen_trans_types_mutation_response"')
  return en_trans_types_mutation_response_possibleTypes.includes(obj.__typename)
}



var files_possibleTypes = ['files']
module.exports.isfiles = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles"')
  return files_possibleTypes.includes(obj.__typename)
}



var files_aggregate_possibleTypes = ['files_aggregate']
module.exports.isfiles_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_aggregate"')
  return files_aggregate_possibleTypes.includes(obj.__typename)
}



var files_aggregate_fields_possibleTypes = ['files_aggregate_fields']
module.exports.isfiles_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_aggregate_fields"')
  return files_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var files_avg_fields_possibleTypes = ['files_avg_fields']
module.exports.isfiles_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_avg_fields"')
  return files_avg_fields_possibleTypes.includes(obj.__typename)
}



var files_max_fields_possibleTypes = ['files_max_fields']
module.exports.isfiles_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_max_fields"')
  return files_max_fields_possibleTypes.includes(obj.__typename)
}



var files_min_fields_possibleTypes = ['files_min_fields']
module.exports.isfiles_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_min_fields"')
  return files_min_fields_possibleTypes.includes(obj.__typename)
}



var files_mutation_response_possibleTypes = ['files_mutation_response']
module.exports.isfiles_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_mutation_response"')
  return files_mutation_response_possibleTypes.includes(obj.__typename)
}



var files_stddev_fields_possibleTypes = ['files_stddev_fields']
module.exports.isfiles_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_stddev_fields"')
  return files_stddev_fields_possibleTypes.includes(obj.__typename)
}



var files_stddev_pop_fields_possibleTypes = ['files_stddev_pop_fields']
module.exports.isfiles_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_stddev_pop_fields"')
  return files_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var files_stddev_samp_fields_possibleTypes = ['files_stddev_samp_fields']
module.exports.isfiles_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_stddev_samp_fields"')
  return files_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var files_sum_fields_possibleTypes = ['files_sum_fields']
module.exports.isfiles_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_sum_fields"')
  return files_sum_fields_possibleTypes.includes(obj.__typename)
}



var files_var_pop_fields_possibleTypes = ['files_var_pop_fields']
module.exports.isfiles_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_var_pop_fields"')
  return files_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var files_var_samp_fields_possibleTypes = ['files_var_samp_fields']
module.exports.isfiles_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_var_samp_fields"')
  return files_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var files_variance_fields_possibleTypes = ['files_variance_fields']
module.exports.isfiles_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfiles_variance_fields"')
  return files_variance_fields_possibleTypes.includes(obj.__typename)
}



var group_possibleTypes = ['group']
module.exports.isgroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup"')
  return group_possibleTypes.includes(obj.__typename)
}



var group_aggregate_possibleTypes = ['group_aggregate']
module.exports.isgroup_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_aggregate"')
  return group_aggregate_possibleTypes.includes(obj.__typename)
}



var group_aggregate_fields_possibleTypes = ['group_aggregate_fields']
module.exports.isgroup_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_aggregate_fields"')
  return group_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var group_avg_fields_possibleTypes = ['group_avg_fields']
module.exports.isgroup_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_avg_fields"')
  return group_avg_fields_possibleTypes.includes(obj.__typename)
}



var group_max_fields_possibleTypes = ['group_max_fields']
module.exports.isgroup_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_max_fields"')
  return group_max_fields_possibleTypes.includes(obj.__typename)
}



var group_min_fields_possibleTypes = ['group_min_fields']
module.exports.isgroup_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_min_fields"')
  return group_min_fields_possibleTypes.includes(obj.__typename)
}



var group_mutation_response_possibleTypes = ['group_mutation_response']
module.exports.isgroup_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_mutation_response"')
  return group_mutation_response_possibleTypes.includes(obj.__typename)
}



var group_stddev_fields_possibleTypes = ['group_stddev_fields']
module.exports.isgroup_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_stddev_fields"')
  return group_stddev_fields_possibleTypes.includes(obj.__typename)
}



var group_stddev_pop_fields_possibleTypes = ['group_stddev_pop_fields']
module.exports.isgroup_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_stddev_pop_fields"')
  return group_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var group_stddev_samp_fields_possibleTypes = ['group_stddev_samp_fields']
module.exports.isgroup_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_stddev_samp_fields"')
  return group_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var group_sum_fields_possibleTypes = ['group_sum_fields']
module.exports.isgroup_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_sum_fields"')
  return group_sum_fields_possibleTypes.includes(obj.__typename)
}



var group_var_pop_fields_possibleTypes = ['group_var_pop_fields']
module.exports.isgroup_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_var_pop_fields"')
  return group_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var group_var_samp_fields_possibleTypes = ['group_var_samp_fields']
module.exports.isgroup_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_var_samp_fields"')
  return group_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var group_variance_fields_possibleTypes = ['group_variance_fields']
module.exports.isgroup_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isgroup_variance_fields"')
  return group_variance_fields_possibleTypes.includes(obj.__typename)
}



var invitation_possibleTypes = ['invitation']
module.exports.isinvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isinvitation"')
  return invitation_possibleTypes.includes(obj.__typename)
}



var invitation_aggregate_possibleTypes = ['invitation_aggregate']
module.exports.isinvitation_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isinvitation_aggregate"')
  return invitation_aggregate_possibleTypes.includes(obj.__typename)
}



var invitation_aggregate_fields_possibleTypes = ['invitation_aggregate_fields']
module.exports.isinvitation_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isinvitation_aggregate_fields"')
  return invitation_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var invitation_max_fields_possibleTypes = ['invitation_max_fields']
module.exports.isinvitation_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isinvitation_max_fields"')
  return invitation_max_fields_possibleTypes.includes(obj.__typename)
}



var invitation_min_fields_possibleTypes = ['invitation_min_fields']
module.exports.isinvitation_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isinvitation_min_fields"')
  return invitation_min_fields_possibleTypes.includes(obj.__typename)
}



var invitation_mutation_response_possibleTypes = ['invitation_mutation_response']
module.exports.isinvitation_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isinvitation_mutation_response"')
  return invitation_mutation_response_possibleTypes.includes(obj.__typename)
}



var member_possibleTypes = ['member']
module.exports.ismember = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember"')
  return member_possibleTypes.includes(obj.__typename)
}



var member_aggregate_possibleTypes = ['member_aggregate']
module.exports.ismember_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_aggregate"')
  return member_aggregate_possibleTypes.includes(obj.__typename)
}



var member_aggregate_fields_possibleTypes = ['member_aggregate_fields']
module.exports.ismember_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_aggregate_fields"')
  return member_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var member_avg_fields_possibleTypes = ['member_avg_fields']
module.exports.ismember_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_avg_fields"')
  return member_avg_fields_possibleTypes.includes(obj.__typename)
}



var member_max_fields_possibleTypes = ['member_max_fields']
module.exports.ismember_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_max_fields"')
  return member_max_fields_possibleTypes.includes(obj.__typename)
}



var member_min_fields_possibleTypes = ['member_min_fields']
module.exports.ismember_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_min_fields"')
  return member_min_fields_possibleTypes.includes(obj.__typename)
}



var member_mutation_response_possibleTypes = ['member_mutation_response']
module.exports.ismember_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_mutation_response"')
  return member_mutation_response_possibleTypes.includes(obj.__typename)
}



var member_stddev_fields_possibleTypes = ['member_stddev_fields']
module.exports.ismember_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_stddev_fields"')
  return member_stddev_fields_possibleTypes.includes(obj.__typename)
}



var member_stddev_pop_fields_possibleTypes = ['member_stddev_pop_fields']
module.exports.ismember_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_stddev_pop_fields"')
  return member_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var member_stddev_samp_fields_possibleTypes = ['member_stddev_samp_fields']
module.exports.ismember_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_stddev_samp_fields"')
  return member_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var member_sum_fields_possibleTypes = ['member_sum_fields']
module.exports.ismember_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_sum_fields"')
  return member_sum_fields_possibleTypes.includes(obj.__typename)
}



var member_var_pop_fields_possibleTypes = ['member_var_pop_fields']
module.exports.ismember_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_var_pop_fields"')
  return member_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var member_var_samp_fields_possibleTypes = ['member_var_samp_fields']
module.exports.ismember_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_var_samp_fields"')
  return member_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var member_variance_fields_possibleTypes = ['member_variance_fields']
module.exports.ismember_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismember_variance_fields"')
  return member_variance_fields_possibleTypes.includes(obj.__typename)
}



var mutation_root_possibleTypes = ['mutation_root']
module.exports.ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var notification_possibleTypes = ['notification']
module.exports.isnotification = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotification"')
  return notification_possibleTypes.includes(obj.__typename)
}



var notification_aggregate_possibleTypes = ['notification_aggregate']
module.exports.isnotification_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotification_aggregate"')
  return notification_aggregate_possibleTypes.includes(obj.__typename)
}



var notification_aggregate_fields_possibleTypes = ['notification_aggregate_fields']
module.exports.isnotification_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotification_aggregate_fields"')
  return notification_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var notification_max_fields_possibleTypes = ['notification_max_fields']
module.exports.isnotification_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotification_max_fields"')
  return notification_max_fields_possibleTypes.includes(obj.__typename)
}



var notification_min_fields_possibleTypes = ['notification_min_fields']
module.exports.isnotification_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotification_min_fields"')
  return notification_min_fields_possibleTypes.includes(obj.__typename)
}



var notification_mutation_response_possibleTypes = ['notification_mutation_response']
module.exports.isnotification_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotification_mutation_response"')
  return notification_mutation_response_possibleTypes.includes(obj.__typename)
}



var payment_possibleTypes = ['payment']
module.exports.ispayment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment"')
  return payment_possibleTypes.includes(obj.__typename)
}



var payment_aggregate_possibleTypes = ['payment_aggregate']
module.exports.ispayment_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_aggregate"')
  return payment_aggregate_possibleTypes.includes(obj.__typename)
}



var payment_aggregate_fields_possibleTypes = ['payment_aggregate_fields']
module.exports.ispayment_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_aggregate_fields"')
  return payment_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var payment_avg_fields_possibleTypes = ['payment_avg_fields']
module.exports.ispayment_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_avg_fields"')
  return payment_avg_fields_possibleTypes.includes(obj.__typename)
}



var payment_max_fields_possibleTypes = ['payment_max_fields']
module.exports.ispayment_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_max_fields"')
  return payment_max_fields_possibleTypes.includes(obj.__typename)
}



var payment_min_fields_possibleTypes = ['payment_min_fields']
module.exports.ispayment_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_min_fields"')
  return payment_min_fields_possibleTypes.includes(obj.__typename)
}



var payment_mutation_response_possibleTypes = ['payment_mutation_response']
module.exports.ispayment_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_mutation_response"')
  return payment_mutation_response_possibleTypes.includes(obj.__typename)
}



var payment_review_possibleTypes = ['payment_review']
module.exports.ispayment_review = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review"')
  return payment_review_possibleTypes.includes(obj.__typename)
}



var payment_review_aggregate_possibleTypes = ['payment_review_aggregate']
module.exports.ispayment_review_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_aggregate"')
  return payment_review_aggregate_possibleTypes.includes(obj.__typename)
}



var payment_review_aggregate_fields_possibleTypes = ['payment_review_aggregate_fields']
module.exports.ispayment_review_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_aggregate_fields"')
  return payment_review_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_avg_fields_possibleTypes = ['payment_review_avg_fields']
module.exports.ispayment_review_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_avg_fields"')
  return payment_review_avg_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_max_fields_possibleTypes = ['payment_review_max_fields']
module.exports.ispayment_review_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_max_fields"')
  return payment_review_max_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_min_fields_possibleTypes = ['payment_review_min_fields']
module.exports.ispayment_review_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_min_fields"')
  return payment_review_min_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_mutation_response_possibleTypes = ['payment_review_mutation_response']
module.exports.ispayment_review_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_mutation_response"')
  return payment_review_mutation_response_possibleTypes.includes(obj.__typename)
}



var payment_review_stddev_fields_possibleTypes = ['payment_review_stddev_fields']
module.exports.ispayment_review_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_stddev_fields"')
  return payment_review_stddev_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_stddev_pop_fields_possibleTypes = ['payment_review_stddev_pop_fields']
module.exports.ispayment_review_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_stddev_pop_fields"')
  return payment_review_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_stddev_samp_fields_possibleTypes = ['payment_review_stddev_samp_fields']
module.exports.ispayment_review_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_stddev_samp_fields"')
  return payment_review_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_sum_fields_possibleTypes = ['payment_review_sum_fields']
module.exports.ispayment_review_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_sum_fields"')
  return payment_review_sum_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_var_pop_fields_possibleTypes = ['payment_review_var_pop_fields']
module.exports.ispayment_review_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_var_pop_fields"')
  return payment_review_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_var_samp_fields_possibleTypes = ['payment_review_var_samp_fields']
module.exports.ispayment_review_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_var_samp_fields"')
  return payment_review_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var payment_review_variance_fields_possibleTypes = ['payment_review_variance_fields']
module.exports.ispayment_review_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_review_variance_fields"')
  return payment_review_variance_fields_possibleTypes.includes(obj.__typename)
}



var payment_stddev_fields_possibleTypes = ['payment_stddev_fields']
module.exports.ispayment_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_stddev_fields"')
  return payment_stddev_fields_possibleTypes.includes(obj.__typename)
}



var payment_stddev_pop_fields_possibleTypes = ['payment_stddev_pop_fields']
module.exports.ispayment_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_stddev_pop_fields"')
  return payment_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var payment_stddev_samp_fields_possibleTypes = ['payment_stddev_samp_fields']
module.exports.ispayment_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_stddev_samp_fields"')
  return payment_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var payment_sum_fields_possibleTypes = ['payment_sum_fields']
module.exports.ispayment_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_sum_fields"')
  return payment_sum_fields_possibleTypes.includes(obj.__typename)
}



var payment_var_pop_fields_possibleTypes = ['payment_var_pop_fields']
module.exports.ispayment_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_var_pop_fields"')
  return payment_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var payment_var_samp_fields_possibleTypes = ['payment_var_samp_fields']
module.exports.ispayment_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_var_samp_fields"')
  return payment_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var payment_variance_fields_possibleTypes = ['payment_variance_fields']
module.exports.ispayment_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ispayment_variance_fields"')
  return payment_variance_fields_possibleTypes.includes(obj.__typename)
}



var period_possibleTypes = ['period']
module.exports.isperiod = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod"')
  return period_possibleTypes.includes(obj.__typename)
}



var period_aggregate_possibleTypes = ['period_aggregate']
module.exports.isperiod_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_aggregate"')
  return period_aggregate_possibleTypes.includes(obj.__typename)
}



var period_aggregate_fields_possibleTypes = ['period_aggregate_fields']
module.exports.isperiod_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_aggregate_fields"')
  return period_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var period_avg_fields_possibleTypes = ['period_avg_fields']
module.exports.isperiod_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_avg_fields"')
  return period_avg_fields_possibleTypes.includes(obj.__typename)
}



var period_max_fields_possibleTypes = ['period_max_fields']
module.exports.isperiod_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_max_fields"')
  return period_max_fields_possibleTypes.includes(obj.__typename)
}



var period_min_fields_possibleTypes = ['period_min_fields']
module.exports.isperiod_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_min_fields"')
  return period_min_fields_possibleTypes.includes(obj.__typename)
}



var period_mutation_response_possibleTypes = ['period_mutation_response']
module.exports.isperiod_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_mutation_response"')
  return period_mutation_response_possibleTypes.includes(obj.__typename)
}



var period_stddev_fields_possibleTypes = ['period_stddev_fields']
module.exports.isperiod_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_stddev_fields"')
  return period_stddev_fields_possibleTypes.includes(obj.__typename)
}



var period_stddev_pop_fields_possibleTypes = ['period_stddev_pop_fields']
module.exports.isperiod_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_stddev_pop_fields"')
  return period_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var period_stddev_samp_fields_possibleTypes = ['period_stddev_samp_fields']
module.exports.isperiod_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_stddev_samp_fields"')
  return period_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var period_sum_fields_possibleTypes = ['period_sum_fields']
module.exports.isperiod_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_sum_fields"')
  return period_sum_fields_possibleTypes.includes(obj.__typename)
}



var period_var_pop_fields_possibleTypes = ['period_var_pop_fields']
module.exports.isperiod_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_var_pop_fields"')
  return period_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var period_var_samp_fields_possibleTypes = ['period_var_samp_fields']
module.exports.isperiod_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_var_samp_fields"')
  return period_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var period_variance_fields_possibleTypes = ['period_variance_fields']
module.exports.isperiod_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isperiod_variance_fields"')
  return period_variance_fields_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
module.exports.isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var state_cache_possibleTypes = ['state_cache']
module.exports.isstate_cache = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isstate_cache"')
  return state_cache_possibleTypes.includes(obj.__typename)
}



var state_cache_aggregate_possibleTypes = ['state_cache_aggregate']
module.exports.isstate_cache_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isstate_cache_aggregate"')
  return state_cache_aggregate_possibleTypes.includes(obj.__typename)
}



var state_cache_aggregate_fields_possibleTypes = ['state_cache_aggregate_fields']
module.exports.isstate_cache_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isstate_cache_aggregate_fields"')
  return state_cache_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var state_cache_max_fields_possibleTypes = ['state_cache_max_fields']
module.exports.isstate_cache_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isstate_cache_max_fields"')
  return state_cache_max_fields_possibleTypes.includes(obj.__typename)
}



var state_cache_min_fields_possibleTypes = ['state_cache_min_fields']
module.exports.isstate_cache_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isstate_cache_min_fields"')
  return state_cache_min_fields_possibleTypes.includes(obj.__typename)
}



var state_cache_mutation_response_possibleTypes = ['state_cache_mutation_response']
module.exports.isstate_cache_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isstate_cache_mutation_response"')
  return state_cache_mutation_response_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
module.exports.issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var user_profile_possibleTypes = ['user_profile']
module.exports.isuser_profile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_profile"')
  return user_profile_possibleTypes.includes(obj.__typename)
}



var user_profile_aggregate_possibleTypes = ['user_profile_aggregate']
module.exports.isuser_profile_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_profile_aggregate"')
  return user_profile_aggregate_possibleTypes.includes(obj.__typename)
}



var user_profile_aggregate_fields_possibleTypes = ['user_profile_aggregate_fields']
module.exports.isuser_profile_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_profile_aggregate_fields"')
  return user_profile_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var user_profile_max_fields_possibleTypes = ['user_profile_max_fields']
module.exports.isuser_profile_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_profile_max_fields"')
  return user_profile_max_fields_possibleTypes.includes(obj.__typename)
}



var user_profile_min_fields_possibleTypes = ['user_profile_min_fields']
module.exports.isuser_profile_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_profile_min_fields"')
  return user_profile_min_fields_possibleTypes.includes(obj.__typename)
}



var user_profile_mutation_response_possibleTypes = ['user_profile_mutation_response']
module.exports.isuser_profile_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_profile_mutation_response"')
  return user_profile_mutation_response_possibleTypes.includes(obj.__typename)
}



var users_possibleTypes = ['users']
module.exports.isusers = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isusers"')
  return users_possibleTypes.includes(obj.__typename)
}



var users_aggregate_possibleTypes = ['users_aggregate']
module.exports.isusers_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isusers_aggregate"')
  return users_aggregate_possibleTypes.includes(obj.__typename)
}



var users_aggregate_fields_possibleTypes = ['users_aggregate_fields']
module.exports.isusers_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isusers_aggregate_fields"')
  return users_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var users_max_fields_possibleTypes = ['users_max_fields']
module.exports.isusers_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isusers_max_fields"')
  return users_max_fields_possibleTypes.includes(obj.__typename)
}



var users_min_fields_possibleTypes = ['users_min_fields']
module.exports.isusers_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isusers_min_fields"')
  return users_min_fields_possibleTypes.includes(obj.__typename)
}



var users_mutation_response_possibleTypes = ['users_mutation_response']
module.exports.isusers_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isusers_mutation_response"')
  return users_mutation_response_possibleTypes.includes(obj.__typename)
}
