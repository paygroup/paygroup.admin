import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  mutation<R extends mutation_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<mutation_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    mutation: mutation_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<
  fields extends mutation_rootRequest
> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (
  fields: mutation_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumCurrency: {
  readonly CFD: 'CFD'
  readonly USD: 'USD'
}

export declare const enumauthProviderRequestsConstraint: {
  readonly provider_requests_pkey: 'provider_requests_pkey'
}

export declare const enumauthProviderRequestsSelectColumn: {
  readonly id: 'id'
  readonly options: 'options'
}

export declare const enumauthProviderRequestsUpdateColumn: {
  readonly id: 'id'
  readonly options: 'options'
}

export declare const enumauthProvidersConstraint: {
  readonly providers_pkey: 'providers_pkey'
}

export declare const enumauthProvidersSelectColumn: {
  readonly id: 'id'
}

export declare const enumauthProvidersUpdateColumn: {
  readonly id: 'id'
}

export declare const enumauthRefreshTokensConstraint: {
  readonly refresh_tokens_pkey: 'refresh_tokens_pkey'
}

export declare const enumauthRefreshTokensSelectColumn: {
  readonly createdAt: 'createdAt'
  readonly expiresAt: 'expiresAt'
  readonly refreshToken: 'refreshToken'
  readonly userId: 'userId'
}

export declare const enumauthRefreshTokensUpdateColumn: {
  readonly createdAt: 'createdAt'
  readonly expiresAt: 'expiresAt'
  readonly refreshToken: 'refreshToken'
  readonly userId: 'userId'
}

export declare const enumauthRolesConstraint: {
  readonly roles_pkey: 'roles_pkey'
}

export declare const enumauthRolesSelectColumn: {
  readonly role: 'role'
}

export declare const enumauthRolesUpdateColumn: {
  readonly role: 'role'
}

export declare const enumauthUserAuthenticatorsConstraint: {
  readonly user_authenticators_credential_id_key: 'user_authenticators_credential_id_key'
  readonly user_authenticators_pkey: 'user_authenticators_pkey'
}

export declare const enumauthUserAuthenticatorsSelectColumn: {
  readonly counter: 'counter'
  readonly credentialId: 'credentialId'
  readonly credentialPublicKey: 'credentialPublicKey'
  readonly id: 'id'
  readonly nickname: 'nickname'
  readonly transports: 'transports'
  readonly userId: 'userId'
}

export declare const enumauthUserAuthenticatorsUpdateColumn: {
  readonly counter: 'counter'
  readonly credentialId: 'credentialId'
  readonly credentialPublicKey: 'credentialPublicKey'
  readonly id: 'id'
  readonly nickname: 'nickname'
  readonly transports: 'transports'
  readonly userId: 'userId'
}

export declare const enumauthUserProvidersConstraint: {
  readonly user_providers_pkey: 'user_providers_pkey'
  readonly user_providers_provider_id_provider_user_id_key: 'user_providers_provider_id_provider_user_id_key'
  readonly user_providers_user_id_provider_id_key: 'user_providers_user_id_provider_id_key'
}

export declare const enumauthUserProvidersSelectColumn: {
  readonly accessToken: 'accessToken'
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly providerId: 'providerId'
  readonly providerUserId: 'providerUserId'
  readonly refreshToken: 'refreshToken'
  readonly updatedAt: 'updatedAt'
  readonly userId: 'userId'
}

export declare const enumauthUserProvidersUpdateColumn: {
  readonly accessToken: 'accessToken'
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly providerId: 'providerId'
  readonly providerUserId: 'providerUserId'
  readonly refreshToken: 'refreshToken'
  readonly updatedAt: 'updatedAt'
  readonly userId: 'userId'
}

export declare const enumauthUserRolesConstraint: {
  readonly user_roles_pkey: 'user_roles_pkey'
  readonly user_roles_user_id_role_key: 'user_roles_user_id_role_key'
}

export declare const enumauthUserRolesSelectColumn: {
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly role: 'role'
  readonly userId: 'userId'
}

export declare const enumauthUserRolesUpdateColumn: {
  readonly createdAt: 'createdAt'
  readonly id: 'id'
  readonly role: 'role'
  readonly userId: 'userId'
}

export declare const enumauthMigrationsConstraint: {
  readonly migrations_name_key: 'migrations_name_key'
  readonly migrations_pkey: 'migrations_pkey'
}

export declare const enumauthMigrationsSelectColumn: {
  readonly executed_at: 'executed_at'
  readonly hash: 'hash'
  readonly id: 'id'
  readonly name: 'name'
}

export declare const enumauthMigrationsUpdateColumn: {
  readonly executed_at: 'executed_at'
  readonly hash: 'hash'
  readonly id: 'id'
  readonly name: 'name'
}

export declare const enumbucketsConstraint: {
  readonly buckets_pkey: 'buckets_pkey'
}

export declare const enumbucketsSelectColumn: {
  readonly cacheControl: 'cacheControl'
  readonly createdAt: 'createdAt'
  readonly downloadExpiration: 'downloadExpiration'
  readonly id: 'id'
  readonly maxUploadFileSize: 'maxUploadFileSize'
  readonly minUploadFileSize: 'minUploadFileSize'
  readonly presignedUrlsEnabled: 'presignedUrlsEnabled'
  readonly updatedAt: 'updatedAt'
}

export declare const enumbucketsUpdateColumn: {
  readonly cacheControl: 'cacheControl'
  readonly createdAt: 'createdAt'
  readonly downloadExpiration: 'downloadExpiration'
  readonly id: 'id'
  readonly maxUploadFileSize: 'maxUploadFileSize'
  readonly minUploadFileSize: 'minUploadFileSize'
  readonly presignedUrlsEnabled: 'presignedUrlsEnabled'
  readonly updatedAt: 'updatedAt'
}

export declare const enumenNotificationsConstraint: {
  readonly enum_notifications_pkey: 'enum_notifications_pkey'
}

export declare const enumenNotificationsEnum: {
  readonly Internal: 'Internal'
  readonly Whatsapp: 'Whatsapp'
  readonly member_invitation: 'member_invitation'
  readonly member_joined: 'member_joined'
  readonly payment_reminder: 'payment_reminder'
  readonly payment_review: 'payment_review'
  readonly period_completion: 'period_completion'
}

export declare const enumenNotificationsSelectColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenNotificationsUpdateColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenPermissionsConstraint: {
  readonly en_permissions_pkey: 'en_permissions_pkey'
}

export declare const enumenPermissionsEnum: {
  readonly Accepted: 'Accepted'
  readonly Pending: 'Pending'
  readonly Rejected: 'Rejected'
}

export declare const enumenPermissionsSelectColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenPermissionsUpdateColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenRecurrenciesConstraint: {
  readonly enum_period_recurrency_description_key: 'enum_period_recurrency_description_key'
  readonly enum_period_recurrency_pkey: 'enum_period_recurrency_pkey'
}

export declare const enumenRecurrenciesEnum: {
  readonly Daily: 'Daily'
  readonly Monthly: 'Monthly'
  readonly Weekly: 'Weekly'
}

export declare const enumenRecurrenciesSelectColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenRecurrenciesUpdateColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenStatusesConstraint: {
  readonly enum_statuses_description_key: 'enum_statuses_description_key'
  readonly enum_statuses_pkey: 'enum_statuses_pkey'
}

export declare const enumenStatusesEnum: {
  readonly Cancelled: 'Cancelled'
  readonly Completed: 'Completed'
  readonly Failed: 'Failed'
  readonly Pending: 'Pending'
  readonly Processing: 'Processing'
  readonly Rejected: 'Rejected'
}

export declare const enumenStatusesSelectColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenStatusesUpdateColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenTransTypesConstraint: {
  readonly enum_trans_statuses_pkey: 'enum_trans_statuses_pkey'
}

export declare const enumenTransTypesEnum: {
  readonly MoneyIn: 'MoneyIn'
  readonly MoneyOut: 'MoneyOut'
}

export declare const enumenTransTypesSelectColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumenTransTypesUpdateColumn: {
  readonly description: 'description'
  readonly value: 'value'
}

export declare const enumfilesConstraint: {
  readonly files_pkey: 'files_pkey'
}

export declare const enumfilesSelectColumn: {
  readonly bucketId: 'bucketId'
  readonly createdAt: 'createdAt'
  readonly etag: 'etag'
  readonly id: 'id'
  readonly isUploaded: 'isUploaded'
  readonly mimeType: 'mimeType'
  readonly name: 'name'
  readonly size: 'size'
  readonly updatedAt: 'updatedAt'
  readonly uploadedByUserId: 'uploadedByUserId'
}

export declare const enumfilesUpdateColumn: {
  readonly bucketId: 'bucketId'
  readonly createdAt: 'createdAt'
  readonly etag: 'etag'
  readonly id: 'id'
  readonly isUploaded: 'isUploaded'
  readonly mimeType: 'mimeType'
  readonly name: 'name'
  readonly size: 'size'
  readonly updatedAt: 'updatedAt'
  readonly uploadedByUserId: 'uploadedByUserId'
}

export declare const enumgroupConstraint: {
  readonly group_admin_id_group_name_key: 'group_admin_id_group_name_key'
  readonly group_pkey: 'group_pkey'
}

export declare const enumgroupSelectColumn: {
  readonly admin_id: 'admin_id'
  readonly contribution: 'contribution'
  readonly contribution_for_all: 'contribution_for_all'
  readonly created_at: 'created_at'
  readonly group_name: 'group_name'
  readonly id: 'id'
  readonly recurrency: 'recurrency'
  readonly recurrency_day: 'recurrency_day'
  readonly recurrency_for_all: 'recurrency_for_all'
  readonly updated_at: 'updated_at'
}

export declare const enumgroupUpdateColumn: {
  readonly admin_id: 'admin_id'
  readonly contribution: 'contribution'
  readonly contribution_for_all: 'contribution_for_all'
  readonly created_at: 'created_at'
  readonly group_name: 'group_name'
  readonly id: 'id'
  readonly recurrency: 'recurrency'
  readonly recurrency_day: 'recurrency_day'
  readonly recurrency_for_all: 'recurrency_for_all'
  readonly updated_at: 'updated_at'
}

export declare const enuminvitationConstraint: {
  readonly invite_pkey: 'invite_pkey'
}

export declare const enuminvitationSelectColumn: {
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly invite_status: 'invite_status'
  readonly invite_type: 'invite_type'
  readonly receiver_id: 'receiver_id'
  readonly receiver_phone: 'receiver_phone'
  readonly sender_id: 'sender_id'
  readonly updated_at: 'updated_at'
}

export declare const enuminvitationUpdateColumn: {
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly invite_status: 'invite_status'
  readonly invite_type: 'invite_type'
  readonly receiver_id: 'receiver_id'
  readonly receiver_phone: 'receiver_phone'
  readonly sender_id: 'sender_id'
  readonly updated_at: 'updated_at'
}

export declare const enummemberConstraint: {
  readonly member_group_id_user_id_key: 'member_group_id_user_id_key'
  readonly member_pkey: 'member_pkey'
}

export declare const enummemberSelectColumn: {
  readonly contribution: 'contribution'
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly invitation_id: 'invitation_id'
  readonly recurrency: 'recurrency'
  readonly recurrency_day: 'recurrency_day'
  readonly reminder_days: 'reminder_days'
  readonly reminder_id: 'reminder_id'
  readonly reminder_next: 'reminder_next'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enummemberUpdateColumn: {
  readonly contribution: 'contribution'
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly invitation_id: 'invitation_id'
  readonly recurrency: 'recurrency'
  readonly recurrency_day: 'recurrency_day'
  readonly reminder_days: 'reminder_days'
  readonly reminder_id: 'reminder_id'
  readonly reminder_next: 'reminder_next'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumnotificationConstraint: {
  readonly notification_pkey: 'notification_pkey'
}

export declare const enumnotificationSelectColumn: {
  readonly created_at: 'created_at'
  readonly data: 'data'
  readonly id: 'id'
  readonly invitation_id: 'invitation_id'
  readonly is_viewed: 'is_viewed'
  readonly message: 'message'
  readonly notifiable: 'notifiable'
  readonly payment_review_id: 'payment_review_id'
  readonly period_id: 'period_id'
  readonly status: 'status'
  readonly title: 'title'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumnotificationUpdateColumn: {
  readonly created_at: 'created_at'
  readonly data: 'data'
  readonly id: 'id'
  readonly invitation_id: 'invitation_id'
  readonly is_viewed: 'is_viewed'
  readonly message: 'message'
  readonly notifiable: 'notifiable'
  readonly payment_review_id: 'payment_review_id'
  readonly period_id: 'period_id'
  readonly status: 'status'
  readonly title: 'title'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumpaymentConstraint: {
  readonly payment_pkey: 'payment_pkey'
}

export declare const enumpaymentReviewConstraint: {
  readonly payment_permission_pkey: 'payment_permission_pkey'
}

export declare const enumpaymentReviewSelectColumn: {
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly index: 'index'
  readonly notes: 'notes'
  readonly payment_id: 'payment_id'
  readonly period_id: 'period_id'
  readonly requester_id: 'requester_id'
  readonly response: 'response'
  readonly reviewer_id: 'reviewer_id'
  readonly updated_at: 'updated_at'
}

export declare const enumpaymentReviewUpdateColumn: {
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly index: 'index'
  readonly notes: 'notes'
  readonly payment_id: 'payment_id'
  readonly period_id: 'period_id'
  readonly requester_id: 'requester_id'
  readonly response: 'response'
  readonly reviewer_id: 'reviewer_id'
  readonly updated_at: 'updated_at'
}

export declare const enumpaymentSelectColumn: {
  readonly amount: 'amount'
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly member_id: 'member_id'
  readonly narration: 'narration'
  readonly payment_currency: 'payment_currency'
  readonly payment_response_code: 'payment_response_code'
  readonly payment_state: 'payment_state'
  readonly payment_url: 'payment_url'
  readonly period_id: 'period_id'
  readonly recipient_name: 'recipient_name'
  readonly recipient_phone: 'recipient_phone'
  readonly transaction_status: 'transaction_status'
  readonly transaction_type: 'transaction_type'
  readonly updated_at: 'updated_at'
}

export declare const enumpaymentUpdateColumn: {
  readonly amount: 'amount'
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly member_id: 'member_id'
  readonly narration: 'narration'
  readonly payment_currency: 'payment_currency'
  readonly payment_response_code: 'payment_response_code'
  readonly payment_state: 'payment_state'
  readonly payment_url: 'payment_url'
  readonly period_id: 'period_id'
  readonly recipient_name: 'recipient_name'
  readonly recipient_phone: 'recipient_phone'
  readonly transaction_status: 'transaction_status'
  readonly transaction_type: 'transaction_type'
  readonly updated_at: 'updated_at'
}

export declare const enumperiodConstraint: {
  readonly period_group_id_member_id_period_index_key: 'period_group_id_member_id_period_index_key'
  readonly period_pkey: 'period_pkey'
}

export declare const enumperiodSelectColumn: {
  readonly completed_at: 'completed_at'
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly member_id: 'member_id'
  readonly period_index: 'period_index'
  readonly reminder_index: 'reminder_index'
  readonly updated_at: 'updated_at'
}

export declare const enumperiodUpdateColumn: {
  readonly completed_at: 'completed_at'
  readonly created_at: 'created_at'
  readonly group_id: 'group_id'
  readonly id: 'id'
  readonly member_id: 'member_id'
  readonly period_index: 'period_index'
  readonly reminder_index: 'reminder_index'
  readonly updated_at: 'updated_at'
}

export declare const enumstateCacheConstraint: {
  readonly state_cache_pkey: 'state_cache_pkey'
}

export declare const enumstateCacheSelectColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly ref_id: 'ref_id'
  readonly state: 'state'
  readonly updated_at: 'updated_at'
}

export declare const enumstateCacheUpdateColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly ref_id: 'ref_id'
  readonly state: 'state'
  readonly updated_at: 'updated_at'
}

export declare const enumuserProfileConstraint: {
  readonly user_profile_pkey: 'user_profile_pkey'
  readonly user_profile_user_id_key: 'user_profile_user_id_key'
}

export declare const enumuserProfileSelectColumn: {
  readonly created_at: 'created_at'
  readonly expo_push_token: 'expo_push_token'
  readonly id: 'id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumuserProfileUpdateColumn: {
  readonly created_at: 'created_at'
  readonly expo_push_token: 'expo_push_token'
  readonly id: 'id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumusersConstraint: {
  readonly users_email_key: 'users_email_key'
  readonly users_phone_number_key: 'users_phone_number_key'
  readonly users_pkey: 'users_pkey'
}

export declare const enumusersSelectColumn: {
  readonly activeMfaType: 'activeMfaType'
  readonly avatarUrl: 'avatarUrl'
  readonly createdAt: 'createdAt'
  readonly currentChallenge: 'currentChallenge'
  readonly defaultRole: 'defaultRole'
  readonly disabled: 'disabled'
  readonly displayName: 'displayName'
  readonly email: 'email'
  readonly emailVerified: 'emailVerified'
  readonly id: 'id'
  readonly isAnonymous: 'isAnonymous'
  readonly lastSeen: 'lastSeen'
  readonly locale: 'locale'
  readonly metadata: 'metadata'
  readonly newEmail: 'newEmail'
  readonly otpHash: 'otpHash'
  readonly otpHashExpiresAt: 'otpHashExpiresAt'
  readonly otpMethodLastUsed: 'otpMethodLastUsed'
  readonly passwordHash: 'passwordHash'
  readonly phoneNumber: 'phoneNumber'
  readonly phoneNumberVerified: 'phoneNumberVerified'
  readonly ticket: 'ticket'
  readonly ticketExpiresAt: 'ticketExpiresAt'
  readonly totpSecret: 'totpSecret'
  readonly updatedAt: 'updatedAt'
}

export declare const enumusersUpdateColumn: {
  readonly activeMfaType: 'activeMfaType'
  readonly avatarUrl: 'avatarUrl'
  readonly createdAt: 'createdAt'
  readonly currentChallenge: 'currentChallenge'
  readonly defaultRole: 'defaultRole'
  readonly disabled: 'disabled'
  readonly displayName: 'displayName'
  readonly email: 'email'
  readonly emailVerified: 'emailVerified'
  readonly id: 'id'
  readonly isAnonymous: 'isAnonymous'
  readonly lastSeen: 'lastSeen'
  readonly locale: 'locale'
  readonly metadata: 'metadata'
  readonly newEmail: 'newEmail'
  readonly otpHash: 'otpHash'
  readonly otpHashExpiresAt: 'otpHashExpiresAt'
  readonly otpMethodLastUsed: 'otpMethodLastUsed'
  readonly passwordHash: 'passwordHash'
  readonly phoneNumber: 'phoneNumber'
  readonly phoneNumberVerified: 'phoneNumberVerified'
  readonly ticket: 'ticket'
  readonly ticketExpiresAt: 'ticketExpiresAt'
  readonly totpSecret: 'totpSecret'
  readonly updatedAt: 'updatedAt'
}
