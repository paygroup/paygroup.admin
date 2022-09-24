const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://apqmosklbchdukswdyur.nhost.run/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumCurrency = {
  CFD: 'CFD',
  USD: 'USD',
}

module.exports.enumauthProviderRequestsConstraint = {
  provider_requests_pkey: 'provider_requests_pkey',
}

module.exports.enumauthProviderRequestsSelectColumn = {
  id: 'id',
  options: 'options',
}

module.exports.enumauthProviderRequestsUpdateColumn = {
  id: 'id',
  options: 'options',
}

module.exports.enumauthProvidersConstraint = {
  providers_pkey: 'providers_pkey',
}

module.exports.enumauthProvidersSelectColumn = {
  id: 'id',
}

module.exports.enumauthProvidersUpdateColumn = {
  id: 'id',
}

module.exports.enumauthRefreshTokensConstraint = {
  refresh_tokens_pkey: 'refresh_tokens_pkey',
}

module.exports.enumauthRefreshTokensSelectColumn = {
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  refreshToken: 'refreshToken',
  userId: 'userId',
}

module.exports.enumauthRefreshTokensUpdateColumn = {
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  refreshToken: 'refreshToken',
  userId: 'userId',
}

module.exports.enumauthRolesConstraint = {
  roles_pkey: 'roles_pkey',
}

module.exports.enumauthRolesSelectColumn = {
  role: 'role',
}

module.exports.enumauthRolesUpdateColumn = {
  role: 'role',
}

module.exports.enumauthUserAuthenticatorsConstraint = {
  user_authenticators_credential_id_key:
    'user_authenticators_credential_id_key',
  user_authenticators_pkey: 'user_authenticators_pkey',
}

module.exports.enumauthUserAuthenticatorsSelectColumn = {
  counter: 'counter',
  credentialId: 'credentialId',
  credentialPublicKey: 'credentialPublicKey',
  id: 'id',
  nickname: 'nickname',
  transports: 'transports',
  userId: 'userId',
}

module.exports.enumauthUserAuthenticatorsUpdateColumn = {
  counter: 'counter',
  credentialId: 'credentialId',
  credentialPublicKey: 'credentialPublicKey',
  id: 'id',
  nickname: 'nickname',
  transports: 'transports',
  userId: 'userId',
}

module.exports.enumauthUserProvidersConstraint = {
  user_providers_pkey: 'user_providers_pkey',
  user_providers_provider_id_provider_user_id_key:
    'user_providers_provider_id_provider_user_id_key',
  user_providers_user_id_provider_id_key:
    'user_providers_user_id_provider_id_key',
}

module.exports.enumauthUserProvidersSelectColumn = {
  accessToken: 'accessToken',
  createdAt: 'createdAt',
  id: 'id',
  providerId: 'providerId',
  providerUserId: 'providerUserId',
  refreshToken: 'refreshToken',
  updatedAt: 'updatedAt',
  userId: 'userId',
}

module.exports.enumauthUserProvidersUpdateColumn = {
  accessToken: 'accessToken',
  createdAt: 'createdAt',
  id: 'id',
  providerId: 'providerId',
  providerUserId: 'providerUserId',
  refreshToken: 'refreshToken',
  updatedAt: 'updatedAt',
  userId: 'userId',
}

module.exports.enumauthUserRolesConstraint = {
  user_roles_pkey: 'user_roles_pkey',
  user_roles_user_id_role_key: 'user_roles_user_id_role_key',
}

module.exports.enumauthUserRolesSelectColumn = {
  createdAt: 'createdAt',
  id: 'id',
  role: 'role',
  userId: 'userId',
}

module.exports.enumauthUserRolesUpdateColumn = {
  createdAt: 'createdAt',
  id: 'id',
  role: 'role',
  userId: 'userId',
}

module.exports.enumauthMigrationsConstraint = {
  migrations_name_key: 'migrations_name_key',
  migrations_pkey: 'migrations_pkey',
}

module.exports.enumauthMigrationsSelectColumn = {
  executed_at: 'executed_at',
  hash: 'hash',
  id: 'id',
  name: 'name',
}

module.exports.enumauthMigrationsUpdateColumn = {
  executed_at: 'executed_at',
  hash: 'hash',
  id: 'id',
  name: 'name',
}

module.exports.enumbucketsConstraint = {
  buckets_pkey: 'buckets_pkey',
}

module.exports.enumbucketsSelectColumn = {
  cacheControl: 'cacheControl',
  createdAt: 'createdAt',
  downloadExpiration: 'downloadExpiration',
  id: 'id',
  maxUploadFileSize: 'maxUploadFileSize',
  minUploadFileSize: 'minUploadFileSize',
  presignedUrlsEnabled: 'presignedUrlsEnabled',
  updatedAt: 'updatedAt',
}

module.exports.enumbucketsUpdateColumn = {
  cacheControl: 'cacheControl',
  createdAt: 'createdAt',
  downloadExpiration: 'downloadExpiration',
  id: 'id',
  maxUploadFileSize: 'maxUploadFileSize',
  minUploadFileSize: 'minUploadFileSize',
  presignedUrlsEnabled: 'presignedUrlsEnabled',
  updatedAt: 'updatedAt',
}

module.exports.enumenNotificationsConstraint = {
  enum_notifications_pkey: 'enum_notifications_pkey',
}

module.exports.enumenNotificationsEnum = {
  Internal: 'Internal',
  Whatsapp: 'Whatsapp',
  member_invitation: 'member_invitation',
  member_joined: 'member_joined',
  payment_reminder: 'payment_reminder',
  payment_review: 'payment_review',
  period_completion: 'period_completion',
}

module.exports.enumenNotificationsSelectColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenNotificationsUpdateColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenPermissionsConstraint = {
  en_permissions_pkey: 'en_permissions_pkey',
}

module.exports.enumenPermissionsEnum = {
  Accepted: 'Accepted',
  Pending: 'Pending',
  Rejected: 'Rejected',
}

module.exports.enumenPermissionsSelectColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenPermissionsUpdateColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenRecurrenciesConstraint = {
  enum_period_recurrency_description_key:
    'enum_period_recurrency_description_key',
  enum_period_recurrency_pkey: 'enum_period_recurrency_pkey',
}

module.exports.enumenRecurrenciesEnum = {
  Daily: 'Daily',
  Monthly: 'Monthly',
  Weekly: 'Weekly',
}

module.exports.enumenRecurrenciesSelectColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenRecurrenciesUpdateColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenStatusesConstraint = {
  enum_statuses_description_key: 'enum_statuses_description_key',
  enum_statuses_pkey: 'enum_statuses_pkey',
}

module.exports.enumenStatusesEnum = {
  Cancelled: 'Cancelled',
  Completed: 'Completed',
  Failed: 'Failed',
  Pending: 'Pending',
  Processing: 'Processing',
  Rejected: 'Rejected',
}

module.exports.enumenStatusesSelectColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenStatusesUpdateColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenTransTypesConstraint = {
  enum_trans_statuses_pkey: 'enum_trans_statuses_pkey',
}

module.exports.enumenTransTypesEnum = {
  MoneyIn: 'MoneyIn',
  MoneyOut: 'MoneyOut',
}

module.exports.enumenTransTypesSelectColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumenTransTypesUpdateColumn = {
  description: 'description',
  value: 'value',
}

module.exports.enumfilesConstraint = {
  files_pkey: 'files_pkey',
}

module.exports.enumfilesSelectColumn = {
  bucketId: 'bucketId',
  createdAt: 'createdAt',
  etag: 'etag',
  id: 'id',
  isUploaded: 'isUploaded',
  mimeType: 'mimeType',
  name: 'name',
  size: 'size',
  updatedAt: 'updatedAt',
  uploadedByUserId: 'uploadedByUserId',
}

module.exports.enumfilesUpdateColumn = {
  bucketId: 'bucketId',
  createdAt: 'createdAt',
  etag: 'etag',
  id: 'id',
  isUploaded: 'isUploaded',
  mimeType: 'mimeType',
  name: 'name',
  size: 'size',
  updatedAt: 'updatedAt',
  uploadedByUserId: 'uploadedByUserId',
}

module.exports.enumgroupConstraint = {
  group_admin_id_group_name_key: 'group_admin_id_group_name_key',
  group_pkey: 'group_pkey',
}

module.exports.enumgroupSelectColumn = {
  admin_id: 'admin_id',
  contribution: 'contribution',
  contribution_for_all: 'contribution_for_all',
  created_at: 'created_at',
  group_name: 'group_name',
  id: 'id',
  recurrency: 'recurrency',
  recurrency_day: 'recurrency_day',
  recurrency_for_all: 'recurrency_for_all',
  updated_at: 'updated_at',
}

module.exports.enumgroupUpdateColumn = {
  admin_id: 'admin_id',
  contribution: 'contribution',
  contribution_for_all: 'contribution_for_all',
  created_at: 'created_at',
  group_name: 'group_name',
  id: 'id',
  recurrency: 'recurrency',
  recurrency_day: 'recurrency_day',
  recurrency_for_all: 'recurrency_for_all',
  updated_at: 'updated_at',
}

module.exports.enuminvitationConstraint = {
  invite_pkey: 'invite_pkey',
}

module.exports.enuminvitationSelectColumn = {
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  invite_status: 'invite_status',
  invite_type: 'invite_type',
  receiver_id: 'receiver_id',
  receiver_phone: 'receiver_phone',
  sender_id: 'sender_id',
  updated_at: 'updated_at',
}

module.exports.enuminvitationUpdateColumn = {
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  invite_status: 'invite_status',
  invite_type: 'invite_type',
  receiver_id: 'receiver_id',
  receiver_phone: 'receiver_phone',
  sender_id: 'sender_id',
  updated_at: 'updated_at',
}

module.exports.enummemberConstraint = {
  member_group_id_user_id_key: 'member_group_id_user_id_key',
  member_pkey: 'member_pkey',
}

module.exports.enummemberSelectColumn = {
  contribution: 'contribution',
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  invitation_id: 'invitation_id',
  recurrency: 'recurrency',
  recurrency_day: 'recurrency_day',
  reminder_days: 'reminder_days',
  reminder_id: 'reminder_id',
  reminder_next: 'reminder_next',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enummemberUpdateColumn = {
  contribution: 'contribution',
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  invitation_id: 'invitation_id',
  recurrency: 'recurrency',
  recurrency_day: 'recurrency_day',
  reminder_days: 'reminder_days',
  reminder_id: 'reminder_id',
  reminder_next: 'reminder_next',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumnotificationConstraint = {
  notification_pkey: 'notification_pkey',
}

module.exports.enumnotificationSelectColumn = {
  created_at: 'created_at',
  data: 'data',
  id: 'id',
  invitation_id: 'invitation_id',
  is_viewed: 'is_viewed',
  message: 'message',
  notifiable: 'notifiable',
  payment_review_id: 'payment_review_id',
  period_id: 'period_id',
  status: 'status',
  title: 'title',
  type: 'type',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumnotificationUpdateColumn = {
  created_at: 'created_at',
  data: 'data',
  id: 'id',
  invitation_id: 'invitation_id',
  is_viewed: 'is_viewed',
  message: 'message',
  notifiable: 'notifiable',
  payment_review_id: 'payment_review_id',
  period_id: 'period_id',
  status: 'status',
  title: 'title',
  type: 'type',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

module.exports.enumpaymentConstraint = {
  payment_pkey: 'payment_pkey',
}

module.exports.enumpaymentReviewConstraint = {
  payment_permission_pkey: 'payment_permission_pkey',
}

module.exports.enumpaymentReviewSelectColumn = {
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  index: 'index',
  notes: 'notes',
  payment_id: 'payment_id',
  period_id: 'period_id',
  requester_id: 'requester_id',
  response: 'response',
  reviewer_id: 'reviewer_id',
  updated_at: 'updated_at',
}

module.exports.enumpaymentReviewUpdateColumn = {
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  index: 'index',
  notes: 'notes',
  payment_id: 'payment_id',
  period_id: 'period_id',
  requester_id: 'requester_id',
  response: 'response',
  reviewer_id: 'reviewer_id',
  updated_at: 'updated_at',
}

module.exports.enumpaymentSelectColumn = {
  amount: 'amount',
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  member_id: 'member_id',
  narration: 'narration',
  payment_currency: 'payment_currency',
  payment_response_code: 'payment_response_code',
  payment_state: 'payment_state',
  payment_url: 'payment_url',
  period_id: 'period_id',
  recipient_name: 'recipient_name',
  recipient_phone: 'recipient_phone',
  transaction_status: 'transaction_status',
  transaction_type: 'transaction_type',
  updated_at: 'updated_at',
}

module.exports.enumpaymentUpdateColumn = {
  amount: 'amount',
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  member_id: 'member_id',
  narration: 'narration',
  payment_currency: 'payment_currency',
  payment_response_code: 'payment_response_code',
  payment_state: 'payment_state',
  payment_url: 'payment_url',
  period_id: 'period_id',
  recipient_name: 'recipient_name',
  recipient_phone: 'recipient_phone',
  transaction_status: 'transaction_status',
  transaction_type: 'transaction_type',
  updated_at: 'updated_at',
}

module.exports.enumperiodConstraint = {
  period_group_id_member_id_period_index_key:
    'period_group_id_member_id_period_index_key',
  period_pkey: 'period_pkey',
}

module.exports.enumperiodSelectColumn = {
  completed_at: 'completed_at',
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  member_id: 'member_id',
  period_index: 'period_index',
  reminder_index: 'reminder_index',
  updated_at: 'updated_at',
}

module.exports.enumperiodUpdateColumn = {
  completed_at: 'completed_at',
  created_at: 'created_at',
  group_id: 'group_id',
  id: 'id',
  member_id: 'member_id',
  period_index: 'period_index',
  reminder_index: 'reminder_index',
  updated_at: 'updated_at',
}

module.exports.enumstateCacheConstraint = {
  state_cache_pkey: 'state_cache_pkey',
}

module.exports.enumstateCacheSelectColumn = {
  created_at: 'created_at',
  id: 'id',
  ref_id: 'ref_id',
  state: 'state',
  updated_at: 'updated_at',
}

module.exports.enumstateCacheUpdateColumn = {
  created_at: 'created_at',
  id: 'id',
  ref_id: 'ref_id',
  state: 'state',
  updated_at: 'updated_at',
}

module.exports.enumuserProfileConstraint = {
  user_profile_pkey: 'user_profile_pkey',
  user_profile_user_id_key: 'user_profile_user_id_key',
}

module.exports.enumuserProfileSelectColumn = {
  created_at: 'created_at',
  expo_push_token: 'expo_push_token',
  id: 'id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumuserProfileUpdateColumn = {
  created_at: 'created_at',
  expo_push_token: 'expo_push_token',
  id: 'id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumusersConstraint = {
  users_email_key: 'users_email_key',
  users_phone_number_key: 'users_phone_number_key',
  users_pkey: 'users_pkey',
}

module.exports.enumusersSelectColumn = {
  activeMfaType: 'activeMfaType',
  avatarUrl: 'avatarUrl',
  createdAt: 'createdAt',
  currentChallenge: 'currentChallenge',
  defaultRole: 'defaultRole',
  disabled: 'disabled',
  displayName: 'displayName',
  email: 'email',
  emailVerified: 'emailVerified',
  id: 'id',
  isAnonymous: 'isAnonymous',
  lastSeen: 'lastSeen',
  locale: 'locale',
  metadata: 'metadata',
  newEmail: 'newEmail',
  otpHash: 'otpHash',
  otpHashExpiresAt: 'otpHashExpiresAt',
  otpMethodLastUsed: 'otpMethodLastUsed',
  passwordHash: 'passwordHash',
  phoneNumber: 'phoneNumber',
  phoneNumberVerified: 'phoneNumberVerified',
  ticket: 'ticket',
  ticketExpiresAt: 'ticketExpiresAt',
  totpSecret: 'totpSecret',
  updatedAt: 'updatedAt',
}

module.exports.enumusersUpdateColumn = {
  activeMfaType: 'activeMfaType',
  avatarUrl: 'avatarUrl',
  createdAt: 'createdAt',
  currentChallenge: 'currentChallenge',
  defaultRole: 'defaultRole',
  disabled: 'disabled',
  displayName: 'displayName',
  email: 'email',
  emailVerified: 'emailVerified',
  id: 'id',
  isAnonymous: 'isAnonymous',
  lastSeen: 'lastSeen',
  locale: 'locale',
  metadata: 'metadata',
  newEmail: 'newEmail',
  otpHash: 'otpHash',
  otpHashExpiresAt: 'otpHashExpiresAt',
  otpMethodLastUsed: 'otpMethodLastUsed',
  passwordHash: 'passwordHash',
  phoneNumber: 'phoneNumber',
  phoneNumberVerified: 'phoneNumberVerified',
  ticket: 'ticket',
  ticketExpiresAt: 'ticketExpiresAt',
  totpSecret: 'totpSecret',
  updatedAt: 'updatedAt',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
