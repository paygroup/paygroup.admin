var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/graphql/genql-sdk/types.cjs.js
var require_types_cjs = __commonJS({
  "app/graphql/genql-sdk/types.cjs.js"(exports, module2) {
    "use strict";
    module2.exports = {
      scalars: [
        1,
        3,
        4,
        5,
        11,
        20,
        32,
        34,
        40,
        49,
        51,
        59,
        69,
        71,
        77,
        86,
        88,
        98,
        109,
        119,
        133,
        143,
        145,
        153,
        163,
        165,
        172,
        181,
        187,
        192,
        199,
        209,
        215,
        220,
        222,
        228,
        229,
        239,
        241,
        247,
        248,
        258,
        260,
        266,
        267,
        277,
        279,
        285,
        286,
        296,
        298,
        304,
        305,
        315,
        317,
        327,
        338,
        348,
        364,
        376,
        386,
        400,
        411,
        413,
        415,
        417,
        428,
        440,
        450,
        464,
        474,
        476,
        478,
        480,
        489,
        509,
        521,
        531,
        539,
        549,
        565,
        577,
        587,
        599,
        607,
        609,
        611,
        613,
        619,
        628,
        630,
        639,
        654,
        656,
        658
      ],
      types: {
        Balance: {
          balance: [
            4
          ],
          currency: [
            3
          ],
          __typename: [
            11
          ]
        },
        Boolean: {},
        Boolean_comparison_exp: {
          _eq: [
            1
          ],
          _gt: [
            1
          ],
          _gte: [
            1
          ],
          _in: [
            1
          ],
          _is_null: [
            1
          ],
          _lt: [
            1
          ],
          _lte: [
            1
          ],
          _neq: [
            1
          ],
          _nin: [
            1
          ],
          __typename: [
            11
          ]
        },
        CURRENCY: {},
        Float: {},
        Int: {},
        Int_comparison_exp: {
          _eq: [
            5
          ],
          _gt: [
            5
          ],
          _gte: [
            5
          ],
          _in: [
            5
          ],
          _is_null: [
            1
          ],
          _lt: [
            5
          ],
          _lte: [
            5
          ],
          _neq: [
            5
          ],
          _nin: [
            5
          ],
          __typename: [
            11
          ]
        },
        InviteInput: {
          group_id: [
            11
          ],
          receiver_id: [
            11
          ],
          receiver_phone: [
            11
          ],
          sender_id: [
            11
          ],
          __typename: [
            11
          ]
        },
        InviteOutput: {
          invite_with_whatsapp: [
            1
          ],
          invited_already: [
            1
          ],
          invited_successfully: [
            1
          ],
          __typename: [
            11
          ]
        },
        PeriodCompletionActionInput: {
          group_id: [
            11
          ],
          __typename: [
            11
          ]
        },
        PeriodCompletionActionOutput: {
          ok: [
            1
          ],
          __typename: [
            11
          ]
        },
        String: {},
        String_comparison_exp: {
          _eq: [
            11
          ],
          _gt: [
            11
          ],
          _gte: [
            11
          ],
          _ilike: [
            11
          ],
          _in: [
            11
          ],
          _iregex: [
            11
          ],
          _is_null: [
            1
          ],
          _like: [
            11
          ],
          _lt: [
            11
          ],
          _lte: [
            11
          ],
          _neq: [
            11
          ],
          _nilike: [
            11
          ],
          _nin: [
            11
          ],
          _niregex: [
            11
          ],
          _nlike: [
            11
          ],
          _nregex: [
            11
          ],
          _nsimilar: [
            11
          ],
          _regex: [
            11
          ],
          _similar: [
            11
          ],
          __typename: [
            11
          ]
        },
        TestMessageInput: {
          message: [
            11
          ],
          user_id: [
            11
          ],
          __typename: [
            11
          ]
        },
        TestMessageOutput: {
          message: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests: {
          id: [
            658
          ],
          options: [
            417,
            {
              path: [
                11
              ]
            }
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_aggregate: {
          aggregate: [
            17
          ],
          nodes: [
            15
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                32,
                "[authProviderRequests_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            25
          ],
          min: [
            26
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_append_input: {
          options: [
            417
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_bool_exp: {
          _and: [
            19
          ],
          _not: [
            19
          ],
          _or: [
            19
          ],
          id: [
            659
          ],
          options: [
            419
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_constraint: {},
        authProviderRequests_delete_at_path_input: {
          options: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_delete_elem_input: {
          options: [
            5
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_delete_key_input: {
          options: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_insert_input: {
          id: [
            658
          ],
          options: [
            417
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_max_fields: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_min_fields: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            15
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_on_conflict: {
          constraint: [
            20
          ],
          update_columns: [
            34
          ],
          where: [
            19
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_order_by: {
          id: [
            480
          ],
          options: [
            480
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_prepend_input: {
          options: [
            417
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_select_column: {},
        authProviderRequests_set_input: {
          id: [
            658
          ],
          options: [
            417
          ],
          __typename: [
            11
          ]
        },
        authProviderRequests_update_column: {},
        authProviderRequests_updates: {
          _append: [
            18
          ],
          _delete_at_path: [
            21
          ],
          _delete_elem: [
            22
          ],
          _delete_key: [
            23
          ],
          _prepend: [
            31
          ],
          _set: [
            33
          ],
          where: [
            19
          ],
          __typename: [
            11
          ]
        },
        authProviders: {
          id: [
            11
          ],
          userProviders: [
            127,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          userProviders_aggregate: [
            128,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          __typename: [
            11
          ]
        },
        authProviders_aggregate: {
          aggregate: [
            38
          ],
          nodes: [
            36
          ],
          __typename: [
            11
          ]
        },
        authProviders_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                49,
                "[authProviders_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            42
          ],
          min: [
            43
          ],
          __typename: [
            11
          ]
        },
        authProviders_bool_exp: {
          _and: [
            39
          ],
          _not: [
            39
          ],
          _or: [
            39
          ],
          id: [
            12
          ],
          userProviders: [
            132
          ],
          __typename: [
            11
          ]
        },
        authProviders_constraint: {},
        authProviders_insert_input: {
          id: [
            11
          ],
          userProviders: [
            131
          ],
          __typename: [
            11
          ]
        },
        authProviders_max_fields: {
          id: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviders_min_fields: {
          id: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviders_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            36
          ],
          __typename: [
            11
          ]
        },
        authProviders_obj_rel_insert_input: {
          data: [
            41
          ],
          on_conflict: [
            46
          ],
          __typename: [
            11
          ]
        },
        authProviders_on_conflict: {
          constraint: [
            40
          ],
          update_columns: [
            51
          ],
          where: [
            39
          ],
          __typename: [
            11
          ]
        },
        authProviders_order_by: {
          id: [
            480
          ],
          userProviders_aggregate: [
            130
          ],
          __typename: [
            11
          ]
        },
        authProviders_pk_columns_input: {
          id: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviders_select_column: {},
        authProviders_set_input: {
          id: [
            11
          ],
          __typename: [
            11
          ]
        },
        authProviders_update_column: {},
        authProviders_updates: {
          _set: [
            50
          ],
          where: [
            39
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens: {
          createdAt: [
            613
          ],
          expiresAt: [
            613
          ],
          refreshToken: [
            658
          ],
          user: [
            632
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_aggregate: {
          aggregate: [
            55
          ],
          nodes: [
            53
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            61
          ],
          min: [
            63
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_aggregate_order_by: {
          count: [
            480
          ],
          max: [
            62
          ],
          min: [
            64
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_arr_rel_insert_input: {
          data: [
            60
          ],
          on_conflict: [
            66
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_bool_exp: {
          _and: [
            58
          ],
          _not: [
            58
          ],
          _or: [
            58
          ],
          createdAt: [
            614
          ],
          expiresAt: [
            614
          ],
          refreshToken: [
            659
          ],
          user: [
            638
          ],
          userId: [
            659
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_constraint: {},
        authRefreshTokens_insert_input: {
          createdAt: [
            613
          ],
          expiresAt: [
            613
          ],
          refreshToken: [
            658
          ],
          user: [
            649
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_max_fields: {
          createdAt: [
            613
          ],
          expiresAt: [
            613
          ],
          refreshToken: [
            658
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_max_order_by: {
          createdAt: [
            480
          ],
          expiresAt: [
            480
          ],
          refreshToken: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_min_fields: {
          createdAt: [
            613
          ],
          expiresAt: [
            613
          ],
          refreshToken: [
            658
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_min_order_by: {
          createdAt: [
            480
          ],
          expiresAt: [
            480
          ],
          refreshToken: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            53
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_on_conflict: {
          constraint: [
            59
          ],
          update_columns: [
            71
          ],
          where: [
            58
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_order_by: {
          createdAt: [
            480
          ],
          expiresAt: [
            480
          ],
          refreshToken: [
            480
          ],
          user: [
            651
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_pk_columns_input: {
          refreshToken: [
            658
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_select_column: {},
        authRefreshTokens_set_input: {
          createdAt: [
            613
          ],
          expiresAt: [
            613
          ],
          refreshToken: [
            658
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authRefreshTokens_update_column: {},
        authRefreshTokens_updates: {
          _set: [
            70
          ],
          where: [
            58
          ],
          __typename: [
            11
          ]
        },
        authRoles: {
          role: [
            11
          ],
          userRoles: [
            147,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          userRoles_aggregate: [
            148,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          usersByDefaultRole: [
            632,
            {
              distinct_on: [
                654,
                "[users_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                651,
                "[users_order_by!]"
              ],
              where: [
                638
              ]
            }
          ],
          usersByDefaultRole_aggregate: [
            633,
            {
              distinct_on: [
                654,
                "[users_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                651,
                "[users_order_by!]"
              ],
              where: [
                638
              ]
            }
          ],
          __typename: [
            11
          ]
        },
        authRoles_aggregate: {
          aggregate: [
            75
          ],
          nodes: [
            73
          ],
          __typename: [
            11
          ]
        },
        authRoles_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                86,
                "[authRoles_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            79
          ],
          min: [
            80
          ],
          __typename: [
            11
          ]
        },
        authRoles_bool_exp: {
          _and: [
            76
          ],
          _not: [
            76
          ],
          _or: [
            76
          ],
          role: [
            12
          ],
          userRoles: [
            152
          ],
          usersByDefaultRole: [
            638
          ],
          __typename: [
            11
          ]
        },
        authRoles_constraint: {},
        authRoles_insert_input: {
          role: [
            11
          ],
          userRoles: [
            151
          ],
          usersByDefaultRole: [
            637
          ],
          __typename: [
            11
          ]
        },
        authRoles_max_fields: {
          role: [
            11
          ],
          __typename: [
            11
          ]
        },
        authRoles_min_fields: {
          role: [
            11
          ],
          __typename: [
            11
          ]
        },
        authRoles_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            73
          ],
          __typename: [
            11
          ]
        },
        authRoles_obj_rel_insert_input: {
          data: [
            78
          ],
          on_conflict: [
            83
          ],
          __typename: [
            11
          ]
        },
        authRoles_on_conflict: {
          constraint: [
            77
          ],
          update_columns: [
            88
          ],
          where: [
            76
          ],
          __typename: [
            11
          ]
        },
        authRoles_order_by: {
          role: [
            480
          ],
          userRoles_aggregate: [
            150
          ],
          usersByDefaultRole_aggregate: [
            635
          ],
          __typename: [
            11
          ]
        },
        authRoles_pk_columns_input: {
          role: [
            11
          ],
          __typename: [
            11
          ]
        },
        authRoles_select_column: {},
        authRoles_set_input: {
          role: [
            11
          ],
          __typename: [
            11
          ]
        },
        authRoles_update_column: {},
        authRoles_updates: {
          _set: [
            87
          ],
          where: [
            76
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators: {
          counter: [
            192
          ],
          credentialId: [
            11
          ],
          credentialPublicKey: [
            220
          ],
          id: [
            658
          ],
          nickname: [
            11
          ],
          transports: [
            11
          ],
          user: [
            632
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_aggregate: {
          aggregate: [
            92
          ],
          nodes: [
            90
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_aggregate_fields: {
          avg: [
            95
          ],
          count: [
            5,
            {
              columns: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            101
          ],
          min: [
            103
          ],
          stddev: [
            111
          ],
          stddev_pop: [
            113
          ],
          stddev_samp: [
            115
          ],
          sum: [
            117
          ],
          var_pop: [
            121
          ],
          var_samp: [
            123
          ],
          variance: [
            125
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_aggregate_order_by: {
          avg: [
            96
          ],
          count: [
            480
          ],
          max: [
            102
          ],
          min: [
            104
          ],
          stddev: [
            112
          ],
          stddev_pop: [
            114
          ],
          stddev_samp: [
            116
          ],
          sum: [
            118
          ],
          var_pop: [
            122
          ],
          var_samp: [
            124
          ],
          variance: [
            126
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_arr_rel_insert_input: {
          data: [
            100
          ],
          on_conflict: [
            106
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_avg_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_avg_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_bool_exp: {
          _and: [
            97
          ],
          _not: [
            97
          ],
          _or: [
            97
          ],
          counter: [
            193
          ],
          credentialId: [
            12
          ],
          credentialPublicKey: [
            221
          ],
          id: [
            659
          ],
          nickname: [
            12
          ],
          transports: [
            12
          ],
          user: [
            638
          ],
          userId: [
            659
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_constraint: {},
        authUserAuthenticators_inc_input: {
          counter: [
            192
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_insert_input: {
          counter: [
            192
          ],
          credentialId: [
            11
          ],
          credentialPublicKey: [
            220
          ],
          id: [
            658
          ],
          nickname: [
            11
          ],
          transports: [
            11
          ],
          user: [
            649
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_max_fields: {
          counter: [
            192
          ],
          credentialId: [
            11
          ],
          id: [
            658
          ],
          nickname: [
            11
          ],
          transports: [
            11
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_max_order_by: {
          counter: [
            480
          ],
          credentialId: [
            480
          ],
          id: [
            480
          ],
          nickname: [
            480
          ],
          transports: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_min_fields: {
          counter: [
            192
          ],
          credentialId: [
            11
          ],
          id: [
            658
          ],
          nickname: [
            11
          ],
          transports: [
            11
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_min_order_by: {
          counter: [
            480
          ],
          credentialId: [
            480
          ],
          id: [
            480
          ],
          nickname: [
            480
          ],
          transports: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            90
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_on_conflict: {
          constraint: [
            98
          ],
          update_columns: [
            119
          ],
          where: [
            97
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_order_by: {
          counter: [
            480
          ],
          credentialId: [
            480
          ],
          credentialPublicKey: [
            480
          ],
          id: [
            480
          ],
          nickname: [
            480
          ],
          transports: [
            480
          ],
          user: [
            651
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_select_column: {},
        authUserAuthenticators_set_input: {
          counter: [
            192
          ],
          credentialId: [
            11
          ],
          credentialPublicKey: [
            220
          ],
          id: [
            658
          ],
          nickname: [
            11
          ],
          transports: [
            11
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_stddev_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_stddev_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_stddev_pop_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_stddev_pop_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_stddev_samp_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_stddev_samp_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_sum_fields: {
          counter: [
            192
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_sum_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_update_column: {},
        authUserAuthenticators_updates: {
          _inc: [
            99
          ],
          _set: [
            110
          ],
          where: [
            97
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_var_pop_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_var_pop_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_var_samp_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_var_samp_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_variance_fields: {
          counter: [
            4
          ],
          __typename: [
            11
          ]
        },
        authUserAuthenticators_variance_order_by: {
          counter: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserProviders: {
          accessToken: [
            11
          ],
          createdAt: [
            613
          ],
          id: [
            658
          ],
          provider: [
            36
          ],
          providerId: [
            11
          ],
          providerUserId: [
            11
          ],
          refreshToken: [
            11
          ],
          updatedAt: [
            613
          ],
          user: [
            632
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_aggregate: {
          aggregate: [
            129
          ],
          nodes: [
            127
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                143,
                "[authUserProviders_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            135
          ],
          min: [
            137
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_aggregate_order_by: {
          count: [
            480
          ],
          max: [
            136
          ],
          min: [
            138
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_arr_rel_insert_input: {
          data: [
            134
          ],
          on_conflict: [
            140
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_bool_exp: {
          _and: [
            132
          ],
          _not: [
            132
          ],
          _or: [
            132
          ],
          accessToken: [
            12
          ],
          createdAt: [
            614
          ],
          id: [
            659
          ],
          provider: [
            39
          ],
          providerId: [
            12
          ],
          providerUserId: [
            12
          ],
          refreshToken: [
            12
          ],
          updatedAt: [
            614
          ],
          user: [
            638
          ],
          userId: [
            659
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_constraint: {},
        authUserProviders_insert_input: {
          accessToken: [
            11
          ],
          createdAt: [
            613
          ],
          id: [
            658
          ],
          provider: [
            45
          ],
          providerId: [
            11
          ],
          providerUserId: [
            11
          ],
          refreshToken: [
            11
          ],
          updatedAt: [
            613
          ],
          user: [
            649
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_max_fields: {
          accessToken: [
            11
          ],
          createdAt: [
            613
          ],
          id: [
            658
          ],
          providerId: [
            11
          ],
          providerUserId: [
            11
          ],
          refreshToken: [
            11
          ],
          updatedAt: [
            613
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_max_order_by: {
          accessToken: [
            480
          ],
          createdAt: [
            480
          ],
          id: [
            480
          ],
          providerId: [
            480
          ],
          providerUserId: [
            480
          ],
          refreshToken: [
            480
          ],
          updatedAt: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_min_fields: {
          accessToken: [
            11
          ],
          createdAt: [
            613
          ],
          id: [
            658
          ],
          providerId: [
            11
          ],
          providerUserId: [
            11
          ],
          refreshToken: [
            11
          ],
          updatedAt: [
            613
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_min_order_by: {
          accessToken: [
            480
          ],
          createdAt: [
            480
          ],
          id: [
            480
          ],
          providerId: [
            480
          ],
          providerUserId: [
            480
          ],
          refreshToken: [
            480
          ],
          updatedAt: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            127
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_on_conflict: {
          constraint: [
            133
          ],
          update_columns: [
            145
          ],
          where: [
            132
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_order_by: {
          accessToken: [
            480
          ],
          createdAt: [
            480
          ],
          id: [
            480
          ],
          provider: [
            47
          ],
          providerId: [
            480
          ],
          providerUserId: [
            480
          ],
          refreshToken: [
            480
          ],
          updatedAt: [
            480
          ],
          user: [
            651
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_select_column: {},
        authUserProviders_set_input: {
          accessToken: [
            11
          ],
          createdAt: [
            613
          ],
          id: [
            658
          ],
          providerId: [
            11
          ],
          providerUserId: [
            11
          ],
          refreshToken: [
            11
          ],
          updatedAt: [
            613
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserProviders_update_column: {},
        authUserProviders_updates: {
          _set: [
            144
          ],
          where: [
            132
          ],
          __typename: [
            11
          ]
        },
        authUserRoles: {
          createdAt: [
            613
          ],
          id: [
            658
          ],
          role: [
            11
          ],
          roleByRole: [
            73
          ],
          user: [
            632
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_aggregate: {
          aggregate: [
            149
          ],
          nodes: [
            147
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                163,
                "[authUserRoles_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            155
          ],
          min: [
            157
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_aggregate_order_by: {
          count: [
            480
          ],
          max: [
            156
          ],
          min: [
            158
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_arr_rel_insert_input: {
          data: [
            154
          ],
          on_conflict: [
            160
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_bool_exp: {
          _and: [
            152
          ],
          _not: [
            152
          ],
          _or: [
            152
          ],
          createdAt: [
            614
          ],
          id: [
            659
          ],
          role: [
            12
          ],
          roleByRole: [
            76
          ],
          user: [
            638
          ],
          userId: [
            659
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_constraint: {},
        authUserRoles_insert_input: {
          createdAt: [
            613
          ],
          id: [
            658
          ],
          role: [
            11
          ],
          roleByRole: [
            82
          ],
          user: [
            649
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_max_fields: {
          createdAt: [
            613
          ],
          id: [
            658
          ],
          role: [
            11
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_max_order_by: {
          createdAt: [
            480
          ],
          id: [
            480
          ],
          role: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_min_fields: {
          createdAt: [
            613
          ],
          id: [
            658
          ],
          role: [
            11
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_min_order_by: {
          createdAt: [
            480
          ],
          id: [
            480
          ],
          role: [
            480
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            147
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_on_conflict: {
          constraint: [
            153
          ],
          update_columns: [
            165
          ],
          where: [
            152
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_order_by: {
          createdAt: [
            480
          ],
          id: [
            480
          ],
          role: [
            480
          ],
          roleByRole: [
            84
          ],
          user: [
            651
          ],
          userId: [
            480
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_select_column: {},
        authUserRoles_set_input: {
          createdAt: [
            613
          ],
          id: [
            658
          ],
          role: [
            11
          ],
          userId: [
            658
          ],
          __typename: [
            11
          ]
        },
        authUserRoles_update_column: {},
        authUserRoles_updates: {
          _set: [
            164
          ],
          where: [
            152
          ],
          __typename: [
            11
          ]
        },
        auth_migrations: {
          executed_at: [
            611
          ],
          hash: [
            11
          ],
          id: [
            5
          ],
          name: [
            11
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_aggregate: {
          aggregate: [
            169
          ],
          nodes: [
            167
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_aggregate_fields: {
          avg: [
            170
          ],
          count: [
            5,
            {
              columns: [
                181,
                "[auth_migrations_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            175
          ],
          min: [
            176
          ],
          stddev: [
            183
          ],
          stddev_pop: [
            184
          ],
          stddev_samp: [
            185
          ],
          sum: [
            186
          ],
          var_pop: [
            189
          ],
          var_samp: [
            190
          ],
          variance: [
            191
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_avg_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_bool_exp: {
          _and: [
            171
          ],
          _not: [
            171
          ],
          _or: [
            171
          ],
          executed_at: [
            612
          ],
          hash: [
            12
          ],
          id: [
            6
          ],
          name: [
            12
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_constraint: {},
        auth_migrations_inc_input: {
          id: [
            5
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_insert_input: {
          executed_at: [
            611
          ],
          hash: [
            11
          ],
          id: [
            5
          ],
          name: [
            11
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_max_fields: {
          executed_at: [
            611
          ],
          hash: [
            11
          ],
          id: [
            5
          ],
          name: [
            11
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_min_fields: {
          executed_at: [
            611
          ],
          hash: [
            11
          ],
          id: [
            5
          ],
          name: [
            11
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            167
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_on_conflict: {
          constraint: [
            172
          ],
          update_columns: [
            187
          ],
          where: [
            171
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_order_by: {
          executed_at: [
            480
          ],
          hash: [
            480
          ],
          id: [
            480
          ],
          name: [
            480
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_pk_columns_input: {
          id: [
            5
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_select_column: {},
        auth_migrations_set_input: {
          executed_at: [
            611
          ],
          hash: [
            11
          ],
          id: [
            5
          ],
          name: [
            11
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_stddev_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_stddev_pop_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_stddev_samp_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_sum_fields: {
          id: [
            5
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_update_column: {},
        auth_migrations_updates: {
          _inc: [
            173
          ],
          _set: [
            182
          ],
          where: [
            171
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_var_pop_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_var_samp_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        auth_migrations_variance_fields: {
          id: [
            4
          ],
          __typename: [
            11
          ]
        },
        bigint: {},
        bigint_comparison_exp: {
          _eq: [
            192
          ],
          _gt: [
            192
          ],
          _gte: [
            192
          ],
          _in: [
            192
          ],
          _is_null: [
            1
          ],
          _lt: [
            192
          ],
          _lte: [
            192
          ],
          _neq: [
            192
          ],
          _nin: [
            192
          ],
          __typename: [
            11
          ]
        },
        buckets: {
          cacheControl: [
            11
          ],
          createdAt: [
            613
          ],
          downloadExpiration: [
            5
          ],
          files: [
            319,
            {
              distinct_on: [
                338,
                "[files_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                336,
                "[files_order_by!]"
              ],
              where: [
                326
              ]
            }
          ],
          files_aggregate: [
            320,
            {
              distinct_on: [
                338,
                "[files_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                336,
                "[files_order_by!]"
              ],
              where: [
                326
              ]
            }
          ],
          id: [
            11
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          presignedUrlsEnabled: [
            1
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        buckets_aggregate: {
          aggregate: [
            196
          ],
          nodes: [
            194
          ],
          __typename: [
            11
          ]
        },
        buckets_aggregate_fields: {
          avg: [
            197
          ],
          count: [
            5,
            {
              columns: [
                209,
                "[buckets_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            202
          ],
          min: [
            203
          ],
          stddev: [
            211
          ],
          stddev_pop: [
            212
          ],
          stddev_samp: [
            213
          ],
          sum: [
            214
          ],
          var_pop: [
            217
          ],
          var_samp: [
            218
          ],
          variance: [
            219
          ],
          __typename: [
            11
          ]
        },
        buckets_avg_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        buckets_bool_exp: {
          _and: [
            198
          ],
          _not: [
            198
          ],
          _or: [
            198
          ],
          cacheControl: [
            12
          ],
          createdAt: [
            614
          ],
          downloadExpiration: [
            6
          ],
          files: [
            326
          ],
          id: [
            12
          ],
          maxUploadFileSize: [
            6
          ],
          minUploadFileSize: [
            6
          ],
          presignedUrlsEnabled: [
            2
          ],
          updatedAt: [
            614
          ],
          __typename: [
            11
          ]
        },
        buckets_constraint: {},
        buckets_inc_input: {
          downloadExpiration: [
            5
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          __typename: [
            11
          ]
        },
        buckets_insert_input: {
          cacheControl: [
            11
          ],
          createdAt: [
            613
          ],
          downloadExpiration: [
            5
          ],
          files: [
            323
          ],
          id: [
            11
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          presignedUrlsEnabled: [
            1
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        buckets_max_fields: {
          cacheControl: [
            11
          ],
          createdAt: [
            613
          ],
          downloadExpiration: [
            5
          ],
          id: [
            11
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        buckets_min_fields: {
          cacheControl: [
            11
          ],
          createdAt: [
            613
          ],
          downloadExpiration: [
            5
          ],
          id: [
            11
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        buckets_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            194
          ],
          __typename: [
            11
          ]
        },
        buckets_obj_rel_insert_input: {
          data: [
            201
          ],
          on_conflict: [
            206
          ],
          __typename: [
            11
          ]
        },
        buckets_on_conflict: {
          constraint: [
            199
          ],
          update_columns: [
            215
          ],
          where: [
            198
          ],
          __typename: [
            11
          ]
        },
        buckets_order_by: {
          cacheControl: [
            480
          ],
          createdAt: [
            480
          ],
          downloadExpiration: [
            480
          ],
          files_aggregate: [
            322
          ],
          id: [
            480
          ],
          maxUploadFileSize: [
            480
          ],
          minUploadFileSize: [
            480
          ],
          presignedUrlsEnabled: [
            480
          ],
          updatedAt: [
            480
          ],
          __typename: [
            11
          ]
        },
        buckets_pk_columns_input: {
          id: [
            11
          ],
          __typename: [
            11
          ]
        },
        buckets_select_column: {},
        buckets_set_input: {
          cacheControl: [
            11
          ],
          createdAt: [
            613
          ],
          downloadExpiration: [
            5
          ],
          id: [
            11
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          presignedUrlsEnabled: [
            1
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        buckets_stddev_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        buckets_stddev_pop_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        buckets_stddev_samp_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        buckets_sum_fields: {
          downloadExpiration: [
            5
          ],
          maxUploadFileSize: [
            5
          ],
          minUploadFileSize: [
            5
          ],
          __typename: [
            11
          ]
        },
        buckets_update_column: {},
        buckets_updates: {
          _inc: [
            200
          ],
          _set: [
            210
          ],
          where: [
            198
          ],
          __typename: [
            11
          ]
        },
        buckets_var_pop_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        buckets_var_samp_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        buckets_variance_fields: {
          downloadExpiration: [
            4
          ],
          maxUploadFileSize: [
            4
          ],
          minUploadFileSize: [
            4
          ],
          __typename: [
            11
          ]
        },
        bytea: {},
        bytea_comparison_exp: {
          _eq: [
            220
          ],
          _gt: [
            220
          ],
          _gte: [
            220
          ],
          _in: [
            220
          ],
          _is_null: [
            1
          ],
          _lt: [
            220
          ],
          _lte: [
            220
          ],
          _neq: [
            220
          ],
          _nin: [
            220
          ],
          __typename: [
            11
          ]
        },
        citext: {},
        citext_comparison_exp: {
          _eq: [
            222
          ],
          _gt: [
            222
          ],
          _gte: [
            222
          ],
          _ilike: [
            222
          ],
          _in: [
            222
          ],
          _iregex: [
            222
          ],
          _is_null: [
            1
          ],
          _like: [
            222
          ],
          _lt: [
            222
          ],
          _lte: [
            222
          ],
          _neq: [
            222
          ],
          _nilike: [
            222
          ],
          _nin: [
            222
          ],
          _niregex: [
            222
          ],
          _nlike: [
            222
          ],
          _nregex: [
            222
          ],
          _nsimilar: [
            222
          ],
          _regex: [
            222
          ],
          _similar: [
            222
          ],
          __typename: [
            11
          ]
        },
        en_notifications: {
          description: [
            11
          ],
          invites: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invites_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          notifications: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notifications_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_notifications_aggregate: {
          aggregate: [
            226
          ],
          nodes: [
            224
          ],
          __typename: [
            11
          ]
        },
        en_notifications_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                239,
                "[en_notifications_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            232
          ],
          min: [
            233
          ],
          __typename: [
            11
          ]
        },
        en_notifications_bool_exp: {
          _and: [
            227
          ],
          _not: [
            227
          ],
          _or: [
            227
          ],
          description: [
            12
          ],
          invites: [
            399
          ],
          notifications: [
            463
          ],
          value: [
            12
          ],
          __typename: [
            11
          ]
        },
        en_notifications_constraint: {},
        en_notifications_enum: {},
        en_notifications_enum_comparison_exp: {
          _eq: [
            229
          ],
          _in: [
            229
          ],
          _is_null: [
            1
          ],
          _neq: [
            229
          ],
          _nin: [
            229
          ],
          __typename: [
            11
          ]
        },
        en_notifications_insert_input: {
          description: [
            11
          ],
          invites: [
            398
          ],
          notifications: [
            462
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_notifications_max_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_notifications_min_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_notifications_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            224
          ],
          __typename: [
            11
          ]
        },
        en_notifications_obj_rel_insert_input: {
          data: [
            231
          ],
          on_conflict: [
            236
          ],
          __typename: [
            11
          ]
        },
        en_notifications_on_conflict: {
          constraint: [
            228
          ],
          update_columns: [
            241
          ],
          where: [
            227
          ],
          __typename: [
            11
          ]
        },
        en_notifications_order_by: {
          description: [
            480
          ],
          invites_aggregate: [
            397
          ],
          notifications_aggregate: [
            461
          ],
          value: [
            480
          ],
          __typename: [
            11
          ]
        },
        en_notifications_pk_columns_input: {
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_notifications_select_column: {},
        en_notifications_set_input: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_notifications_update_column: {},
        en_notifications_updates: {
          _set: [
            240
          ],
          where: [
            227
          ],
          __typename: [
            11
          ]
        },
        en_permissions: {
          description: [
            11
          ],
          payment_permissions: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_permissions_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_permissions_aggregate: {
          aggregate: [
            245
          ],
          nodes: [
            243
          ],
          __typename: [
            11
          ]
        },
        en_permissions_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                258,
                "[en_permissions_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            251
          ],
          min: [
            252
          ],
          __typename: [
            11
          ]
        },
        en_permissions_bool_exp: {
          _and: [
            246
          ],
          _not: [
            246
          ],
          _or: [
            246
          ],
          description: [
            12
          ],
          payment_permissions: [
            508
          ],
          value: [
            12
          ],
          __typename: [
            11
          ]
        },
        en_permissions_constraint: {},
        en_permissions_enum: {},
        en_permissions_enum_comparison_exp: {
          _eq: [
            248
          ],
          _in: [
            248
          ],
          _is_null: [
            1
          ],
          _neq: [
            248
          ],
          _nin: [
            248
          ],
          __typename: [
            11
          ]
        },
        en_permissions_insert_input: {
          description: [
            11
          ],
          payment_permissions: [
            505
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_permissions_max_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_permissions_min_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_permissions_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            243
          ],
          __typename: [
            11
          ]
        },
        en_permissions_obj_rel_insert_input: {
          data: [
            250
          ],
          on_conflict: [
            255
          ],
          __typename: [
            11
          ]
        },
        en_permissions_on_conflict: {
          constraint: [
            247
          ],
          update_columns: [
            260
          ],
          where: [
            246
          ],
          __typename: [
            11
          ]
        },
        en_permissions_order_by: {
          description: [
            480
          ],
          payment_permissions_aggregate: [
            504
          ],
          value: [
            480
          ],
          __typename: [
            11
          ]
        },
        en_permissions_pk_columns_input: {
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_permissions_select_column: {},
        en_permissions_set_input: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_permissions_update_column: {},
        en_permissions_updates: {
          _set: [
            259
          ],
          where: [
            246
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies: {
          description: [
            11
          ],
          groups: [
            356,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          groups_aggregate: [
            357,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          members: [
            420,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          members_aggregate: [
            421,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_aggregate: {
          aggregate: [
            264
          ],
          nodes: [
            262
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                277,
                "[en_recurrencies_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            270
          ],
          min: [
            271
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_bool_exp: {
          _and: [
            265
          ],
          _not: [
            265
          ],
          _or: [
            265
          ],
          description: [
            12
          ],
          groups: [
            363
          ],
          members: [
            427
          ],
          value: [
            12
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_constraint: {},
        en_recurrencies_enum: {},
        en_recurrencies_enum_comparison_exp: {
          _eq: [
            267
          ],
          _in: [
            267
          ],
          _is_null: [
            1
          ],
          _neq: [
            267
          ],
          _nin: [
            267
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_insert_input: {
          description: [
            11
          ],
          groups: [
            360
          ],
          members: [
            424
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_max_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_min_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            262
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_obj_rel_insert_input: {
          data: [
            269
          ],
          on_conflict: [
            274
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_on_conflict: {
          constraint: [
            266
          ],
          update_columns: [
            279
          ],
          where: [
            265
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_order_by: {
          description: [
            480
          ],
          groups_aggregate: [
            359
          ],
          members_aggregate: [
            423
          ],
          value: [
            480
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_pk_columns_input: {
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_select_column: {},
        en_recurrencies_set_input: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_recurrencies_update_column: {},
        en_recurrencies_updates: {
          _set: [
            278
          ],
          where: [
            265
          ],
          __typename: [
            11
          ]
        },
        en_statuses: {
          description: [
            11
          ],
          invites: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invites_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          notifications: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notifications_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          payments: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payments_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_statuses_aggregate: {
          aggregate: [
            283
          ],
          nodes: [
            281
          ],
          __typename: [
            11
          ]
        },
        en_statuses_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                296,
                "[en_statuses_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            289
          ],
          min: [
            290
          ],
          __typename: [
            11
          ]
        },
        en_statuses_bool_exp: {
          _and: [
            284
          ],
          _not: [
            284
          ],
          _or: [
            284
          ],
          description: [
            12
          ],
          invites: [
            399
          ],
          notifications: [
            463
          ],
          payments: [
            488
          ],
          value: [
            12
          ],
          __typename: [
            11
          ]
        },
        en_statuses_constraint: {},
        en_statuses_enum: {},
        en_statuses_enum_comparison_exp: {
          _eq: [
            286
          ],
          _in: [
            286
          ],
          _is_null: [
            1
          ],
          _neq: [
            286
          ],
          _nin: [
            286
          ],
          __typename: [
            11
          ]
        },
        en_statuses_insert_input: {
          description: [
            11
          ],
          invites: [
            398
          ],
          notifications: [
            462
          ],
          payments: [
            485
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_statuses_max_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_statuses_min_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_statuses_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            281
          ],
          __typename: [
            11
          ]
        },
        en_statuses_obj_rel_insert_input: {
          data: [
            288
          ],
          on_conflict: [
            293
          ],
          __typename: [
            11
          ]
        },
        en_statuses_on_conflict: {
          constraint: [
            285
          ],
          update_columns: [
            298
          ],
          where: [
            284
          ],
          __typename: [
            11
          ]
        },
        en_statuses_order_by: {
          description: [
            480
          ],
          invites_aggregate: [
            397
          ],
          notifications_aggregate: [
            461
          ],
          payments_aggregate: [
            484
          ],
          value: [
            480
          ],
          __typename: [
            11
          ]
        },
        en_statuses_pk_columns_input: {
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_statuses_select_column: {},
        en_statuses_set_input: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_statuses_update_column: {},
        en_statuses_updates: {
          _set: [
            297
          ],
          where: [
            284
          ],
          __typename: [
            11
          ]
        },
        en_trans_types: {
          description: [
            11
          ],
          payments: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payments_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_aggregate: {
          aggregate: [
            302
          ],
          nodes: [
            300
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                315,
                "[en_trans_types_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            308
          ],
          min: [
            309
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_bool_exp: {
          _and: [
            303
          ],
          _not: [
            303
          ],
          _or: [
            303
          ],
          description: [
            12
          ],
          payments: [
            488
          ],
          value: [
            12
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_constraint: {},
        en_trans_types_enum: {},
        en_trans_types_enum_comparison_exp: {
          _eq: [
            305
          ],
          _in: [
            305
          ],
          _is_null: [
            1
          ],
          _neq: [
            305
          ],
          _nin: [
            305
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_insert_input: {
          description: [
            11
          ],
          payments: [
            485
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_max_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_min_fields: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            300
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_obj_rel_insert_input: {
          data: [
            307
          ],
          on_conflict: [
            312
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_on_conflict: {
          constraint: [
            304
          ],
          update_columns: [
            317
          ],
          where: [
            303
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_order_by: {
          description: [
            480
          ],
          payments_aggregate: [
            484
          ],
          value: [
            480
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_pk_columns_input: {
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_select_column: {},
        en_trans_types_set_input: {
          description: [
            11
          ],
          value: [
            11
          ],
          __typename: [
            11
          ]
        },
        en_trans_types_update_column: {},
        en_trans_types_updates: {
          _set: [
            316
          ],
          where: [
            303
          ],
          __typename: [
            11
          ]
        },
        files: {
          bucket: [
            194
          ],
          bucketId: [
            11
          ],
          createdAt: [
            613
          ],
          etag: [
            11
          ],
          id: [
            658
          ],
          isUploaded: [
            1
          ],
          mimeType: [
            11
          ],
          name: [
            11
          ],
          size: [
            5
          ],
          updatedAt: [
            613
          ],
          uploadedByUserId: [
            658
          ],
          __typename: [
            11
          ]
        },
        files_aggregate: {
          aggregate: [
            321
          ],
          nodes: [
            319
          ],
          __typename: [
            11
          ]
        },
        files_aggregate_fields: {
          avg: [
            324
          ],
          count: [
            5,
            {
              columns: [
                338,
                "[files_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            330
          ],
          min: [
            332
          ],
          stddev: [
            340
          ],
          stddev_pop: [
            342
          ],
          stddev_samp: [
            344
          ],
          sum: [
            346
          ],
          var_pop: [
            350
          ],
          var_samp: [
            352
          ],
          variance: [
            354
          ],
          __typename: [
            11
          ]
        },
        files_aggregate_order_by: {
          avg: [
            325
          ],
          count: [
            480
          ],
          max: [
            331
          ],
          min: [
            333
          ],
          stddev: [
            341
          ],
          stddev_pop: [
            343
          ],
          stddev_samp: [
            345
          ],
          sum: [
            347
          ],
          var_pop: [
            351
          ],
          var_samp: [
            353
          ],
          variance: [
            355
          ],
          __typename: [
            11
          ]
        },
        files_arr_rel_insert_input: {
          data: [
            329
          ],
          on_conflict: [
            335
          ],
          __typename: [
            11
          ]
        },
        files_avg_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_avg_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_bool_exp: {
          _and: [
            326
          ],
          _not: [
            326
          ],
          _or: [
            326
          ],
          bucket: [
            198
          ],
          bucketId: [
            12
          ],
          createdAt: [
            614
          ],
          etag: [
            12
          ],
          id: [
            659
          ],
          isUploaded: [
            2
          ],
          mimeType: [
            12
          ],
          name: [
            12
          ],
          size: [
            6
          ],
          updatedAt: [
            614
          ],
          uploadedByUserId: [
            659
          ],
          __typename: [
            11
          ]
        },
        files_constraint: {},
        files_inc_input: {
          size: [
            5
          ],
          __typename: [
            11
          ]
        },
        files_insert_input: {
          bucket: [
            205
          ],
          bucketId: [
            11
          ],
          createdAt: [
            613
          ],
          etag: [
            11
          ],
          id: [
            658
          ],
          isUploaded: [
            1
          ],
          mimeType: [
            11
          ],
          name: [
            11
          ],
          size: [
            5
          ],
          updatedAt: [
            613
          ],
          uploadedByUserId: [
            658
          ],
          __typename: [
            11
          ]
        },
        files_max_fields: {
          bucketId: [
            11
          ],
          createdAt: [
            613
          ],
          etag: [
            11
          ],
          id: [
            658
          ],
          mimeType: [
            11
          ],
          name: [
            11
          ],
          size: [
            5
          ],
          updatedAt: [
            613
          ],
          uploadedByUserId: [
            658
          ],
          __typename: [
            11
          ]
        },
        files_max_order_by: {
          bucketId: [
            480
          ],
          createdAt: [
            480
          ],
          etag: [
            480
          ],
          id: [
            480
          ],
          mimeType: [
            480
          ],
          name: [
            480
          ],
          size: [
            480
          ],
          updatedAt: [
            480
          ],
          uploadedByUserId: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_min_fields: {
          bucketId: [
            11
          ],
          createdAt: [
            613
          ],
          etag: [
            11
          ],
          id: [
            658
          ],
          mimeType: [
            11
          ],
          name: [
            11
          ],
          size: [
            5
          ],
          updatedAt: [
            613
          ],
          uploadedByUserId: [
            658
          ],
          __typename: [
            11
          ]
        },
        files_min_order_by: {
          bucketId: [
            480
          ],
          createdAt: [
            480
          ],
          etag: [
            480
          ],
          id: [
            480
          ],
          mimeType: [
            480
          ],
          name: [
            480
          ],
          size: [
            480
          ],
          updatedAt: [
            480
          ],
          uploadedByUserId: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            319
          ],
          __typename: [
            11
          ]
        },
        files_on_conflict: {
          constraint: [
            327
          ],
          update_columns: [
            348
          ],
          where: [
            326
          ],
          __typename: [
            11
          ]
        },
        files_order_by: {
          bucket: [
            207
          ],
          bucketId: [
            480
          ],
          createdAt: [
            480
          ],
          etag: [
            480
          ],
          id: [
            480
          ],
          isUploaded: [
            480
          ],
          mimeType: [
            480
          ],
          name: [
            480
          ],
          size: [
            480
          ],
          updatedAt: [
            480
          ],
          uploadedByUserId: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        files_select_column: {},
        files_set_input: {
          bucketId: [
            11
          ],
          createdAt: [
            613
          ],
          etag: [
            11
          ],
          id: [
            658
          ],
          isUploaded: [
            1
          ],
          mimeType: [
            11
          ],
          name: [
            11
          ],
          size: [
            5
          ],
          updatedAt: [
            613
          ],
          uploadedByUserId: [
            658
          ],
          __typename: [
            11
          ]
        },
        files_stddev_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_stddev_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_stddev_pop_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_stddev_pop_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_stddev_samp_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_stddev_samp_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_sum_fields: {
          size: [
            5
          ],
          __typename: [
            11
          ]
        },
        files_sum_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_update_column: {},
        files_updates: {
          _inc: [
            328
          ],
          _set: [
            339
          ],
          where: [
            326
          ],
          __typename: [
            11
          ]
        },
        files_var_pop_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_var_pop_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_var_samp_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_var_samp_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        files_variance_fields: {
          size: [
            4
          ],
          __typename: [
            11
          ]
        },
        files_variance_order_by: {
          size: [
            480
          ],
          __typename: [
            11
          ]
        },
        group: {
          admin_id: [
            658
          ],
          contribution: [
            478
          ],
          contribution_for_all: [
            1
          ],
          created_at: [
            611
          ],
          enum_recurrency: [
            262
          ],
          group_balance: [
            478
          ],
          group_name: [
            11
          ],
          id: [
            658
          ],
          invitations: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitations_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          members: [
            420,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          members_aggregate: [
            421,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          payment_reviews: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_reviews_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payments: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payments_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          periods: [
            557,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          periods_aggregate: [
            558,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          recurrency: [
            267
          ],
          recurrency_day: [
            5
          ],
          recurrency_for_all: [
            1
          ],
          updated_at: [
            613
          ],
          user: [
            632
          ],
          __typename: [
            11
          ]
        },
        group_aggregate: {
          aggregate: [
            358
          ],
          nodes: [
            356
          ],
          __typename: [
            11
          ]
        },
        group_aggregate_fields: {
          avg: [
            361
          ],
          count: [
            5,
            {
              columns: [
                376,
                "[group_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            367
          ],
          min: [
            369
          ],
          stddev: [
            378
          ],
          stddev_pop: [
            380
          ],
          stddev_samp: [
            382
          ],
          sum: [
            384
          ],
          var_pop: [
            388
          ],
          var_samp: [
            390
          ],
          variance: [
            392
          ],
          __typename: [
            11
          ]
        },
        group_aggregate_order_by: {
          avg: [
            362
          ],
          count: [
            480
          ],
          max: [
            368
          ],
          min: [
            370
          ],
          stddev: [
            379
          ],
          stddev_pop: [
            381
          ],
          stddev_samp: [
            383
          ],
          sum: [
            385
          ],
          var_pop: [
            389
          ],
          var_samp: [
            391
          ],
          variance: [
            393
          ],
          __typename: [
            11
          ]
        },
        group_arr_rel_insert_input: {
          data: [
            366
          ],
          on_conflict: [
            373
          ],
          __typename: [
            11
          ]
        },
        group_avg_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_avg_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_bool_exp: {
          _and: [
            363
          ],
          _not: [
            363
          ],
          _or: [
            363
          ],
          admin_id: [
            659
          ],
          contribution: [
            479
          ],
          contribution_for_all: [
            2
          ],
          created_at: [
            612
          ],
          enum_recurrency: [
            265
          ],
          group_balance: [
            479
          ],
          group_name: [
            12
          ],
          id: [
            659
          ],
          invitations: [
            399
          ],
          members: [
            427
          ],
          payment_reviews: [
            508
          ],
          payments: [
            488
          ],
          periods: [
            564
          ],
          recurrency: [
            268
          ],
          recurrency_day: [
            6
          ],
          recurrency_for_all: [
            2
          ],
          updated_at: [
            614
          ],
          user: [
            638
          ],
          __typename: [
            11
          ]
        },
        group_constraint: {},
        group_inc_input: {
          contribution: [
            478
          ],
          recurrency_day: [
            5
          ],
          __typename: [
            11
          ]
        },
        group_insert_input: {
          admin_id: [
            658
          ],
          contribution: [
            478
          ],
          contribution_for_all: [
            1
          ],
          created_at: [
            611
          ],
          enum_recurrency: [
            273
          ],
          group_name: [
            11
          ],
          id: [
            658
          ],
          invitations: [
            398
          ],
          members: [
            424
          ],
          payment_reviews: [
            505
          ],
          payments: [
            485
          ],
          periods: [
            561
          ],
          recurrency: [
            267
          ],
          recurrency_day: [
            5
          ],
          recurrency_for_all: [
            1
          ],
          updated_at: [
            613
          ],
          user: [
            649
          ],
          __typename: [
            11
          ]
        },
        group_max_fields: {
          admin_id: [
            658
          ],
          contribution: [
            478
          ],
          created_at: [
            611
          ],
          group_name: [
            11
          ],
          id: [
            658
          ],
          recurrency_day: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        group_max_order_by: {
          admin_id: [
            480
          ],
          contribution: [
            480
          ],
          created_at: [
            480
          ],
          group_name: [
            480
          ],
          id: [
            480
          ],
          recurrency_day: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_min_fields: {
          admin_id: [
            658
          ],
          contribution: [
            478
          ],
          created_at: [
            611
          ],
          group_name: [
            11
          ],
          id: [
            658
          ],
          recurrency_day: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        group_min_order_by: {
          admin_id: [
            480
          ],
          contribution: [
            480
          ],
          created_at: [
            480
          ],
          group_name: [
            480
          ],
          id: [
            480
          ],
          recurrency_day: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            356
          ],
          __typename: [
            11
          ]
        },
        group_obj_rel_insert_input: {
          data: [
            366
          ],
          on_conflict: [
            373
          ],
          __typename: [
            11
          ]
        },
        group_on_conflict: {
          constraint: [
            364
          ],
          update_columns: [
            386
          ],
          where: [
            363
          ],
          __typename: [
            11
          ]
        },
        group_order_by: {
          admin_id: [
            480
          ],
          contribution: [
            480
          ],
          contribution_for_all: [
            480
          ],
          created_at: [
            480
          ],
          enum_recurrency: [
            275
          ],
          group_balance: [
            480
          ],
          group_name: [
            480
          ],
          id: [
            480
          ],
          invitations_aggregate: [
            397
          ],
          members_aggregate: [
            423
          ],
          payment_reviews_aggregate: [
            504
          ],
          payments_aggregate: [
            484
          ],
          periods_aggregate: [
            560
          ],
          recurrency: [
            480
          ],
          recurrency_day: [
            480
          ],
          recurrency_for_all: [
            480
          ],
          updated_at: [
            480
          ],
          user: [
            651
          ],
          __typename: [
            11
          ]
        },
        group_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        group_select_column: {},
        group_set_input: {
          admin_id: [
            658
          ],
          contribution: [
            478
          ],
          contribution_for_all: [
            1
          ],
          created_at: [
            611
          ],
          group_name: [
            11
          ],
          id: [
            658
          ],
          recurrency: [
            267
          ],
          recurrency_day: [
            5
          ],
          recurrency_for_all: [
            1
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        group_stddev_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_stddev_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_stddev_pop_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_stddev_pop_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_stddev_samp_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_stddev_samp_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_sum_fields: {
          contribution: [
            478
          ],
          recurrency_day: [
            5
          ],
          __typename: [
            11
          ]
        },
        group_sum_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_update_column: {},
        group_updates: {
          _inc: [
            365
          ],
          _set: [
            377
          ],
          where: [
            363
          ],
          __typename: [
            11
          ]
        },
        group_var_pop_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_var_pop_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_var_samp_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_var_samp_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        group_variance_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        group_variance_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        invitation: {
          created_at: [
            613
          ],
          en_notification: [
            224
          ],
          en_status: [
            281
          ],
          group: [
            356
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invite_status: [
            286
          ],
          invite_type: [
            229
          ],
          members: [
            420,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          members_aggregate: [
            421,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          notifications: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notifications_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          receiver_id: [
            658
          ],
          receiver_phone: [
            11
          ],
          sender_id: [
            658
          ],
          updated_at: [
            613
          ],
          user: [
            632
          ],
          userBySenderId: [
            632
          ],
          __typename: [
            11
          ]
        },
        invitation_aggregate: {
          aggregate: [
            396
          ],
          nodes: [
            394
          ],
          __typename: [
            11
          ]
        },
        invitation_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                411,
                "[invitation_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            402
          ],
          min: [
            404
          ],
          __typename: [
            11
          ]
        },
        invitation_aggregate_order_by: {
          count: [
            480
          ],
          max: [
            403
          ],
          min: [
            405
          ],
          __typename: [
            11
          ]
        },
        invitation_arr_rel_insert_input: {
          data: [
            401
          ],
          on_conflict: [
            408
          ],
          __typename: [
            11
          ]
        },
        invitation_bool_exp: {
          _and: [
            399
          ],
          _not: [
            399
          ],
          _or: [
            399
          ],
          created_at: [
            614
          ],
          en_notification: [
            227
          ],
          en_status: [
            284
          ],
          group: [
            363
          ],
          group_id: [
            659
          ],
          id: [
            659
          ],
          invite_status: [
            287
          ],
          invite_type: [
            230
          ],
          members: [
            427
          ],
          notifications: [
            463
          ],
          receiver_id: [
            659
          ],
          receiver_phone: [
            12
          ],
          sender_id: [
            659
          ],
          updated_at: [
            614
          ],
          user: [
            638
          ],
          userBySenderId: [
            638
          ],
          __typename: [
            11
          ]
        },
        invitation_constraint: {},
        invitation_insert_input: {
          created_at: [
            613
          ],
          en_notification: [
            235
          ],
          en_status: [
            292
          ],
          group: [
            372
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invite_status: [
            286
          ],
          invite_type: [
            229
          ],
          members: [
            424
          ],
          notifications: [
            462
          ],
          receiver_id: [
            658
          ],
          receiver_phone: [
            11
          ],
          sender_id: [
            658
          ],
          updated_at: [
            613
          ],
          user: [
            649
          ],
          userBySenderId: [
            649
          ],
          __typename: [
            11
          ]
        },
        invitation_max_fields: {
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          receiver_id: [
            658
          ],
          receiver_phone: [
            11
          ],
          sender_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        invitation_max_order_by: {
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          receiver_id: [
            480
          ],
          receiver_phone: [
            480
          ],
          sender_id: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        invitation_min_fields: {
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          receiver_id: [
            658
          ],
          receiver_phone: [
            11
          ],
          sender_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        invitation_min_order_by: {
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          receiver_id: [
            480
          ],
          receiver_phone: [
            480
          ],
          sender_id: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        invitation_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            394
          ],
          __typename: [
            11
          ]
        },
        invitation_obj_rel_insert_input: {
          data: [
            401
          ],
          on_conflict: [
            408
          ],
          __typename: [
            11
          ]
        },
        invitation_on_conflict: {
          constraint: [
            400
          ],
          update_columns: [
            413
          ],
          where: [
            399
          ],
          __typename: [
            11
          ]
        },
        invitation_order_by: {
          created_at: [
            480
          ],
          en_notification: [
            237
          ],
          en_status: [
            294
          ],
          group: [
            374
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          invite_status: [
            480
          ],
          invite_type: [
            480
          ],
          members_aggregate: [
            423
          ],
          notifications_aggregate: [
            461
          ],
          receiver_id: [
            480
          ],
          receiver_phone: [
            480
          ],
          sender_id: [
            480
          ],
          updated_at: [
            480
          ],
          user: [
            651
          ],
          userBySenderId: [
            651
          ],
          __typename: [
            11
          ]
        },
        invitation_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        invitation_select_column: {},
        invitation_set_input: {
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invite_status: [
            286
          ],
          invite_type: [
            229
          ],
          receiver_id: [
            658
          ],
          receiver_phone: [
            11
          ],
          sender_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        invitation_update_column: {},
        invitation_updates: {
          _set: [
            412
          ],
          where: [
            399
          ],
          __typename: [
            11
          ]
        },
        json: {},
        json_comparison_exp: {
          _eq: [
            415
          ],
          _gt: [
            415
          ],
          _gte: [
            415
          ],
          _in: [
            415
          ],
          _is_null: [
            1
          ],
          _lt: [
            415
          ],
          _lte: [
            415
          ],
          _neq: [
            415
          ],
          _nin: [
            415
          ],
          __typename: [
            11
          ]
        },
        jsonb: {},
        jsonb_cast_exp: {
          String: [
            12
          ],
          __typename: [
            11
          ]
        },
        jsonb_comparison_exp: {
          _cast: [
            418
          ],
          _contained_in: [
            417
          ],
          _contains: [
            417
          ],
          _eq: [
            417
          ],
          _gt: [
            417
          ],
          _gte: [
            417
          ],
          _has_key: [
            11
          ],
          _has_keys_all: [
            11
          ],
          _has_keys_any: [
            11
          ],
          _in: [
            417
          ],
          _is_null: [
            1
          ],
          _lt: [
            417
          ],
          _lte: [
            417
          ],
          _neq: [
            417
          ],
          _nin: [
            417
          ],
          __typename: [
            11
          ]
        },
        member: {
          contribution: [
            478
          ],
          created_at: [
            613
          ],
          enum_recurrency: [
            262
          ],
          expense: [
            478
          ],
          group: [
            356
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          income: [
            478
          ],
          invitation: [
            394
          ],
          invitation_id: [
            658
          ],
          paymentReviewsByRequesterId: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          paymentReviewsByRequesterId_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_reviews: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_reviews_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payments: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payments_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          periods: [
            557,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          periods_aggregate: [
            558,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          recurrency: [
            267
          ],
          recurrency_day: [
            5
          ],
          reminder_days: [
            11
          ],
          reminder_id: [
            658
          ],
          reminder_next: [
            613
          ],
          updated_at: [
            613
          ],
          user: [
            632
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        member_aggregate: {
          aggregate: [
            422
          ],
          nodes: [
            420
          ],
          __typename: [
            11
          ]
        },
        member_aggregate_fields: {
          avg: [
            425
          ],
          count: [
            5,
            {
              columns: [
                440,
                "[member_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            431
          ],
          min: [
            433
          ],
          stddev: [
            442
          ],
          stddev_pop: [
            444
          ],
          stddev_samp: [
            446
          ],
          sum: [
            448
          ],
          var_pop: [
            452
          ],
          var_samp: [
            454
          ],
          variance: [
            456
          ],
          __typename: [
            11
          ]
        },
        member_aggregate_order_by: {
          avg: [
            426
          ],
          count: [
            480
          ],
          max: [
            432
          ],
          min: [
            434
          ],
          stddev: [
            443
          ],
          stddev_pop: [
            445
          ],
          stddev_samp: [
            447
          ],
          sum: [
            449
          ],
          var_pop: [
            453
          ],
          var_samp: [
            455
          ],
          variance: [
            457
          ],
          __typename: [
            11
          ]
        },
        member_arr_rel_insert_input: {
          data: [
            430
          ],
          on_conflict: [
            437
          ],
          __typename: [
            11
          ]
        },
        member_avg_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_avg_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_bool_exp: {
          _and: [
            427
          ],
          _not: [
            427
          ],
          _or: [
            427
          ],
          contribution: [
            479
          ],
          created_at: [
            614
          ],
          enum_recurrency: [
            265
          ],
          expense: [
            479
          ],
          group: [
            363
          ],
          group_id: [
            659
          ],
          id: [
            659
          ],
          income: [
            479
          ],
          invitation: [
            399
          ],
          invitation_id: [
            659
          ],
          paymentReviewsByRequesterId: [
            508
          ],
          payment_reviews: [
            508
          ],
          payments: [
            488
          ],
          periods: [
            564
          ],
          recurrency: [
            268
          ],
          recurrency_day: [
            6
          ],
          reminder_days: [
            12
          ],
          reminder_id: [
            659
          ],
          reminder_next: [
            614
          ],
          updated_at: [
            614
          ],
          user: [
            638
          ],
          user_id: [
            659
          ],
          __typename: [
            11
          ]
        },
        member_constraint: {},
        member_inc_input: {
          contribution: [
            478
          ],
          recurrency_day: [
            5
          ],
          __typename: [
            11
          ]
        },
        member_insert_input: {
          contribution: [
            478
          ],
          created_at: [
            613
          ],
          enum_recurrency: [
            273
          ],
          group: [
            372
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invitation: [
            407
          ],
          invitation_id: [
            658
          ],
          paymentReviewsByRequesterId: [
            505
          ],
          payment_reviews: [
            505
          ],
          payments: [
            485
          ],
          periods: [
            561
          ],
          recurrency: [
            267
          ],
          recurrency_day: [
            5
          ],
          reminder_days: [
            11
          ],
          reminder_id: [
            658
          ],
          reminder_next: [
            613
          ],
          updated_at: [
            613
          ],
          user: [
            649
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        member_max_fields: {
          contribution: [
            478
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invitation_id: [
            658
          ],
          recurrency_day: [
            5
          ],
          reminder_days: [
            11
          ],
          reminder_id: [
            658
          ],
          reminder_next: [
            613
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        member_max_order_by: {
          contribution: [
            480
          ],
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          invitation_id: [
            480
          ],
          recurrency_day: [
            480
          ],
          reminder_days: [
            480
          ],
          reminder_id: [
            480
          ],
          reminder_next: [
            480
          ],
          updated_at: [
            480
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_min_fields: {
          contribution: [
            478
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invitation_id: [
            658
          ],
          recurrency_day: [
            5
          ],
          reminder_days: [
            11
          ],
          reminder_id: [
            658
          ],
          reminder_next: [
            613
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        member_min_order_by: {
          contribution: [
            480
          ],
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          invitation_id: [
            480
          ],
          recurrency_day: [
            480
          ],
          reminder_days: [
            480
          ],
          reminder_id: [
            480
          ],
          reminder_next: [
            480
          ],
          updated_at: [
            480
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            420
          ],
          __typename: [
            11
          ]
        },
        member_obj_rel_insert_input: {
          data: [
            430
          ],
          on_conflict: [
            437
          ],
          __typename: [
            11
          ]
        },
        member_on_conflict: {
          constraint: [
            428
          ],
          update_columns: [
            450
          ],
          where: [
            427
          ],
          __typename: [
            11
          ]
        },
        member_order_by: {
          contribution: [
            480
          ],
          created_at: [
            480
          ],
          enum_recurrency: [
            275
          ],
          expense: [
            480
          ],
          group: [
            374
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          income: [
            480
          ],
          invitation: [
            409
          ],
          invitation_id: [
            480
          ],
          paymentReviewsByRequesterId_aggregate: [
            504
          ],
          payment_reviews_aggregate: [
            504
          ],
          payments_aggregate: [
            484
          ],
          periods_aggregate: [
            560
          ],
          recurrency: [
            480
          ],
          recurrency_day: [
            480
          ],
          reminder_days: [
            480
          ],
          reminder_id: [
            480
          ],
          reminder_next: [
            480
          ],
          updated_at: [
            480
          ],
          user: [
            651
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        member_select_column: {},
        member_set_input: {
          contribution: [
            478
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          invitation_id: [
            658
          ],
          recurrency: [
            267
          ],
          recurrency_day: [
            5
          ],
          reminder_days: [
            11
          ],
          reminder_id: [
            658
          ],
          reminder_next: [
            613
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        member_stddev_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_stddev_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_stddev_pop_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_stddev_pop_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_stddev_samp_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_stddev_samp_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_sum_fields: {
          contribution: [
            478
          ],
          recurrency_day: [
            5
          ],
          __typename: [
            11
          ]
        },
        member_sum_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_update_column: {},
        member_updates: {
          _inc: [
            429
          ],
          _set: [
            441
          ],
          where: [
            427
          ],
          __typename: [
            11
          ]
        },
        member_var_pop_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_var_pop_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_var_samp_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_var_samp_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        member_variance_fields: {
          contribution: [
            4
          ],
          recurrency_day: [
            4
          ],
          __typename: [
            11
          ]
        },
        member_variance_order_by: {
          contribution: [
            480
          ],
          recurrency_day: [
            480
          ],
          __typename: [
            11
          ]
        },
        notification: {
          created_at: [
            613
          ],
          data: [
            415,
            {
              path: [
                11
              ]
            }
          ],
          en_notification: [
            224
          ],
          en_status: [
            281
          ],
          id: [
            658
          ],
          invitation: [
            394
          ],
          invitation_id: [
            658
          ],
          is_viewed: [
            1
          ],
          message: [
            11
          ],
          notifiable: [
            1
          ],
          payment_review_id: [
            658
          ],
          payment_reviews: [
            501
          ],
          period: [
            557
          ],
          period_id: [
            658
          ],
          status: [
            286
          ],
          title: [
            11
          ],
          type: [
            229
          ],
          updated_at: [
            613
          ],
          user: [
            632
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        notification_aggregate: {
          aggregate: [
            460
          ],
          nodes: [
            458
          ],
          __typename: [
            11
          ]
        },
        notification_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                474,
                "[notification_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            466
          ],
          min: [
            468
          ],
          __typename: [
            11
          ]
        },
        notification_aggregate_order_by: {
          count: [
            480
          ],
          max: [
            467
          ],
          min: [
            469
          ],
          __typename: [
            11
          ]
        },
        notification_arr_rel_insert_input: {
          data: [
            465
          ],
          on_conflict: [
            471
          ],
          __typename: [
            11
          ]
        },
        notification_bool_exp: {
          _and: [
            463
          ],
          _not: [
            463
          ],
          _or: [
            463
          ],
          created_at: [
            614
          ],
          data: [
            416
          ],
          en_notification: [
            227
          ],
          en_status: [
            284
          ],
          id: [
            659
          ],
          invitation: [
            399
          ],
          invitation_id: [
            659
          ],
          is_viewed: [
            2
          ],
          message: [
            12
          ],
          notifiable: [
            2
          ],
          payment_review_id: [
            659
          ],
          payment_reviews: [
            508
          ],
          period: [
            564
          ],
          period_id: [
            659
          ],
          status: [
            287
          ],
          title: [
            12
          ],
          type: [
            230
          ],
          updated_at: [
            614
          ],
          user: [
            638
          ],
          user_id: [
            659
          ],
          __typename: [
            11
          ]
        },
        notification_constraint: {},
        notification_insert_input: {
          created_at: [
            613
          ],
          data: [
            415
          ],
          en_notification: [
            235
          ],
          en_status: [
            292
          ],
          id: [
            658
          ],
          invitation: [
            407
          ],
          invitation_id: [
            658
          ],
          is_viewed: [
            1
          ],
          message: [
            11
          ],
          notifiable: [
            1
          ],
          payment_review_id: [
            658
          ],
          payment_reviews: [
            517
          ],
          period: [
            573
          ],
          period_id: [
            658
          ],
          status: [
            286
          ],
          title: [
            11
          ],
          type: [
            229
          ],
          updated_at: [
            613
          ],
          user: [
            649
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        notification_max_fields: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          invitation_id: [
            658
          ],
          message: [
            11
          ],
          payment_review_id: [
            658
          ],
          period_id: [
            658
          ],
          title: [
            11
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        notification_max_order_by: {
          created_at: [
            480
          ],
          id: [
            480
          ],
          invitation_id: [
            480
          ],
          message: [
            480
          ],
          payment_review_id: [
            480
          ],
          period_id: [
            480
          ],
          title: [
            480
          ],
          updated_at: [
            480
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        notification_min_fields: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          invitation_id: [
            658
          ],
          message: [
            11
          ],
          payment_review_id: [
            658
          ],
          period_id: [
            658
          ],
          title: [
            11
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        notification_min_order_by: {
          created_at: [
            480
          ],
          id: [
            480
          ],
          invitation_id: [
            480
          ],
          message: [
            480
          ],
          payment_review_id: [
            480
          ],
          period_id: [
            480
          ],
          title: [
            480
          ],
          updated_at: [
            480
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        notification_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            458
          ],
          __typename: [
            11
          ]
        },
        notification_on_conflict: {
          constraint: [
            464
          ],
          update_columns: [
            476
          ],
          where: [
            463
          ],
          __typename: [
            11
          ]
        },
        notification_order_by: {
          created_at: [
            480
          ],
          data: [
            480
          ],
          en_notification: [
            237
          ],
          en_status: [
            294
          ],
          id: [
            480
          ],
          invitation: [
            409
          ],
          invitation_id: [
            480
          ],
          is_viewed: [
            480
          ],
          message: [
            480
          ],
          notifiable: [
            480
          ],
          payment_review_id: [
            480
          ],
          payment_reviews: [
            519
          ],
          period: [
            575
          ],
          period_id: [
            480
          ],
          status: [
            480
          ],
          title: [
            480
          ],
          type: [
            480
          ],
          updated_at: [
            480
          ],
          user: [
            651
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        notification_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        notification_select_column: {},
        notification_set_input: {
          created_at: [
            613
          ],
          data: [
            415
          ],
          id: [
            658
          ],
          invitation_id: [
            658
          ],
          is_viewed: [
            1
          ],
          message: [
            11
          ],
          notifiable: [
            1
          ],
          payment_review_id: [
            658
          ],
          period_id: [
            658
          ],
          status: [
            286
          ],
          title: [
            11
          ],
          type: [
            229
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        notification_update_column: {},
        notification_updates: {
          _set: [
            475
          ],
          where: [
            463
          ],
          __typename: [
            11
          ]
        },
        numeric: {},
        numeric_comparison_exp: {
          _eq: [
            478
          ],
          _gt: [
            478
          ],
          _gte: [
            478
          ],
          _in: [
            478
          ],
          _is_null: [
            1
          ],
          _lt: [
            478
          ],
          _lte: [
            478
          ],
          _neq: [
            478
          ],
          _nin: [
            478
          ],
          __typename: [
            11
          ]
        },
        order_by: {},
        payment: {
          amount: [
            478
          ],
          created_at: [
            613
          ],
          enum_status: [
            281
          ],
          enum_trans_type: [
            300
          ],
          group: [
            356
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member: [
            420
          ],
          member_id: [
            658
          ],
          narration: [
            11
          ],
          paymentReviewsByPaymentId: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          paymentReviewsByPaymentId_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_currency: [
            11
          ],
          payment_response_code: [
            11
          ],
          payment_reviews: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_reviews_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_state: [
            11
          ],
          payment_url: [
            11
          ],
          period: [
            557
          ],
          period_id: [
            658
          ],
          recipient_name: [
            11
          ],
          recipient_phone: [
            11
          ],
          transaction_status: [
            286
          ],
          transaction_type: [
            305
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_aggregate: {
          aggregate: [
            483
          ],
          nodes: [
            481
          ],
          __typename: [
            11
          ]
        },
        payment_aggregate_fields: {
          avg: [
            486
          ],
          count: [
            5,
            {
              columns: [
                539,
                "[payment_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            492
          ],
          min: [
            494
          ],
          stddev: [
            541
          ],
          stddev_pop: [
            543
          ],
          stddev_samp: [
            545
          ],
          sum: [
            547
          ],
          var_pop: [
            551
          ],
          var_samp: [
            553
          ],
          variance: [
            555
          ],
          __typename: [
            11
          ]
        },
        payment_aggregate_order_by: {
          avg: [
            487
          ],
          count: [
            480
          ],
          max: [
            493
          ],
          min: [
            495
          ],
          stddev: [
            542
          ],
          stddev_pop: [
            544
          ],
          stddev_samp: [
            546
          ],
          sum: [
            548
          ],
          var_pop: [
            552
          ],
          var_samp: [
            554
          ],
          variance: [
            556
          ],
          __typename: [
            11
          ]
        },
        payment_arr_rel_insert_input: {
          data: [
            491
          ],
          on_conflict: [
            498
          ],
          __typename: [
            11
          ]
        },
        payment_avg_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_avg_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_bool_exp: {
          _and: [
            488
          ],
          _not: [
            488
          ],
          _or: [
            488
          ],
          amount: [
            479
          ],
          created_at: [
            614
          ],
          enum_status: [
            284
          ],
          enum_trans_type: [
            303
          ],
          group: [
            363
          ],
          group_id: [
            659
          ],
          id: [
            659
          ],
          member: [
            427
          ],
          member_id: [
            659
          ],
          narration: [
            12
          ],
          paymentReviewsByPaymentId: [
            508
          ],
          payment_currency: [
            12
          ],
          payment_response_code: [
            12
          ],
          payment_reviews: [
            508
          ],
          payment_state: [
            12
          ],
          payment_url: [
            12
          ],
          period: [
            564
          ],
          period_id: [
            659
          ],
          recipient_name: [
            12
          ],
          recipient_phone: [
            12
          ],
          transaction_status: [
            287
          ],
          transaction_type: [
            306
          ],
          updated_at: [
            614
          ],
          __typename: [
            11
          ]
        },
        payment_constraint: {},
        payment_inc_input: {
          amount: [
            478
          ],
          __typename: [
            11
          ]
        },
        payment_insert_input: {
          amount: [
            478
          ],
          created_at: [
            613
          ],
          enum_status: [
            292
          ],
          enum_trans_type: [
            311
          ],
          group: [
            372
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member: [
            436
          ],
          member_id: [
            658
          ],
          narration: [
            11
          ],
          paymentReviewsByPaymentId: [
            505
          ],
          payment_currency: [
            11
          ],
          payment_response_code: [
            11
          ],
          payment_reviews: [
            505
          ],
          payment_state: [
            11
          ],
          payment_url: [
            11
          ],
          period: [
            573
          ],
          period_id: [
            658
          ],
          recipient_name: [
            11
          ],
          recipient_phone: [
            11
          ],
          transaction_status: [
            286
          ],
          transaction_type: [
            305
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_max_fields: {
          amount: [
            478
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member_id: [
            658
          ],
          narration: [
            11
          ],
          payment_currency: [
            11
          ],
          payment_response_code: [
            11
          ],
          payment_state: [
            11
          ],
          payment_url: [
            11
          ],
          period_id: [
            658
          ],
          recipient_name: [
            11
          ],
          recipient_phone: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_max_order_by: {
          amount: [
            480
          ],
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          member_id: [
            480
          ],
          narration: [
            480
          ],
          payment_currency: [
            480
          ],
          payment_response_code: [
            480
          ],
          payment_state: [
            480
          ],
          payment_url: [
            480
          ],
          period_id: [
            480
          ],
          recipient_name: [
            480
          ],
          recipient_phone: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_min_fields: {
          amount: [
            478
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member_id: [
            658
          ],
          narration: [
            11
          ],
          payment_currency: [
            11
          ],
          payment_response_code: [
            11
          ],
          payment_state: [
            11
          ],
          payment_url: [
            11
          ],
          period_id: [
            658
          ],
          recipient_name: [
            11
          ],
          recipient_phone: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_min_order_by: {
          amount: [
            480
          ],
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          member_id: [
            480
          ],
          narration: [
            480
          ],
          payment_currency: [
            480
          ],
          payment_response_code: [
            480
          ],
          payment_state: [
            480
          ],
          payment_url: [
            480
          ],
          period_id: [
            480
          ],
          recipient_name: [
            480
          ],
          recipient_phone: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            481
          ],
          __typename: [
            11
          ]
        },
        payment_obj_rel_insert_input: {
          data: [
            491
          ],
          on_conflict: [
            498
          ],
          __typename: [
            11
          ]
        },
        payment_on_conflict: {
          constraint: [
            489
          ],
          update_columns: [
            549
          ],
          where: [
            488
          ],
          __typename: [
            11
          ]
        },
        payment_order_by: {
          amount: [
            480
          ],
          created_at: [
            480
          ],
          enum_status: [
            294
          ],
          enum_trans_type: [
            313
          ],
          group: [
            374
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          member: [
            438
          ],
          member_id: [
            480
          ],
          narration: [
            480
          ],
          paymentReviewsByPaymentId_aggregate: [
            504
          ],
          payment_currency: [
            480
          ],
          payment_response_code: [
            480
          ],
          payment_reviews_aggregate: [
            504
          ],
          payment_state: [
            480
          ],
          payment_url: [
            480
          ],
          period: [
            575
          ],
          period_id: [
            480
          ],
          recipient_name: [
            480
          ],
          recipient_phone: [
            480
          ],
          transaction_status: [
            480
          ],
          transaction_type: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        payment_review: {
          created_at: [
            613
          ],
          en_permission: [
            243
          ],
          group: [
            356
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          index: [
            5
          ],
          notes: [
            11
          ],
          notifications: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notifications_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          payment: [
            481
          ],
          payment_id: [
            658
          ],
          period: [
            557
          ],
          period_id: [
            658
          ],
          requester: [
            420
          ],
          requester_id: [
            658
          ],
          response: [
            248
          ],
          reviewer: [
            420
          ],
          reviewer_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_review_aggregate: {
          aggregate: [
            503
          ],
          nodes: [
            501
          ],
          __typename: [
            11
          ]
        },
        payment_review_aggregate_fields: {
          avg: [
            506
          ],
          count: [
            5,
            {
              columns: [
                521,
                "[payment_review_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            512
          ],
          min: [
            514
          ],
          stddev: [
            523
          ],
          stddev_pop: [
            525
          ],
          stddev_samp: [
            527
          ],
          sum: [
            529
          ],
          var_pop: [
            533
          ],
          var_samp: [
            535
          ],
          variance: [
            537
          ],
          __typename: [
            11
          ]
        },
        payment_review_aggregate_order_by: {
          avg: [
            507
          ],
          count: [
            480
          ],
          max: [
            513
          ],
          min: [
            515
          ],
          stddev: [
            524
          ],
          stddev_pop: [
            526
          ],
          stddev_samp: [
            528
          ],
          sum: [
            530
          ],
          var_pop: [
            534
          ],
          var_samp: [
            536
          ],
          variance: [
            538
          ],
          __typename: [
            11
          ]
        },
        payment_review_arr_rel_insert_input: {
          data: [
            511
          ],
          on_conflict: [
            518
          ],
          __typename: [
            11
          ]
        },
        payment_review_avg_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_avg_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_bool_exp: {
          _and: [
            508
          ],
          _not: [
            508
          ],
          _or: [
            508
          ],
          created_at: [
            614
          ],
          en_permission: [
            246
          ],
          group: [
            363
          ],
          group_id: [
            659
          ],
          id: [
            659
          ],
          index: [
            6
          ],
          notes: [
            12
          ],
          notifications: [
            463
          ],
          payment: [
            488
          ],
          payment_id: [
            659
          ],
          period: [
            564
          ],
          period_id: [
            659
          ],
          requester: [
            427
          ],
          requester_id: [
            659
          ],
          response: [
            249
          ],
          reviewer: [
            427
          ],
          reviewer_id: [
            659
          ],
          updated_at: [
            614
          ],
          __typename: [
            11
          ]
        },
        payment_review_constraint: {},
        payment_review_inc_input: {
          index: [
            5
          ],
          __typename: [
            11
          ]
        },
        payment_review_insert_input: {
          created_at: [
            613
          ],
          en_permission: [
            254
          ],
          group: [
            372
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          index: [
            5
          ],
          notes: [
            11
          ],
          notifications: [
            462
          ],
          payment: [
            497
          ],
          payment_id: [
            658
          ],
          period: [
            573
          ],
          period_id: [
            658
          ],
          requester: [
            436
          ],
          requester_id: [
            658
          ],
          response: [
            248
          ],
          reviewer: [
            436
          ],
          reviewer_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_review_max_fields: {
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          index: [
            5
          ],
          notes: [
            11
          ],
          payment_id: [
            658
          ],
          period_id: [
            658
          ],
          requester_id: [
            658
          ],
          reviewer_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_review_max_order_by: {
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          index: [
            480
          ],
          notes: [
            480
          ],
          payment_id: [
            480
          ],
          period_id: [
            480
          ],
          requester_id: [
            480
          ],
          reviewer_id: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_min_fields: {
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          index: [
            5
          ],
          notes: [
            11
          ],
          payment_id: [
            658
          ],
          period_id: [
            658
          ],
          requester_id: [
            658
          ],
          reviewer_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_review_min_order_by: {
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          index: [
            480
          ],
          notes: [
            480
          ],
          payment_id: [
            480
          ],
          period_id: [
            480
          ],
          requester_id: [
            480
          ],
          reviewer_id: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            501
          ],
          __typename: [
            11
          ]
        },
        payment_review_obj_rel_insert_input: {
          data: [
            511
          ],
          on_conflict: [
            518
          ],
          __typename: [
            11
          ]
        },
        payment_review_on_conflict: {
          constraint: [
            509
          ],
          update_columns: [
            531
          ],
          where: [
            508
          ],
          __typename: [
            11
          ]
        },
        payment_review_order_by: {
          created_at: [
            480
          ],
          en_permission: [
            256
          ],
          group: [
            374
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          index: [
            480
          ],
          notes: [
            480
          ],
          notifications_aggregate: [
            461
          ],
          payment: [
            499
          ],
          payment_id: [
            480
          ],
          period: [
            575
          ],
          period_id: [
            480
          ],
          requester: [
            438
          ],
          requester_id: [
            480
          ],
          response: [
            480
          ],
          reviewer: [
            438
          ],
          reviewer_id: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        payment_review_select_column: {},
        payment_review_set_input: {
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          index: [
            5
          ],
          notes: [
            11
          ],
          payment_id: [
            658
          ],
          period_id: [
            658
          ],
          requester_id: [
            658
          ],
          response: [
            248
          ],
          reviewer_id: [
            658
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_review_stddev_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_stddev_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_stddev_pop_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_stddev_pop_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_stddev_samp_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_stddev_samp_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_sum_fields: {
          index: [
            5
          ],
          __typename: [
            11
          ]
        },
        payment_review_sum_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_update_column: {},
        payment_review_updates: {
          _inc: [
            510
          ],
          _set: [
            522
          ],
          where: [
            508
          ],
          __typename: [
            11
          ]
        },
        payment_review_var_pop_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_var_pop_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_var_samp_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_var_samp_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_review_variance_fields: {
          index: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_review_variance_order_by: {
          index: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_select_column: {},
        payment_set_input: {
          amount: [
            478
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member_id: [
            658
          ],
          narration: [
            11
          ],
          payment_currency: [
            11
          ],
          payment_response_code: [
            11
          ],
          payment_state: [
            11
          ],
          payment_url: [
            11
          ],
          period_id: [
            658
          ],
          recipient_name: [
            11
          ],
          recipient_phone: [
            11
          ],
          transaction_status: [
            286
          ],
          transaction_type: [
            305
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        payment_stddev_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_stddev_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_stddev_pop_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_stddev_pop_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_stddev_samp_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_stddev_samp_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_sum_fields: {
          amount: [
            478
          ],
          __typename: [
            11
          ]
        },
        payment_sum_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_update_column: {},
        payment_updates: {
          _inc: [
            490
          ],
          _set: [
            540
          ],
          where: [
            488
          ],
          __typename: [
            11
          ]
        },
        payment_var_pop_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_var_pop_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_var_samp_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_var_samp_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        payment_variance_fields: {
          amount: [
            4
          ],
          __typename: [
            11
          ]
        },
        payment_variance_order_by: {
          amount: [
            480
          ],
          __typename: [
            11
          ]
        },
        period: {
          completed_at: [
            613
          ],
          created_at: [
            613
          ],
          group: [
            356
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member: [
            420
          ],
          member_id: [
            658
          ],
          notifications: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notifications_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          payment_requests: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_requests_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payments: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payments_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        period_aggregate: {
          aggregate: [
            559
          ],
          nodes: [
            557
          ],
          __typename: [
            11
          ]
        },
        period_aggregate_fields: {
          avg: [
            562
          ],
          count: [
            5,
            {
              columns: [
                577,
                "[period_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            568
          ],
          min: [
            570
          ],
          stddev: [
            579
          ],
          stddev_pop: [
            581
          ],
          stddev_samp: [
            583
          ],
          sum: [
            585
          ],
          var_pop: [
            589
          ],
          var_samp: [
            591
          ],
          variance: [
            593
          ],
          __typename: [
            11
          ]
        },
        period_aggregate_order_by: {
          avg: [
            563
          ],
          count: [
            480
          ],
          max: [
            569
          ],
          min: [
            571
          ],
          stddev: [
            580
          ],
          stddev_pop: [
            582
          ],
          stddev_samp: [
            584
          ],
          sum: [
            586
          ],
          var_pop: [
            590
          ],
          var_samp: [
            592
          ],
          variance: [
            594
          ],
          __typename: [
            11
          ]
        },
        period_arr_rel_insert_input: {
          data: [
            567
          ],
          on_conflict: [
            574
          ],
          __typename: [
            11
          ]
        },
        period_avg_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_avg_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_bool_exp: {
          _and: [
            564
          ],
          _not: [
            564
          ],
          _or: [
            564
          ],
          completed_at: [
            614
          ],
          created_at: [
            614
          ],
          group: [
            363
          ],
          group_id: [
            659
          ],
          id: [
            659
          ],
          member: [
            427
          ],
          member_id: [
            659
          ],
          notifications: [
            463
          ],
          payment_requests: [
            508
          ],
          payments: [
            488
          ],
          period_index: [
            6
          ],
          reminder_index: [
            6
          ],
          updated_at: [
            614
          ],
          __typename: [
            11
          ]
        },
        period_constraint: {},
        period_inc_input: {
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          __typename: [
            11
          ]
        },
        period_insert_input: {
          completed_at: [
            613
          ],
          created_at: [
            613
          ],
          group: [
            372
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member: [
            436
          ],
          member_id: [
            658
          ],
          notifications: [
            462
          ],
          payment_requests: [
            505
          ],
          payments: [
            485
          ],
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        period_max_fields: {
          completed_at: [
            613
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member_id: [
            658
          ],
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        period_max_order_by: {
          completed_at: [
            480
          ],
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          member_id: [
            480
          ],
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_min_fields: {
          completed_at: [
            613
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member_id: [
            658
          ],
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        period_min_order_by: {
          completed_at: [
            480
          ],
          created_at: [
            480
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          member_id: [
            480
          ],
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            557
          ],
          __typename: [
            11
          ]
        },
        period_obj_rel_insert_input: {
          data: [
            567
          ],
          on_conflict: [
            574
          ],
          __typename: [
            11
          ]
        },
        period_on_conflict: {
          constraint: [
            565
          ],
          update_columns: [
            587
          ],
          where: [
            564
          ],
          __typename: [
            11
          ]
        },
        period_order_by: {
          completed_at: [
            480
          ],
          created_at: [
            480
          ],
          group: [
            374
          ],
          group_id: [
            480
          ],
          id: [
            480
          ],
          member: [
            438
          ],
          member_id: [
            480
          ],
          notifications_aggregate: [
            461
          ],
          payment_requests_aggregate: [
            504
          ],
          payments_aggregate: [
            484
          ],
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        period_select_column: {},
        period_set_input: {
          completed_at: [
            613
          ],
          created_at: [
            613
          ],
          group_id: [
            658
          ],
          id: [
            658
          ],
          member_id: [
            658
          ],
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        period_stddev_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_stddev_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_stddev_pop_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_stddev_pop_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_stddev_samp_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_stddev_samp_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_sum_fields: {
          period_index: [
            5
          ],
          reminder_index: [
            5
          ],
          __typename: [
            11
          ]
        },
        period_sum_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_update_column: {},
        period_updates: {
          _inc: [
            566
          ],
          _set: [
            578
          ],
          where: [
            564
          ],
          __typename: [
            11
          ]
        },
        period_var_pop_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_var_pop_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_var_samp_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_var_samp_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        period_variance_fields: {
          period_index: [
            4
          ],
          reminder_index: [
            4
          ],
          __typename: [
            11
          ]
        },
        period_variance_order_by: {
          period_index: [
            480
          ],
          reminder_index: [
            480
          ],
          __typename: [
            11
          ]
        },
        state_cache: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          ref_id: [
            658
          ],
          state: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        state_cache_aggregate: {
          aggregate: [
            597
          ],
          nodes: [
            595
          ],
          __typename: [
            11
          ]
        },
        state_cache_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                607,
                "[state_cache_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            601
          ],
          min: [
            602
          ],
          __typename: [
            11
          ]
        },
        state_cache_bool_exp: {
          _and: [
            598
          ],
          _not: [
            598
          ],
          _or: [
            598
          ],
          created_at: [
            614
          ],
          id: [
            659
          ],
          ref_id: [
            659
          ],
          state: [
            12
          ],
          updated_at: [
            614
          ],
          __typename: [
            11
          ]
        },
        state_cache_constraint: {},
        state_cache_insert_input: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          ref_id: [
            658
          ],
          state: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        state_cache_max_fields: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          ref_id: [
            658
          ],
          state: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        state_cache_min_fields: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          ref_id: [
            658
          ],
          state: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        state_cache_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            595
          ],
          __typename: [
            11
          ]
        },
        state_cache_on_conflict: {
          constraint: [
            599
          ],
          update_columns: [
            609
          ],
          where: [
            598
          ],
          __typename: [
            11
          ]
        },
        state_cache_order_by: {
          created_at: [
            480
          ],
          id: [
            480
          ],
          ref_id: [
            480
          ],
          state: [
            480
          ],
          updated_at: [
            480
          ],
          __typename: [
            11
          ]
        },
        state_cache_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        state_cache_select_column: {},
        state_cache_set_input: {
          created_at: [
            613
          ],
          id: [
            658
          ],
          ref_id: [
            658
          ],
          state: [
            11
          ],
          updated_at: [
            613
          ],
          __typename: [
            11
          ]
        },
        state_cache_update_column: {},
        state_cache_updates: {
          _set: [
            608
          ],
          where: [
            598
          ],
          __typename: [
            11
          ]
        },
        timestamp: {},
        timestamp_comparison_exp: {
          _eq: [
            611
          ],
          _gt: [
            611
          ],
          _gte: [
            611
          ],
          _in: [
            611
          ],
          _is_null: [
            1
          ],
          _lt: [
            611
          ],
          _lte: [
            611
          ],
          _neq: [
            611
          ],
          _nin: [
            611
          ],
          __typename: [
            11
          ]
        },
        timestamptz: {},
        timestamptz_comparison_exp: {
          _eq: [
            613
          ],
          _gt: [
            613
          ],
          _gte: [
            613
          ],
          _in: [
            613
          ],
          _is_null: [
            1
          ],
          _lt: [
            613
          ],
          _lte: [
            613
          ],
          _neq: [
            613
          ],
          _nin: [
            613
          ],
          __typename: [
            11
          ]
        },
        user_profile: {
          created_at: [
            613
          ],
          expo_push_token: [
            11
          ],
          id: [
            658
          ],
          updated_at: [
            613
          ],
          user: [
            632
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        user_profile_aggregate: {
          aggregate: [
            617
          ],
          nodes: [
            615
          ],
          __typename: [
            11
          ]
        },
        user_profile_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                628,
                "[user_profile_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            621
          ],
          min: [
            622
          ],
          __typename: [
            11
          ]
        },
        user_profile_bool_exp: {
          _and: [
            618
          ],
          _not: [
            618
          ],
          _or: [
            618
          ],
          created_at: [
            614
          ],
          expo_push_token: [
            12
          ],
          id: [
            659
          ],
          updated_at: [
            614
          ],
          user: [
            638
          ],
          user_id: [
            659
          ],
          __typename: [
            11
          ]
        },
        user_profile_constraint: {},
        user_profile_insert_input: {
          created_at: [
            613
          ],
          expo_push_token: [
            11
          ],
          id: [
            658
          ],
          updated_at: [
            613
          ],
          user: [
            649
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        user_profile_max_fields: {
          created_at: [
            613
          ],
          expo_push_token: [
            11
          ],
          id: [
            658
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        user_profile_min_fields: {
          created_at: [
            613
          ],
          expo_push_token: [
            11
          ],
          id: [
            658
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        user_profile_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            615
          ],
          __typename: [
            11
          ]
        },
        user_profile_obj_rel_insert_input: {
          data: [
            620
          ],
          on_conflict: [
            625
          ],
          __typename: [
            11
          ]
        },
        user_profile_on_conflict: {
          constraint: [
            619
          ],
          update_columns: [
            630
          ],
          where: [
            618
          ],
          __typename: [
            11
          ]
        },
        user_profile_order_by: {
          created_at: [
            480
          ],
          expo_push_token: [
            480
          ],
          id: [
            480
          ],
          updated_at: [
            480
          ],
          user: [
            651
          ],
          user_id: [
            480
          ],
          __typename: [
            11
          ]
        },
        user_profile_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        user_profile_select_column: {},
        user_profile_set_input: {
          created_at: [
            613
          ],
          expo_push_token: [
            11
          ],
          id: [
            658
          ],
          updated_at: [
            613
          ],
          user_id: [
            658
          ],
          __typename: [
            11
          ]
        },
        user_profile_update_column: {},
        user_profile_updates: {
          _set: [
            629
          ],
          where: [
            618
          ],
          __typename: [
            11
          ]
        },
        users: {
          activeMfaType: [
            11
          ],
          authenticators: [
            90,
            {
              distinct_on: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                107,
                "[authUserAuthenticators_order_by!]"
              ],
              where: [
                97
              ]
            }
          ],
          authenticators_aggregate: [
            91,
            {
              distinct_on: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                107,
                "[authUserAuthenticators_order_by!]"
              ],
              where: [
                97
              ]
            }
          ],
          avatarUrl: [
            11
          ],
          createdAt: [
            613
          ],
          currentChallenge: [
            11
          ],
          defaultRole: [
            11
          ],
          defaultRoleByRole: [
            73
          ],
          disabled: [
            1
          ],
          displayName: [
            11
          ],
          email: [
            222
          ],
          emailVerified: [
            1
          ],
          groups: [
            356,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          groups_aggregate: [
            357,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          id: [
            658
          ],
          invitations: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitationsBySenderId: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitationsBySenderId_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitations_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          isAnonymous: [
            1
          ],
          lastSeen: [
            613
          ],
          locale: [
            11
          ],
          members: [
            420,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          members_aggregate: [
            421,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          metadata: [
            417,
            {
              path: [
                11
              ]
            }
          ],
          newEmail: [
            222
          ],
          notifications: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notifications_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          otpHash: [
            11
          ],
          otpHashExpiresAt: [
            613
          ],
          otpMethodLastUsed: [
            11
          ],
          passwordHash: [
            11
          ],
          phoneNumber: [
            11
          ],
          phoneNumberVerified: [
            1
          ],
          refreshTokens: [
            53,
            {
              distinct_on: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                67,
                "[authRefreshTokens_order_by!]"
              ],
              where: [
                58
              ]
            }
          ],
          refreshTokens_aggregate: [
            54,
            {
              distinct_on: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                67,
                "[authRefreshTokens_order_by!]"
              ],
              where: [
                58
              ]
            }
          ],
          roles: [
            147,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          roles_aggregate: [
            148,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          ticket: [
            11
          ],
          ticketExpiresAt: [
            613
          ],
          totpSecret: [
            11
          ],
          updatedAt: [
            613
          ],
          userProviders: [
            127,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          userProviders_aggregate: [
            128,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          user_profile: [
            615
          ],
          __typename: [
            11
          ]
        },
        users_aggregate: {
          aggregate: [
            634
          ],
          nodes: [
            632
          ],
          __typename: [
            11
          ]
        },
        users_aggregate_fields: {
          count: [
            5,
            {
              columns: [
                654,
                "[users_select_column!]"
              ],
              distinct: [
                1
              ]
            }
          ],
          max: [
            644
          ],
          min: [
            646
          ],
          __typename: [
            11
          ]
        },
        users_aggregate_order_by: {
          count: [
            480
          ],
          max: [
            645
          ],
          min: [
            647
          ],
          __typename: [
            11
          ]
        },
        users_append_input: {
          metadata: [
            417
          ],
          __typename: [
            11
          ]
        },
        users_arr_rel_insert_input: {
          data: [
            643
          ],
          on_conflict: [
            650
          ],
          __typename: [
            11
          ]
        },
        users_bool_exp: {
          _and: [
            638
          ],
          _not: [
            638
          ],
          _or: [
            638
          ],
          activeMfaType: [
            12
          ],
          authenticators: [
            97
          ],
          avatarUrl: [
            12
          ],
          createdAt: [
            614
          ],
          currentChallenge: [
            12
          ],
          defaultRole: [
            12
          ],
          defaultRoleByRole: [
            76
          ],
          disabled: [
            2
          ],
          displayName: [
            12
          ],
          email: [
            223
          ],
          emailVerified: [
            2
          ],
          groups: [
            363
          ],
          id: [
            659
          ],
          invitations: [
            399
          ],
          invitationsBySenderId: [
            399
          ],
          isAnonymous: [
            2
          ],
          lastSeen: [
            614
          ],
          locale: [
            12
          ],
          members: [
            427
          ],
          metadata: [
            419
          ],
          newEmail: [
            223
          ],
          notifications: [
            463
          ],
          otpHash: [
            12
          ],
          otpHashExpiresAt: [
            614
          ],
          otpMethodLastUsed: [
            12
          ],
          passwordHash: [
            12
          ],
          phoneNumber: [
            12
          ],
          phoneNumberVerified: [
            2
          ],
          refreshTokens: [
            58
          ],
          roles: [
            152
          ],
          ticket: [
            12
          ],
          ticketExpiresAt: [
            614
          ],
          totpSecret: [
            12
          ],
          updatedAt: [
            614
          ],
          userProviders: [
            132
          ],
          user_profile: [
            618
          ],
          __typename: [
            11
          ]
        },
        users_constraint: {},
        users_delete_at_path_input: {
          metadata: [
            11
          ],
          __typename: [
            11
          ]
        },
        users_delete_elem_input: {
          metadata: [
            5
          ],
          __typename: [
            11
          ]
        },
        users_delete_key_input: {
          metadata: [
            11
          ],
          __typename: [
            11
          ]
        },
        users_insert_input: {
          activeMfaType: [
            11
          ],
          authenticators: [
            94
          ],
          avatarUrl: [
            11
          ],
          createdAt: [
            613
          ],
          currentChallenge: [
            11
          ],
          defaultRole: [
            11
          ],
          defaultRoleByRole: [
            82
          ],
          disabled: [
            1
          ],
          displayName: [
            11
          ],
          email: [
            222
          ],
          emailVerified: [
            1
          ],
          groups: [
            360
          ],
          id: [
            658
          ],
          invitations: [
            398
          ],
          invitationsBySenderId: [
            398
          ],
          isAnonymous: [
            1
          ],
          lastSeen: [
            613
          ],
          locale: [
            11
          ],
          members: [
            424
          ],
          metadata: [
            417
          ],
          newEmail: [
            222
          ],
          notifications: [
            462
          ],
          otpHash: [
            11
          ],
          otpHashExpiresAt: [
            613
          ],
          otpMethodLastUsed: [
            11
          ],
          passwordHash: [
            11
          ],
          phoneNumber: [
            11
          ],
          phoneNumberVerified: [
            1
          ],
          refreshTokens: [
            57
          ],
          roles: [
            151
          ],
          ticket: [
            11
          ],
          ticketExpiresAt: [
            613
          ],
          totpSecret: [
            11
          ],
          updatedAt: [
            613
          ],
          userProviders: [
            131
          ],
          user_profile: [
            624
          ],
          __typename: [
            11
          ]
        },
        users_max_fields: {
          activeMfaType: [
            11
          ],
          avatarUrl: [
            11
          ],
          createdAt: [
            613
          ],
          currentChallenge: [
            11
          ],
          defaultRole: [
            11
          ],
          displayName: [
            11
          ],
          email: [
            222
          ],
          id: [
            658
          ],
          lastSeen: [
            613
          ],
          locale: [
            11
          ],
          newEmail: [
            222
          ],
          otpHash: [
            11
          ],
          otpHashExpiresAt: [
            613
          ],
          otpMethodLastUsed: [
            11
          ],
          passwordHash: [
            11
          ],
          phoneNumber: [
            11
          ],
          ticket: [
            11
          ],
          ticketExpiresAt: [
            613
          ],
          totpSecret: [
            11
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        users_max_order_by: {
          activeMfaType: [
            480
          ],
          avatarUrl: [
            480
          ],
          createdAt: [
            480
          ],
          currentChallenge: [
            480
          ],
          defaultRole: [
            480
          ],
          displayName: [
            480
          ],
          email: [
            480
          ],
          id: [
            480
          ],
          lastSeen: [
            480
          ],
          locale: [
            480
          ],
          newEmail: [
            480
          ],
          otpHash: [
            480
          ],
          otpHashExpiresAt: [
            480
          ],
          otpMethodLastUsed: [
            480
          ],
          passwordHash: [
            480
          ],
          phoneNumber: [
            480
          ],
          ticket: [
            480
          ],
          ticketExpiresAt: [
            480
          ],
          totpSecret: [
            480
          ],
          updatedAt: [
            480
          ],
          __typename: [
            11
          ]
        },
        users_min_fields: {
          activeMfaType: [
            11
          ],
          avatarUrl: [
            11
          ],
          createdAt: [
            613
          ],
          currentChallenge: [
            11
          ],
          defaultRole: [
            11
          ],
          displayName: [
            11
          ],
          email: [
            222
          ],
          id: [
            658
          ],
          lastSeen: [
            613
          ],
          locale: [
            11
          ],
          newEmail: [
            222
          ],
          otpHash: [
            11
          ],
          otpHashExpiresAt: [
            613
          ],
          otpMethodLastUsed: [
            11
          ],
          passwordHash: [
            11
          ],
          phoneNumber: [
            11
          ],
          ticket: [
            11
          ],
          ticketExpiresAt: [
            613
          ],
          totpSecret: [
            11
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        users_min_order_by: {
          activeMfaType: [
            480
          ],
          avatarUrl: [
            480
          ],
          createdAt: [
            480
          ],
          currentChallenge: [
            480
          ],
          defaultRole: [
            480
          ],
          displayName: [
            480
          ],
          email: [
            480
          ],
          id: [
            480
          ],
          lastSeen: [
            480
          ],
          locale: [
            480
          ],
          newEmail: [
            480
          ],
          otpHash: [
            480
          ],
          otpHashExpiresAt: [
            480
          ],
          otpMethodLastUsed: [
            480
          ],
          passwordHash: [
            480
          ],
          phoneNumber: [
            480
          ],
          ticket: [
            480
          ],
          ticketExpiresAt: [
            480
          ],
          totpSecret: [
            480
          ],
          updatedAt: [
            480
          ],
          __typename: [
            11
          ]
        },
        users_mutation_response: {
          affected_rows: [
            5
          ],
          returning: [
            632
          ],
          __typename: [
            11
          ]
        },
        users_obj_rel_insert_input: {
          data: [
            643
          ],
          on_conflict: [
            650
          ],
          __typename: [
            11
          ]
        },
        users_on_conflict: {
          constraint: [
            639
          ],
          update_columns: [
            656
          ],
          where: [
            638
          ],
          __typename: [
            11
          ]
        },
        users_order_by: {
          activeMfaType: [
            480
          ],
          authenticators_aggregate: [
            93
          ],
          avatarUrl: [
            480
          ],
          createdAt: [
            480
          ],
          currentChallenge: [
            480
          ],
          defaultRole: [
            480
          ],
          defaultRoleByRole: [
            84
          ],
          disabled: [
            480
          ],
          displayName: [
            480
          ],
          email: [
            480
          ],
          emailVerified: [
            480
          ],
          groups_aggregate: [
            359
          ],
          id: [
            480
          ],
          invitationsBySenderId_aggregate: [
            397
          ],
          invitations_aggregate: [
            397
          ],
          isAnonymous: [
            480
          ],
          lastSeen: [
            480
          ],
          locale: [
            480
          ],
          members_aggregate: [
            423
          ],
          metadata: [
            480
          ],
          newEmail: [
            480
          ],
          notifications_aggregate: [
            461
          ],
          otpHash: [
            480
          ],
          otpHashExpiresAt: [
            480
          ],
          otpMethodLastUsed: [
            480
          ],
          passwordHash: [
            480
          ],
          phoneNumber: [
            480
          ],
          phoneNumberVerified: [
            480
          ],
          refreshTokens_aggregate: [
            56
          ],
          roles_aggregate: [
            150
          ],
          ticket: [
            480
          ],
          ticketExpiresAt: [
            480
          ],
          totpSecret: [
            480
          ],
          updatedAt: [
            480
          ],
          userProviders_aggregate: [
            130
          ],
          user_profile: [
            626
          ],
          __typename: [
            11
          ]
        },
        users_pk_columns_input: {
          id: [
            658
          ],
          __typename: [
            11
          ]
        },
        users_prepend_input: {
          metadata: [
            417
          ],
          __typename: [
            11
          ]
        },
        users_select_column: {},
        users_set_input: {
          activeMfaType: [
            11
          ],
          avatarUrl: [
            11
          ],
          createdAt: [
            613
          ],
          currentChallenge: [
            11
          ],
          defaultRole: [
            11
          ],
          disabled: [
            1
          ],
          displayName: [
            11
          ],
          email: [
            222
          ],
          emailVerified: [
            1
          ],
          id: [
            658
          ],
          isAnonymous: [
            1
          ],
          lastSeen: [
            613
          ],
          locale: [
            11
          ],
          metadata: [
            417
          ],
          newEmail: [
            222
          ],
          otpHash: [
            11
          ],
          otpHashExpiresAt: [
            613
          ],
          otpMethodLastUsed: [
            11
          ],
          passwordHash: [
            11
          ],
          phoneNumber: [
            11
          ],
          phoneNumberVerified: [
            1
          ],
          ticket: [
            11
          ],
          ticketExpiresAt: [
            613
          ],
          totpSecret: [
            11
          ],
          updatedAt: [
            613
          ],
          __typename: [
            11
          ]
        },
        users_update_column: {},
        users_updates: {
          _append: [
            636
          ],
          _delete_at_path: [
            640
          ],
          _delete_elem: [
            641
          ],
          _delete_key: [
            642
          ],
          _prepend: [
            653
          ],
          _set: [
            655
          ],
          where: [
            638
          ],
          __typename: [
            11
          ]
        },
        uuid: {},
        uuid_comparison_exp: {
          _eq: [
            658
          ],
          _gt: [
            658
          ],
          _gte: [
            658
          ],
          _in: [
            658
          ],
          _is_null: [
            1
          ],
          _lt: [
            658
          ],
          _lte: [
            658
          ],
          _neq: [
            658
          ],
          _nin: [
            658
          ],
          __typename: [
            11
          ]
        },
        Query: {
          authProvider: [
            36,
            {
              id: [
                11,
                "String!"
              ]
            }
          ],
          authProviderRequest: [
            15,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authProviderRequests: [
            15,
            {
              distinct_on: [
                32,
                "[authProviderRequests_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                29,
                "[authProviderRequests_order_by!]"
              ],
              where: [
                19
              ]
            }
          ],
          authProviderRequestsAggregate: [
            16,
            {
              distinct_on: [
                32,
                "[authProviderRequests_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                29,
                "[authProviderRequests_order_by!]"
              ],
              where: [
                19
              ]
            }
          ],
          authProviders: [
            36,
            {
              distinct_on: [
                49,
                "[authProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                47,
                "[authProviders_order_by!]"
              ],
              where: [
                39
              ]
            }
          ],
          authProvidersAggregate: [
            37,
            {
              distinct_on: [
                49,
                "[authProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                47,
                "[authProviders_order_by!]"
              ],
              where: [
                39
              ]
            }
          ],
          authRefreshToken: [
            53,
            {
              refreshToken: [
                658,
                "uuid!"
              ]
            }
          ],
          authRefreshTokens: [
            53,
            {
              distinct_on: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                67,
                "[authRefreshTokens_order_by!]"
              ],
              where: [
                58
              ]
            }
          ],
          authRefreshTokensAggregate: [
            54,
            {
              distinct_on: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                67,
                "[authRefreshTokens_order_by!]"
              ],
              where: [
                58
              ]
            }
          ],
          authRole: [
            73,
            {
              role: [
                11,
                "String!"
              ]
            }
          ],
          authRoles: [
            73,
            {
              distinct_on: [
                86,
                "[authRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                84,
                "[authRoles_order_by!]"
              ],
              where: [
                76
              ]
            }
          ],
          authRolesAggregate: [
            74,
            {
              distinct_on: [
                86,
                "[authRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                84,
                "[authRoles_order_by!]"
              ],
              where: [
                76
              ]
            }
          ],
          authUserAuthenticator: [
            90,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authUserAuthenticators: [
            90,
            {
              distinct_on: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                107,
                "[authUserAuthenticators_order_by!]"
              ],
              where: [
                97
              ]
            }
          ],
          authUserAuthenticatorsAggregate: [
            91,
            {
              distinct_on: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                107,
                "[authUserAuthenticators_order_by!]"
              ],
              where: [
                97
              ]
            }
          ],
          authUserProvider: [
            127,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authUserProviders: [
            127,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          authUserProvidersAggregate: [
            128,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          authUserRole: [
            147,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authUserRoles: [
            147,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          authUserRolesAggregate: [
            148,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          auth_migrations: [
            167,
            {
              distinct_on: [
                181,
                "[auth_migrations_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                179,
                "[auth_migrations_order_by!]"
              ],
              where: [
                171
              ]
            }
          ],
          auth_migrations_aggregate: [
            168,
            {
              distinct_on: [
                181,
                "[auth_migrations_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                179,
                "[auth_migrations_order_by!]"
              ],
              where: [
                171
              ]
            }
          ],
          auth_migrations_by_pk: [
            167,
            {
              id: [
                5,
                "Int!"
              ]
            }
          ],
          bucket: [
            194,
            {
              id: [
                11,
                "String!"
              ]
            }
          ],
          buckets: [
            194,
            {
              distinct_on: [
                209,
                "[buckets_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                207,
                "[buckets_order_by!]"
              ],
              where: [
                198
              ]
            }
          ],
          bucketsAggregate: [
            195,
            {
              distinct_on: [
                209,
                "[buckets_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                207,
                "[buckets_order_by!]"
              ],
              where: [
                198
              ]
            }
          ],
          en_notifications: [
            224,
            {
              distinct_on: [
                239,
                "[en_notifications_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                237,
                "[en_notifications_order_by!]"
              ],
              where: [
                227
              ]
            }
          ],
          en_notifications_aggregate: [
            225,
            {
              distinct_on: [
                239,
                "[en_notifications_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                237,
                "[en_notifications_order_by!]"
              ],
              where: [
                227
              ]
            }
          ],
          en_notifications_by_pk: [
            224,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_permissions: [
            243,
            {
              distinct_on: [
                258,
                "[en_permissions_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                256,
                "[en_permissions_order_by!]"
              ],
              where: [
                246
              ]
            }
          ],
          en_permissions_aggregate: [
            244,
            {
              distinct_on: [
                258,
                "[en_permissions_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                256,
                "[en_permissions_order_by!]"
              ],
              where: [
                246
              ]
            }
          ],
          en_permissions_by_pk: [
            243,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_recurrencies: [
            262,
            {
              distinct_on: [
                277,
                "[en_recurrencies_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                275,
                "[en_recurrencies_order_by!]"
              ],
              where: [
                265
              ]
            }
          ],
          en_recurrencies_aggregate: [
            263,
            {
              distinct_on: [
                277,
                "[en_recurrencies_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                275,
                "[en_recurrencies_order_by!]"
              ],
              where: [
                265
              ]
            }
          ],
          en_recurrencies_by_pk: [
            262,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_statuses: [
            281,
            {
              distinct_on: [
                296,
                "[en_statuses_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                294,
                "[en_statuses_order_by!]"
              ],
              where: [
                284
              ]
            }
          ],
          en_statuses_aggregate: [
            282,
            {
              distinct_on: [
                296,
                "[en_statuses_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                294,
                "[en_statuses_order_by!]"
              ],
              where: [
                284
              ]
            }
          ],
          en_statuses_by_pk: [
            281,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_trans_types: [
            300,
            {
              distinct_on: [
                315,
                "[en_trans_types_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                313,
                "[en_trans_types_order_by!]"
              ],
              where: [
                303
              ]
            }
          ],
          en_trans_types_aggregate: [
            301,
            {
              distinct_on: [
                315,
                "[en_trans_types_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                313,
                "[en_trans_types_order_by!]"
              ],
              where: [
                303
              ]
            }
          ],
          en_trans_types_by_pk: [
            300,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          file: [
            319,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          files: [
            319,
            {
              distinct_on: [
                338,
                "[files_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                336,
                "[files_order_by!]"
              ],
              where: [
                326
              ]
            }
          ],
          filesAggregate: [
            320,
            {
              distinct_on: [
                338,
                "[files_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                336,
                "[files_order_by!]"
              ],
              where: [
                326
              ]
            }
          ],
          group: [
            356,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          group_aggregate: [
            357,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          group_by_pk: [
            356,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          invitation: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitation_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitation_by_pk: [
            394,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          member: [
            420,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          member_aggregate: [
            421,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          member_by_pk: [
            420,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          notification: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notification_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notification_by_pk: [
            458,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          payment: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payment_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payment_by_pk: [
            481,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          payment_review: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_review_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_review_by_pk: [
            501,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          period: [
            557,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          period_aggregate: [
            558,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          period_by_pk: [
            557,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          state_cache: [
            595,
            {
              distinct_on: [
                607,
                "[state_cache_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                605,
                "[state_cache_order_by!]"
              ],
              where: [
                598
              ]
            }
          ],
          state_cache_aggregate: [
            596,
            {
              distinct_on: [
                607,
                "[state_cache_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                605,
                "[state_cache_order_by!]"
              ],
              where: [
                598
              ]
            }
          ],
          state_cache_by_pk: [
            595,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          user: [
            632,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          user_profile: [
            615,
            {
              distinct_on: [
                628,
                "[user_profile_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                626,
                "[user_profile_order_by!]"
              ],
              where: [
                618
              ]
            }
          ],
          user_profile_aggregate: [
            616,
            {
              distinct_on: [
                628,
                "[user_profile_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                626,
                "[user_profile_order_by!]"
              ],
              where: [
                618
              ]
            }
          ],
          user_profile_by_pk: [
            615,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          users: [
            632,
            {
              distinct_on: [
                654,
                "[users_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                651,
                "[users_order_by!]"
              ],
              where: [
                638
              ]
            }
          ],
          usersAggregate: [
            633,
            {
              distinct_on: [
                654,
                "[users_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                651,
                "[users_order_by!]"
              ],
              where: [
                638
              ]
            }
          ],
          __typename: [
            11
          ]
        },
        Mutation: {
          complete_period: [
            10,
            {
              props: [
                9
              ]
            }
          ],
          deleteAuthProvider: [
            36,
            {
              id: [
                11,
                "String!"
              ]
            }
          ],
          deleteAuthProviderRequest: [
            15,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteAuthProviderRequests: [
            27,
            {
              where: [
                19,
                "authProviderRequests_bool_exp!"
              ]
            }
          ],
          deleteAuthProviders: [
            44,
            {
              where: [
                39,
                "authProviders_bool_exp!"
              ]
            }
          ],
          deleteAuthRefreshToken: [
            53,
            {
              refreshToken: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteAuthRefreshTokens: [
            65,
            {
              where: [
                58,
                "authRefreshTokens_bool_exp!"
              ]
            }
          ],
          deleteAuthRole: [
            73,
            {
              role: [
                11,
                "String!"
              ]
            }
          ],
          deleteAuthRoles: [
            81,
            {
              where: [
                76,
                "authRoles_bool_exp!"
              ]
            }
          ],
          deleteAuthUserAuthenticator: [
            90,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteAuthUserAuthenticators: [
            105,
            {
              where: [
                97,
                "authUserAuthenticators_bool_exp!"
              ]
            }
          ],
          deleteAuthUserProvider: [
            127,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteAuthUserProviders: [
            139,
            {
              where: [
                132,
                "authUserProviders_bool_exp!"
              ]
            }
          ],
          deleteAuthUserRole: [
            147,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteAuthUserRoles: [
            159,
            {
              where: [
                152,
                "authUserRoles_bool_exp!"
              ]
            }
          ],
          deleteBucket: [
            194,
            {
              id: [
                11,
                "String!"
              ]
            }
          ],
          deleteBuckets: [
            204,
            {
              where: [
                198,
                "buckets_bool_exp!"
              ]
            }
          ],
          deleteFile: [
            319,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteFiles: [
            334,
            {
              where: [
                326,
                "files_bool_exp!"
              ]
            }
          ],
          deleteUser: [
            632,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          deleteUsers: [
            648,
            {
              where: [
                638,
                "users_bool_exp!"
              ]
            }
          ],
          delete_auth_migrations: [
            177,
            {
              where: [
                171,
                "auth_migrations_bool_exp!"
              ]
            }
          ],
          delete_auth_migrations_by_pk: [
            167,
            {
              id: [
                5,
                "Int!"
              ]
            }
          ],
          delete_en_notifications: [
            234,
            {
              where: [
                227,
                "en_notifications_bool_exp!"
              ]
            }
          ],
          delete_en_notifications_by_pk: [
            224,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          delete_en_permissions: [
            253,
            {
              where: [
                246,
                "en_permissions_bool_exp!"
              ]
            }
          ],
          delete_en_permissions_by_pk: [
            243,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          delete_en_recurrencies: [
            272,
            {
              where: [
                265,
                "en_recurrencies_bool_exp!"
              ]
            }
          ],
          delete_en_recurrencies_by_pk: [
            262,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          delete_en_statuses: [
            291,
            {
              where: [
                284,
                "en_statuses_bool_exp!"
              ]
            }
          ],
          delete_en_statuses_by_pk: [
            281,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          delete_en_trans_types: [
            310,
            {
              where: [
                303,
                "en_trans_types_bool_exp!"
              ]
            }
          ],
          delete_en_trans_types_by_pk: [
            300,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          delete_group: [
            371,
            {
              where: [
                363,
                "group_bool_exp!"
              ]
            }
          ],
          delete_group_by_pk: [
            356,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_invitation: [
            406,
            {
              where: [
                399,
                "invitation_bool_exp!"
              ]
            }
          ],
          delete_invitation_by_pk: [
            394,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_member: [
            435,
            {
              where: [
                427,
                "member_bool_exp!"
              ]
            }
          ],
          delete_member_by_pk: [
            420,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_notification: [
            470,
            {
              where: [
                463,
                "notification_bool_exp!"
              ]
            }
          ],
          delete_notification_by_pk: [
            458,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_payment: [
            496,
            {
              where: [
                488,
                "payment_bool_exp!"
              ]
            }
          ],
          delete_payment_by_pk: [
            481,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_payment_review: [
            516,
            {
              where: [
                508,
                "payment_review_bool_exp!"
              ]
            }
          ],
          delete_payment_review_by_pk: [
            501,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_period: [
            572,
            {
              where: [
                564,
                "period_bool_exp!"
              ]
            }
          ],
          delete_period_by_pk: [
            557,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_state_cache: [
            603,
            {
              where: [
                598,
                "state_cache_bool_exp!"
              ]
            }
          ],
          delete_state_cache_by_pk: [
            595,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          delete_user_profile: [
            623,
            {
              where: [
                618,
                "user_profile_bool_exp!"
              ]
            }
          ],
          delete_user_profile_by_pk: [
            615,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          insertAuthProvider: [
            36,
            {
              object: [
                41,
                "authProviders_insert_input!"
              ],
              on_conflict: [
                46
              ]
            }
          ],
          insertAuthProviderRequest: [
            15,
            {
              object: [
                24,
                "authProviderRequests_insert_input!"
              ],
              on_conflict: [
                28
              ]
            }
          ],
          insertAuthProviderRequests: [
            27,
            {
              objects: [
                24,
                "[authProviderRequests_insert_input!]!"
              ],
              on_conflict: [
                28
              ]
            }
          ],
          insertAuthProviders: [
            44,
            {
              objects: [
                41,
                "[authProviders_insert_input!]!"
              ],
              on_conflict: [
                46
              ]
            }
          ],
          insertAuthRefreshToken: [
            53,
            {
              object: [
                60,
                "authRefreshTokens_insert_input!"
              ],
              on_conflict: [
                66
              ]
            }
          ],
          insertAuthRefreshTokens: [
            65,
            {
              objects: [
                60,
                "[authRefreshTokens_insert_input!]!"
              ],
              on_conflict: [
                66
              ]
            }
          ],
          insertAuthRole: [
            73,
            {
              object: [
                78,
                "authRoles_insert_input!"
              ],
              on_conflict: [
                83
              ]
            }
          ],
          insertAuthRoles: [
            81,
            {
              objects: [
                78,
                "[authRoles_insert_input!]!"
              ],
              on_conflict: [
                83
              ]
            }
          ],
          insertAuthUserAuthenticator: [
            90,
            {
              object: [
                100,
                "authUserAuthenticators_insert_input!"
              ],
              on_conflict: [
                106
              ]
            }
          ],
          insertAuthUserAuthenticators: [
            105,
            {
              objects: [
                100,
                "[authUserAuthenticators_insert_input!]!"
              ],
              on_conflict: [
                106
              ]
            }
          ],
          insertAuthUserProvider: [
            127,
            {
              object: [
                134,
                "authUserProviders_insert_input!"
              ],
              on_conflict: [
                140
              ]
            }
          ],
          insertAuthUserProviders: [
            139,
            {
              objects: [
                134,
                "[authUserProviders_insert_input!]!"
              ],
              on_conflict: [
                140
              ]
            }
          ],
          insertAuthUserRole: [
            147,
            {
              object: [
                154,
                "authUserRoles_insert_input!"
              ],
              on_conflict: [
                160
              ]
            }
          ],
          insertAuthUserRoles: [
            159,
            {
              objects: [
                154,
                "[authUserRoles_insert_input!]!"
              ],
              on_conflict: [
                160
              ]
            }
          ],
          insertBucket: [
            194,
            {
              object: [
                201,
                "buckets_insert_input!"
              ],
              on_conflict: [
                206
              ]
            }
          ],
          insertBuckets: [
            204,
            {
              objects: [
                201,
                "[buckets_insert_input!]!"
              ],
              on_conflict: [
                206
              ]
            }
          ],
          insertFile: [
            319,
            {
              object: [
                329,
                "files_insert_input!"
              ],
              on_conflict: [
                335
              ]
            }
          ],
          insertFiles: [
            334,
            {
              objects: [
                329,
                "[files_insert_input!]!"
              ],
              on_conflict: [
                335
              ]
            }
          ],
          insertUser: [
            632,
            {
              object: [
                643,
                "users_insert_input!"
              ],
              on_conflict: [
                650
              ]
            }
          ],
          insertUsers: [
            648,
            {
              objects: [
                643,
                "[users_insert_input!]!"
              ],
              on_conflict: [
                650
              ]
            }
          ],
          insert_auth_migrations: [
            177,
            {
              objects: [
                174,
                "[auth_migrations_insert_input!]!"
              ],
              on_conflict: [
                178
              ]
            }
          ],
          insert_auth_migrations_one: [
            167,
            {
              object: [
                174,
                "auth_migrations_insert_input!"
              ],
              on_conflict: [
                178
              ]
            }
          ],
          insert_en_notifications: [
            234,
            {
              objects: [
                231,
                "[en_notifications_insert_input!]!"
              ],
              on_conflict: [
                236
              ]
            }
          ],
          insert_en_notifications_one: [
            224,
            {
              object: [
                231,
                "en_notifications_insert_input!"
              ],
              on_conflict: [
                236
              ]
            }
          ],
          insert_en_permissions: [
            253,
            {
              objects: [
                250,
                "[en_permissions_insert_input!]!"
              ],
              on_conflict: [
                255
              ]
            }
          ],
          insert_en_permissions_one: [
            243,
            {
              object: [
                250,
                "en_permissions_insert_input!"
              ],
              on_conflict: [
                255
              ]
            }
          ],
          insert_en_recurrencies: [
            272,
            {
              objects: [
                269,
                "[en_recurrencies_insert_input!]!"
              ],
              on_conflict: [
                274
              ]
            }
          ],
          insert_en_recurrencies_one: [
            262,
            {
              object: [
                269,
                "en_recurrencies_insert_input!"
              ],
              on_conflict: [
                274
              ]
            }
          ],
          insert_en_statuses: [
            291,
            {
              objects: [
                288,
                "[en_statuses_insert_input!]!"
              ],
              on_conflict: [
                293
              ]
            }
          ],
          insert_en_statuses_one: [
            281,
            {
              object: [
                288,
                "en_statuses_insert_input!"
              ],
              on_conflict: [
                293
              ]
            }
          ],
          insert_en_trans_types: [
            310,
            {
              objects: [
                307,
                "[en_trans_types_insert_input!]!"
              ],
              on_conflict: [
                312
              ]
            }
          ],
          insert_en_trans_types_one: [
            300,
            {
              object: [
                307,
                "en_trans_types_insert_input!"
              ],
              on_conflict: [
                312
              ]
            }
          ],
          insert_group: [
            371,
            {
              objects: [
                366,
                "[group_insert_input!]!"
              ],
              on_conflict: [
                373
              ]
            }
          ],
          insert_group_one: [
            356,
            {
              object: [
                366,
                "group_insert_input!"
              ],
              on_conflict: [
                373
              ]
            }
          ],
          insert_invitation: [
            406,
            {
              objects: [
                401,
                "[invitation_insert_input!]!"
              ],
              on_conflict: [
                408
              ]
            }
          ],
          insert_invitation_one: [
            394,
            {
              object: [
                401,
                "invitation_insert_input!"
              ],
              on_conflict: [
                408
              ]
            }
          ],
          insert_member: [
            435,
            {
              objects: [
                430,
                "[member_insert_input!]!"
              ],
              on_conflict: [
                437
              ]
            }
          ],
          insert_member_one: [
            420,
            {
              object: [
                430,
                "member_insert_input!"
              ],
              on_conflict: [
                437
              ]
            }
          ],
          insert_notification: [
            470,
            {
              objects: [
                465,
                "[notification_insert_input!]!"
              ],
              on_conflict: [
                471
              ]
            }
          ],
          insert_notification_one: [
            458,
            {
              object: [
                465,
                "notification_insert_input!"
              ],
              on_conflict: [
                471
              ]
            }
          ],
          insert_payment: [
            496,
            {
              objects: [
                491,
                "[payment_insert_input!]!"
              ],
              on_conflict: [
                498
              ]
            }
          ],
          insert_payment_one: [
            481,
            {
              object: [
                491,
                "payment_insert_input!"
              ],
              on_conflict: [
                498
              ]
            }
          ],
          insert_payment_review: [
            516,
            {
              objects: [
                511,
                "[payment_review_insert_input!]!"
              ],
              on_conflict: [
                518
              ]
            }
          ],
          insert_payment_review_one: [
            501,
            {
              object: [
                511,
                "payment_review_insert_input!"
              ],
              on_conflict: [
                518
              ]
            }
          ],
          insert_period: [
            572,
            {
              objects: [
                567,
                "[period_insert_input!]!"
              ],
              on_conflict: [
                574
              ]
            }
          ],
          insert_period_one: [
            557,
            {
              object: [
                567,
                "period_insert_input!"
              ],
              on_conflict: [
                574
              ]
            }
          ],
          insert_state_cache: [
            603,
            {
              objects: [
                600,
                "[state_cache_insert_input!]!"
              ],
              on_conflict: [
                604
              ]
            }
          ],
          insert_state_cache_one: [
            595,
            {
              object: [
                600,
                "state_cache_insert_input!"
              ],
              on_conflict: [
                604
              ]
            }
          ],
          insert_user_profile: [
            623,
            {
              objects: [
                620,
                "[user_profile_insert_input!]!"
              ],
              on_conflict: [
                625
              ]
            }
          ],
          insert_user_profile_one: [
            615,
            {
              object: [
                620,
                "user_profile_insert_input!"
              ],
              on_conflict: [
                625
              ]
            }
          ],
          invite_member: [
            8,
            {
              arg: [
                7,
                "InviteInput!"
              ]
            }
          ],
          request_balances: [
            0,
            {
              input: [
                3,
                "[CURRENCY]"
              ]
            }
          ],
          send_message: [
            14,
            {
              arg: [
                13,
                "TestMessageInput!"
              ]
            }
          ],
          updateAuthProvider: [
            36,
            {
              _set: [
                50
              ],
              pk_columns: [
                48,
                "authProviders_pk_columns_input!"
              ]
            }
          ],
          updateAuthProviderRequest: [
            15,
            {
              _append: [
                18
              ],
              _delete_at_path: [
                21
              ],
              _delete_elem: [
                22
              ],
              _delete_key: [
                23
              ],
              _prepend: [
                31
              ],
              _set: [
                33
              ],
              pk_columns: [
                30,
                "authProviderRequests_pk_columns_input!"
              ]
            }
          ],
          updateAuthProviderRequests: [
            27,
            {
              _append: [
                18
              ],
              _delete_at_path: [
                21
              ],
              _delete_elem: [
                22
              ],
              _delete_key: [
                23
              ],
              _prepend: [
                31
              ],
              _set: [
                33
              ],
              where: [
                19,
                "authProviderRequests_bool_exp!"
              ]
            }
          ],
          updateAuthProviders: [
            44,
            {
              _set: [
                50
              ],
              where: [
                39,
                "authProviders_bool_exp!"
              ]
            }
          ],
          updateAuthRefreshToken: [
            53,
            {
              _set: [
                70
              ],
              pk_columns: [
                68,
                "authRefreshTokens_pk_columns_input!"
              ]
            }
          ],
          updateAuthRefreshTokens: [
            65,
            {
              _set: [
                70
              ],
              where: [
                58,
                "authRefreshTokens_bool_exp!"
              ]
            }
          ],
          updateAuthRole: [
            73,
            {
              _set: [
                87
              ],
              pk_columns: [
                85,
                "authRoles_pk_columns_input!"
              ]
            }
          ],
          updateAuthRoles: [
            81,
            {
              _set: [
                87
              ],
              where: [
                76,
                "authRoles_bool_exp!"
              ]
            }
          ],
          updateAuthUserAuthenticator: [
            90,
            {
              _inc: [
                99
              ],
              _set: [
                110
              ],
              pk_columns: [
                108,
                "authUserAuthenticators_pk_columns_input!"
              ]
            }
          ],
          updateAuthUserAuthenticators: [
            105,
            {
              _inc: [
                99
              ],
              _set: [
                110
              ],
              where: [
                97,
                "authUserAuthenticators_bool_exp!"
              ]
            }
          ],
          updateAuthUserProvider: [
            127,
            {
              _set: [
                144
              ],
              pk_columns: [
                142,
                "authUserProviders_pk_columns_input!"
              ]
            }
          ],
          updateAuthUserProviders: [
            139,
            {
              _set: [
                144
              ],
              where: [
                132,
                "authUserProviders_bool_exp!"
              ]
            }
          ],
          updateAuthUserRole: [
            147,
            {
              _set: [
                164
              ],
              pk_columns: [
                162,
                "authUserRoles_pk_columns_input!"
              ]
            }
          ],
          updateAuthUserRoles: [
            159,
            {
              _set: [
                164
              ],
              where: [
                152,
                "authUserRoles_bool_exp!"
              ]
            }
          ],
          updateBucket: [
            194,
            {
              _inc: [
                200
              ],
              _set: [
                210
              ],
              pk_columns: [
                208,
                "buckets_pk_columns_input!"
              ]
            }
          ],
          updateBuckets: [
            204,
            {
              _inc: [
                200
              ],
              _set: [
                210
              ],
              where: [
                198,
                "buckets_bool_exp!"
              ]
            }
          ],
          updateFile: [
            319,
            {
              _inc: [
                328
              ],
              _set: [
                339
              ],
              pk_columns: [
                337,
                "files_pk_columns_input!"
              ]
            }
          ],
          updateFiles: [
            334,
            {
              _inc: [
                328
              ],
              _set: [
                339
              ],
              where: [
                326,
                "files_bool_exp!"
              ]
            }
          ],
          updateUser: [
            632,
            {
              _append: [
                636
              ],
              _delete_at_path: [
                640
              ],
              _delete_elem: [
                641
              ],
              _delete_key: [
                642
              ],
              _prepend: [
                653
              ],
              _set: [
                655
              ],
              pk_columns: [
                652,
                "users_pk_columns_input!"
              ]
            }
          ],
          updateUsers: [
            648,
            {
              _append: [
                636
              ],
              _delete_at_path: [
                640
              ],
              _delete_elem: [
                641
              ],
              _delete_key: [
                642
              ],
              _prepend: [
                653
              ],
              _set: [
                655
              ],
              where: [
                638,
                "users_bool_exp!"
              ]
            }
          ],
          update_authProviderRequests_many: [
            27,
            {
              updates: [
                35,
                "[authProviderRequests_updates!]!"
              ]
            }
          ],
          update_authProviders_many: [
            44,
            {
              updates: [
                52,
                "[authProviders_updates!]!"
              ]
            }
          ],
          update_authRefreshTokens_many: [
            65,
            {
              updates: [
                72,
                "[authRefreshTokens_updates!]!"
              ]
            }
          ],
          update_authRoles_many: [
            81,
            {
              updates: [
                89,
                "[authRoles_updates!]!"
              ]
            }
          ],
          update_authUserAuthenticators_many: [
            105,
            {
              updates: [
                120,
                "[authUserAuthenticators_updates!]!"
              ]
            }
          ],
          update_authUserProviders_many: [
            139,
            {
              updates: [
                146,
                "[authUserProviders_updates!]!"
              ]
            }
          ],
          update_authUserRoles_many: [
            159,
            {
              updates: [
                166,
                "[authUserRoles_updates!]!"
              ]
            }
          ],
          update_auth_migrations: [
            177,
            {
              _inc: [
                173
              ],
              _set: [
                182
              ],
              where: [
                171,
                "auth_migrations_bool_exp!"
              ]
            }
          ],
          update_auth_migrations_by_pk: [
            167,
            {
              _inc: [
                173
              ],
              _set: [
                182
              ],
              pk_columns: [
                180,
                "auth_migrations_pk_columns_input!"
              ]
            }
          ],
          update_auth_migrations_many: [
            177,
            {
              updates: [
                188,
                "[auth_migrations_updates!]!"
              ]
            }
          ],
          update_buckets_many: [
            204,
            {
              updates: [
                216,
                "[buckets_updates!]!"
              ]
            }
          ],
          update_en_notifications: [
            234,
            {
              _set: [
                240
              ],
              where: [
                227,
                "en_notifications_bool_exp!"
              ]
            }
          ],
          update_en_notifications_by_pk: [
            224,
            {
              _set: [
                240
              ],
              pk_columns: [
                238,
                "en_notifications_pk_columns_input!"
              ]
            }
          ],
          update_en_notifications_many: [
            234,
            {
              updates: [
                242,
                "[en_notifications_updates!]!"
              ]
            }
          ],
          update_en_permissions: [
            253,
            {
              _set: [
                259
              ],
              where: [
                246,
                "en_permissions_bool_exp!"
              ]
            }
          ],
          update_en_permissions_by_pk: [
            243,
            {
              _set: [
                259
              ],
              pk_columns: [
                257,
                "en_permissions_pk_columns_input!"
              ]
            }
          ],
          update_en_permissions_many: [
            253,
            {
              updates: [
                261,
                "[en_permissions_updates!]!"
              ]
            }
          ],
          update_en_recurrencies: [
            272,
            {
              _set: [
                278
              ],
              where: [
                265,
                "en_recurrencies_bool_exp!"
              ]
            }
          ],
          update_en_recurrencies_by_pk: [
            262,
            {
              _set: [
                278
              ],
              pk_columns: [
                276,
                "en_recurrencies_pk_columns_input!"
              ]
            }
          ],
          update_en_recurrencies_many: [
            272,
            {
              updates: [
                280,
                "[en_recurrencies_updates!]!"
              ]
            }
          ],
          update_en_statuses: [
            291,
            {
              _set: [
                297
              ],
              where: [
                284,
                "en_statuses_bool_exp!"
              ]
            }
          ],
          update_en_statuses_by_pk: [
            281,
            {
              _set: [
                297
              ],
              pk_columns: [
                295,
                "en_statuses_pk_columns_input!"
              ]
            }
          ],
          update_en_statuses_many: [
            291,
            {
              updates: [
                299,
                "[en_statuses_updates!]!"
              ]
            }
          ],
          update_en_trans_types: [
            310,
            {
              _set: [
                316
              ],
              where: [
                303,
                "en_trans_types_bool_exp!"
              ]
            }
          ],
          update_en_trans_types_by_pk: [
            300,
            {
              _set: [
                316
              ],
              pk_columns: [
                314,
                "en_trans_types_pk_columns_input!"
              ]
            }
          ],
          update_en_trans_types_many: [
            310,
            {
              updates: [
                318,
                "[en_trans_types_updates!]!"
              ]
            }
          ],
          update_files_many: [
            334,
            {
              updates: [
                349,
                "[files_updates!]!"
              ]
            }
          ],
          update_group: [
            371,
            {
              _inc: [
                365
              ],
              _set: [
                377
              ],
              where: [
                363,
                "group_bool_exp!"
              ]
            }
          ],
          update_group_by_pk: [
            356,
            {
              _inc: [
                365
              ],
              _set: [
                377
              ],
              pk_columns: [
                375,
                "group_pk_columns_input!"
              ]
            }
          ],
          update_group_many: [
            371,
            {
              updates: [
                387,
                "[group_updates!]!"
              ]
            }
          ],
          update_invitation: [
            406,
            {
              _set: [
                412
              ],
              where: [
                399,
                "invitation_bool_exp!"
              ]
            }
          ],
          update_invitation_by_pk: [
            394,
            {
              _set: [
                412
              ],
              pk_columns: [
                410,
                "invitation_pk_columns_input!"
              ]
            }
          ],
          update_invitation_many: [
            406,
            {
              updates: [
                414,
                "[invitation_updates!]!"
              ]
            }
          ],
          update_member: [
            435,
            {
              _inc: [
                429
              ],
              _set: [
                441
              ],
              where: [
                427,
                "member_bool_exp!"
              ]
            }
          ],
          update_member_by_pk: [
            420,
            {
              _inc: [
                429
              ],
              _set: [
                441
              ],
              pk_columns: [
                439,
                "member_pk_columns_input!"
              ]
            }
          ],
          update_member_many: [
            435,
            {
              updates: [
                451,
                "[member_updates!]!"
              ]
            }
          ],
          update_notification: [
            470,
            {
              _set: [
                475
              ],
              where: [
                463,
                "notification_bool_exp!"
              ]
            }
          ],
          update_notification_by_pk: [
            458,
            {
              _set: [
                475
              ],
              pk_columns: [
                473,
                "notification_pk_columns_input!"
              ]
            }
          ],
          update_notification_many: [
            470,
            {
              updates: [
                477,
                "[notification_updates!]!"
              ]
            }
          ],
          update_payment: [
            496,
            {
              _inc: [
                490
              ],
              _set: [
                540
              ],
              where: [
                488,
                "payment_bool_exp!"
              ]
            }
          ],
          update_payment_by_pk: [
            481,
            {
              _inc: [
                490
              ],
              _set: [
                540
              ],
              pk_columns: [
                500,
                "payment_pk_columns_input!"
              ]
            }
          ],
          update_payment_many: [
            496,
            {
              updates: [
                550,
                "[payment_updates!]!"
              ]
            }
          ],
          update_payment_review: [
            516,
            {
              _inc: [
                510
              ],
              _set: [
                522
              ],
              where: [
                508,
                "payment_review_bool_exp!"
              ]
            }
          ],
          update_payment_review_by_pk: [
            501,
            {
              _inc: [
                510
              ],
              _set: [
                522
              ],
              pk_columns: [
                520,
                "payment_review_pk_columns_input!"
              ]
            }
          ],
          update_payment_review_many: [
            516,
            {
              updates: [
                532,
                "[payment_review_updates!]!"
              ]
            }
          ],
          update_period: [
            572,
            {
              _inc: [
                566
              ],
              _set: [
                578
              ],
              where: [
                564,
                "period_bool_exp!"
              ]
            }
          ],
          update_period_by_pk: [
            557,
            {
              _inc: [
                566
              ],
              _set: [
                578
              ],
              pk_columns: [
                576,
                "period_pk_columns_input!"
              ]
            }
          ],
          update_period_many: [
            572,
            {
              updates: [
                588,
                "[period_updates!]!"
              ]
            }
          ],
          update_state_cache: [
            603,
            {
              _set: [
                608
              ],
              where: [
                598,
                "state_cache_bool_exp!"
              ]
            }
          ],
          update_state_cache_by_pk: [
            595,
            {
              _set: [
                608
              ],
              pk_columns: [
                606,
                "state_cache_pk_columns_input!"
              ]
            }
          ],
          update_state_cache_many: [
            603,
            {
              updates: [
                610,
                "[state_cache_updates!]!"
              ]
            }
          ],
          update_user_profile: [
            623,
            {
              _set: [
                629
              ],
              where: [
                618,
                "user_profile_bool_exp!"
              ]
            }
          ],
          update_user_profile_by_pk: [
            615,
            {
              _set: [
                629
              ],
              pk_columns: [
                627,
                "user_profile_pk_columns_input!"
              ]
            }
          ],
          update_user_profile_many: [
            623,
            {
              updates: [
                631,
                "[user_profile_updates!]!"
              ]
            }
          ],
          update_users_many: [
            648,
            {
              updates: [
                657,
                "[users_updates!]!"
              ]
            }
          ],
          __typename: [
            11
          ]
        },
        Subscription: {
          authProvider: [
            36,
            {
              id: [
                11,
                "String!"
              ]
            }
          ],
          authProviderRequest: [
            15,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authProviderRequests: [
            15,
            {
              distinct_on: [
                32,
                "[authProviderRequests_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                29,
                "[authProviderRequests_order_by!]"
              ],
              where: [
                19
              ]
            }
          ],
          authProviderRequestsAggregate: [
            16,
            {
              distinct_on: [
                32,
                "[authProviderRequests_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                29,
                "[authProviderRequests_order_by!]"
              ],
              where: [
                19
              ]
            }
          ],
          authProviders: [
            36,
            {
              distinct_on: [
                49,
                "[authProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                47,
                "[authProviders_order_by!]"
              ],
              where: [
                39
              ]
            }
          ],
          authProvidersAggregate: [
            37,
            {
              distinct_on: [
                49,
                "[authProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                47,
                "[authProviders_order_by!]"
              ],
              where: [
                39
              ]
            }
          ],
          authRefreshToken: [
            53,
            {
              refreshToken: [
                658,
                "uuid!"
              ]
            }
          ],
          authRefreshTokens: [
            53,
            {
              distinct_on: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                67,
                "[authRefreshTokens_order_by!]"
              ],
              where: [
                58
              ]
            }
          ],
          authRefreshTokensAggregate: [
            54,
            {
              distinct_on: [
                69,
                "[authRefreshTokens_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                67,
                "[authRefreshTokens_order_by!]"
              ],
              where: [
                58
              ]
            }
          ],
          authRole: [
            73,
            {
              role: [
                11,
                "String!"
              ]
            }
          ],
          authRoles: [
            73,
            {
              distinct_on: [
                86,
                "[authRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                84,
                "[authRoles_order_by!]"
              ],
              where: [
                76
              ]
            }
          ],
          authRolesAggregate: [
            74,
            {
              distinct_on: [
                86,
                "[authRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                84,
                "[authRoles_order_by!]"
              ],
              where: [
                76
              ]
            }
          ],
          authUserAuthenticator: [
            90,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authUserAuthenticators: [
            90,
            {
              distinct_on: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                107,
                "[authUserAuthenticators_order_by!]"
              ],
              where: [
                97
              ]
            }
          ],
          authUserAuthenticatorsAggregate: [
            91,
            {
              distinct_on: [
                109,
                "[authUserAuthenticators_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                107,
                "[authUserAuthenticators_order_by!]"
              ],
              where: [
                97
              ]
            }
          ],
          authUserProvider: [
            127,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authUserProviders: [
            127,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          authUserProvidersAggregate: [
            128,
            {
              distinct_on: [
                143,
                "[authUserProviders_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                141,
                "[authUserProviders_order_by!]"
              ],
              where: [
                132
              ]
            }
          ],
          authUserRole: [
            147,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          authUserRoles: [
            147,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          authUserRolesAggregate: [
            148,
            {
              distinct_on: [
                163,
                "[authUserRoles_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                161,
                "[authUserRoles_order_by!]"
              ],
              where: [
                152
              ]
            }
          ],
          auth_migrations: [
            167,
            {
              distinct_on: [
                181,
                "[auth_migrations_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                179,
                "[auth_migrations_order_by!]"
              ],
              where: [
                171
              ]
            }
          ],
          auth_migrations_aggregate: [
            168,
            {
              distinct_on: [
                181,
                "[auth_migrations_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                179,
                "[auth_migrations_order_by!]"
              ],
              where: [
                171
              ]
            }
          ],
          auth_migrations_by_pk: [
            167,
            {
              id: [
                5,
                "Int!"
              ]
            }
          ],
          bucket: [
            194,
            {
              id: [
                11,
                "String!"
              ]
            }
          ],
          buckets: [
            194,
            {
              distinct_on: [
                209,
                "[buckets_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                207,
                "[buckets_order_by!]"
              ],
              where: [
                198
              ]
            }
          ],
          bucketsAggregate: [
            195,
            {
              distinct_on: [
                209,
                "[buckets_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                207,
                "[buckets_order_by!]"
              ],
              where: [
                198
              ]
            }
          ],
          en_notifications: [
            224,
            {
              distinct_on: [
                239,
                "[en_notifications_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                237,
                "[en_notifications_order_by!]"
              ],
              where: [
                227
              ]
            }
          ],
          en_notifications_aggregate: [
            225,
            {
              distinct_on: [
                239,
                "[en_notifications_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                237,
                "[en_notifications_order_by!]"
              ],
              where: [
                227
              ]
            }
          ],
          en_notifications_by_pk: [
            224,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_permissions: [
            243,
            {
              distinct_on: [
                258,
                "[en_permissions_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                256,
                "[en_permissions_order_by!]"
              ],
              where: [
                246
              ]
            }
          ],
          en_permissions_aggregate: [
            244,
            {
              distinct_on: [
                258,
                "[en_permissions_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                256,
                "[en_permissions_order_by!]"
              ],
              where: [
                246
              ]
            }
          ],
          en_permissions_by_pk: [
            243,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_recurrencies: [
            262,
            {
              distinct_on: [
                277,
                "[en_recurrencies_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                275,
                "[en_recurrencies_order_by!]"
              ],
              where: [
                265
              ]
            }
          ],
          en_recurrencies_aggregate: [
            263,
            {
              distinct_on: [
                277,
                "[en_recurrencies_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                275,
                "[en_recurrencies_order_by!]"
              ],
              where: [
                265
              ]
            }
          ],
          en_recurrencies_by_pk: [
            262,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_statuses: [
            281,
            {
              distinct_on: [
                296,
                "[en_statuses_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                294,
                "[en_statuses_order_by!]"
              ],
              where: [
                284
              ]
            }
          ],
          en_statuses_aggregate: [
            282,
            {
              distinct_on: [
                296,
                "[en_statuses_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                294,
                "[en_statuses_order_by!]"
              ],
              where: [
                284
              ]
            }
          ],
          en_statuses_by_pk: [
            281,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          en_trans_types: [
            300,
            {
              distinct_on: [
                315,
                "[en_trans_types_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                313,
                "[en_trans_types_order_by!]"
              ],
              where: [
                303
              ]
            }
          ],
          en_trans_types_aggregate: [
            301,
            {
              distinct_on: [
                315,
                "[en_trans_types_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                313,
                "[en_trans_types_order_by!]"
              ],
              where: [
                303
              ]
            }
          ],
          en_trans_types_by_pk: [
            300,
            {
              value: [
                11,
                "String!"
              ]
            }
          ],
          file: [
            319,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          files: [
            319,
            {
              distinct_on: [
                338,
                "[files_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                336,
                "[files_order_by!]"
              ],
              where: [
                326
              ]
            }
          ],
          filesAggregate: [
            320,
            {
              distinct_on: [
                338,
                "[files_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                336,
                "[files_order_by!]"
              ],
              where: [
                326
              ]
            }
          ],
          group: [
            356,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          group_aggregate: [
            357,
            {
              distinct_on: [
                376,
                "[group_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                374,
                "[group_order_by!]"
              ],
              where: [
                363
              ]
            }
          ],
          group_by_pk: [
            356,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          invitation: [
            394,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitation_aggregate: [
            395,
            {
              distinct_on: [
                411,
                "[invitation_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                409,
                "[invitation_order_by!]"
              ],
              where: [
                399
              ]
            }
          ],
          invitation_by_pk: [
            394,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          member: [
            420,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          member_aggregate: [
            421,
            {
              distinct_on: [
                440,
                "[member_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                438,
                "[member_order_by!]"
              ],
              where: [
                427
              ]
            }
          ],
          member_by_pk: [
            420,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          notification: [
            458,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notification_aggregate: [
            459,
            {
              distinct_on: [
                474,
                "[notification_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                472,
                "[notification_order_by!]"
              ],
              where: [
                463
              ]
            }
          ],
          notification_by_pk: [
            458,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          payment: [
            481,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payment_aggregate: [
            482,
            {
              distinct_on: [
                539,
                "[payment_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                499,
                "[payment_order_by!]"
              ],
              where: [
                488
              ]
            }
          ],
          payment_by_pk: [
            481,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          payment_review: [
            501,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_review_aggregate: [
            502,
            {
              distinct_on: [
                521,
                "[payment_review_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                519,
                "[payment_review_order_by!]"
              ],
              where: [
                508
              ]
            }
          ],
          payment_review_by_pk: [
            501,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          period: [
            557,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          period_aggregate: [
            558,
            {
              distinct_on: [
                577,
                "[period_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                575,
                "[period_order_by!]"
              ],
              where: [
                564
              ]
            }
          ],
          period_by_pk: [
            557,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          state_cache: [
            595,
            {
              distinct_on: [
                607,
                "[state_cache_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                605,
                "[state_cache_order_by!]"
              ],
              where: [
                598
              ]
            }
          ],
          state_cache_aggregate: [
            596,
            {
              distinct_on: [
                607,
                "[state_cache_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                605,
                "[state_cache_order_by!]"
              ],
              where: [
                598
              ]
            }
          ],
          state_cache_by_pk: [
            595,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          user: [
            632,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          user_profile: [
            615,
            {
              distinct_on: [
                628,
                "[user_profile_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                626,
                "[user_profile_order_by!]"
              ],
              where: [
                618
              ]
            }
          ],
          user_profile_aggregate: [
            616,
            {
              distinct_on: [
                628,
                "[user_profile_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                626,
                "[user_profile_order_by!]"
              ],
              where: [
                618
              ]
            }
          ],
          user_profile_by_pk: [
            615,
            {
              id: [
                658,
                "uuid!"
              ]
            }
          ],
          users: [
            632,
            {
              distinct_on: [
                654,
                "[users_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                651,
                "[users_order_by!]"
              ],
              where: [
                638
              ]
            }
          ],
          usersAggregate: [
            633,
            {
              distinct_on: [
                654,
                "[users_select_column!]"
              ],
              limit: [
                5
              ],
              offset: [
                5
              ],
              order_by: [
                651,
                "[users_order_by!]"
              ],
              where: [
                638
              ]
            }
          ],
          __typename: [
            11
          ]
        }
      }
    };
  }
});

// app/graphql/genql-sdk/guards.cjs.js
var require_guards_cjs = __commonJS({
  "app/graphql/genql-sdk/guards.cjs.js"(exports, module2) {
    "use strict";
    var Balance_possibleTypes = ["Balance"];
    module2.exports.isBalance = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isBalance"');
      return Balance_possibleTypes.includes(obj.__typename);
    };
    var InviteOutput_possibleTypes = ["InviteOutput"];
    module2.exports.isInviteOutput = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isInviteOutput"');
      return InviteOutput_possibleTypes.includes(obj.__typename);
    };
    var PeriodCompletionActionOutput_possibleTypes = ["PeriodCompletionActionOutput"];
    module2.exports.isPeriodCompletionActionOutput = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isPeriodCompletionActionOutput"');
      return PeriodCompletionActionOutput_possibleTypes.includes(obj.__typename);
    };
    var TestMessageOutput_possibleTypes = ["TestMessageOutput"];
    module2.exports.isTestMessageOutput = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isTestMessageOutput"');
      return TestMessageOutput_possibleTypes.includes(obj.__typename);
    };
    var authProviderRequests_possibleTypes = ["authProviderRequests"];
    module2.exports.isauthProviderRequests = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviderRequests"');
      return authProviderRequests_possibleTypes.includes(obj.__typename);
    };
    var authProviderRequests_aggregate_possibleTypes = ["authProviderRequests_aggregate"];
    module2.exports.isauthProviderRequests_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviderRequests_aggregate"');
      return authProviderRequests_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authProviderRequests_aggregate_fields_possibleTypes = ["authProviderRequests_aggregate_fields"];
    module2.exports.isauthProviderRequests_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviderRequests_aggregate_fields"');
      return authProviderRequests_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authProviderRequests_max_fields_possibleTypes = ["authProviderRequests_max_fields"];
    module2.exports.isauthProviderRequests_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviderRequests_max_fields"');
      return authProviderRequests_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authProviderRequests_min_fields_possibleTypes = ["authProviderRequests_min_fields"];
    module2.exports.isauthProviderRequests_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviderRequests_min_fields"');
      return authProviderRequests_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authProviderRequests_mutation_response_possibleTypes = ["authProviderRequests_mutation_response"];
    module2.exports.isauthProviderRequests_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviderRequests_mutation_response"');
      return authProviderRequests_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var authProviders_possibleTypes = ["authProviders"];
    module2.exports.isauthProviders = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviders"');
      return authProviders_possibleTypes.includes(obj.__typename);
    };
    var authProviders_aggregate_possibleTypes = ["authProviders_aggregate"];
    module2.exports.isauthProviders_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviders_aggregate"');
      return authProviders_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authProviders_aggregate_fields_possibleTypes = ["authProviders_aggregate_fields"];
    module2.exports.isauthProviders_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviders_aggregate_fields"');
      return authProviders_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authProviders_max_fields_possibleTypes = ["authProviders_max_fields"];
    module2.exports.isauthProviders_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviders_max_fields"');
      return authProviders_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authProviders_min_fields_possibleTypes = ["authProviders_min_fields"];
    module2.exports.isauthProviders_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviders_min_fields"');
      return authProviders_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authProviders_mutation_response_possibleTypes = ["authProviders_mutation_response"];
    module2.exports.isauthProviders_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthProviders_mutation_response"');
      return authProviders_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var authRefreshTokens_possibleTypes = ["authRefreshTokens"];
    module2.exports.isauthRefreshTokens = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRefreshTokens"');
      return authRefreshTokens_possibleTypes.includes(obj.__typename);
    };
    var authRefreshTokens_aggregate_possibleTypes = ["authRefreshTokens_aggregate"];
    module2.exports.isauthRefreshTokens_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRefreshTokens_aggregate"');
      return authRefreshTokens_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authRefreshTokens_aggregate_fields_possibleTypes = ["authRefreshTokens_aggregate_fields"];
    module2.exports.isauthRefreshTokens_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRefreshTokens_aggregate_fields"');
      return authRefreshTokens_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authRefreshTokens_max_fields_possibleTypes = ["authRefreshTokens_max_fields"];
    module2.exports.isauthRefreshTokens_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRefreshTokens_max_fields"');
      return authRefreshTokens_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authRefreshTokens_min_fields_possibleTypes = ["authRefreshTokens_min_fields"];
    module2.exports.isauthRefreshTokens_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRefreshTokens_min_fields"');
      return authRefreshTokens_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authRefreshTokens_mutation_response_possibleTypes = ["authRefreshTokens_mutation_response"];
    module2.exports.isauthRefreshTokens_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRefreshTokens_mutation_response"');
      return authRefreshTokens_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var authRoles_possibleTypes = ["authRoles"];
    module2.exports.isauthRoles = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRoles"');
      return authRoles_possibleTypes.includes(obj.__typename);
    };
    var authRoles_aggregate_possibleTypes = ["authRoles_aggregate"];
    module2.exports.isauthRoles_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRoles_aggregate"');
      return authRoles_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authRoles_aggregate_fields_possibleTypes = ["authRoles_aggregate_fields"];
    module2.exports.isauthRoles_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRoles_aggregate_fields"');
      return authRoles_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authRoles_max_fields_possibleTypes = ["authRoles_max_fields"];
    module2.exports.isauthRoles_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRoles_max_fields"');
      return authRoles_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authRoles_min_fields_possibleTypes = ["authRoles_min_fields"];
    module2.exports.isauthRoles_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRoles_min_fields"');
      return authRoles_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authRoles_mutation_response_possibleTypes = ["authRoles_mutation_response"];
    module2.exports.isauthRoles_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthRoles_mutation_response"');
      return authRoles_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_possibleTypes = ["authUserAuthenticators"];
    module2.exports.isauthUserAuthenticators = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators"');
      return authUserAuthenticators_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_aggregate_possibleTypes = ["authUserAuthenticators_aggregate"];
    module2.exports.isauthUserAuthenticators_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_aggregate"');
      return authUserAuthenticators_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_aggregate_fields_possibleTypes = ["authUserAuthenticators_aggregate_fields"];
    module2.exports.isauthUserAuthenticators_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_aggregate_fields"');
      return authUserAuthenticators_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_avg_fields_possibleTypes = ["authUserAuthenticators_avg_fields"];
    module2.exports.isauthUserAuthenticators_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_avg_fields"');
      return authUserAuthenticators_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_max_fields_possibleTypes = ["authUserAuthenticators_max_fields"];
    module2.exports.isauthUserAuthenticators_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_max_fields"');
      return authUserAuthenticators_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_min_fields_possibleTypes = ["authUserAuthenticators_min_fields"];
    module2.exports.isauthUserAuthenticators_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_min_fields"');
      return authUserAuthenticators_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_mutation_response_possibleTypes = ["authUserAuthenticators_mutation_response"];
    module2.exports.isauthUserAuthenticators_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_mutation_response"');
      return authUserAuthenticators_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_stddev_fields_possibleTypes = ["authUserAuthenticators_stddev_fields"];
    module2.exports.isauthUserAuthenticators_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_stddev_fields"');
      return authUserAuthenticators_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_stddev_pop_fields_possibleTypes = ["authUserAuthenticators_stddev_pop_fields"];
    module2.exports.isauthUserAuthenticators_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_stddev_pop_fields"');
      return authUserAuthenticators_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_stddev_samp_fields_possibleTypes = ["authUserAuthenticators_stddev_samp_fields"];
    module2.exports.isauthUserAuthenticators_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_stddev_samp_fields"');
      return authUserAuthenticators_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_sum_fields_possibleTypes = ["authUserAuthenticators_sum_fields"];
    module2.exports.isauthUserAuthenticators_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_sum_fields"');
      return authUserAuthenticators_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_var_pop_fields_possibleTypes = ["authUserAuthenticators_var_pop_fields"];
    module2.exports.isauthUserAuthenticators_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_var_pop_fields"');
      return authUserAuthenticators_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_var_samp_fields_possibleTypes = ["authUserAuthenticators_var_samp_fields"];
    module2.exports.isauthUserAuthenticators_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_var_samp_fields"');
      return authUserAuthenticators_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserAuthenticators_variance_fields_possibleTypes = ["authUserAuthenticators_variance_fields"];
    module2.exports.isauthUserAuthenticators_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserAuthenticators_variance_fields"');
      return authUserAuthenticators_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserProviders_possibleTypes = ["authUserProviders"];
    module2.exports.isauthUserProviders = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserProviders"');
      return authUserProviders_possibleTypes.includes(obj.__typename);
    };
    var authUserProviders_aggregate_possibleTypes = ["authUserProviders_aggregate"];
    module2.exports.isauthUserProviders_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserProviders_aggregate"');
      return authUserProviders_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authUserProviders_aggregate_fields_possibleTypes = ["authUserProviders_aggregate_fields"];
    module2.exports.isauthUserProviders_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserProviders_aggregate_fields"');
      return authUserProviders_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserProviders_max_fields_possibleTypes = ["authUserProviders_max_fields"];
    module2.exports.isauthUserProviders_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserProviders_max_fields"');
      return authUserProviders_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserProviders_min_fields_possibleTypes = ["authUserProviders_min_fields"];
    module2.exports.isauthUserProviders_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserProviders_min_fields"');
      return authUserProviders_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserProviders_mutation_response_possibleTypes = ["authUserProviders_mutation_response"];
    module2.exports.isauthUserProviders_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserProviders_mutation_response"');
      return authUserProviders_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var authUserRoles_possibleTypes = ["authUserRoles"];
    module2.exports.isauthUserRoles = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserRoles"');
      return authUserRoles_possibleTypes.includes(obj.__typename);
    };
    var authUserRoles_aggregate_possibleTypes = ["authUserRoles_aggregate"];
    module2.exports.isauthUserRoles_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserRoles_aggregate"');
      return authUserRoles_aggregate_possibleTypes.includes(obj.__typename);
    };
    var authUserRoles_aggregate_fields_possibleTypes = ["authUserRoles_aggregate_fields"];
    module2.exports.isauthUserRoles_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserRoles_aggregate_fields"');
      return authUserRoles_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserRoles_max_fields_possibleTypes = ["authUserRoles_max_fields"];
    module2.exports.isauthUserRoles_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserRoles_max_fields"');
      return authUserRoles_max_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserRoles_min_fields_possibleTypes = ["authUserRoles_min_fields"];
    module2.exports.isauthUserRoles_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserRoles_min_fields"');
      return authUserRoles_min_fields_possibleTypes.includes(obj.__typename);
    };
    var authUserRoles_mutation_response_possibleTypes = ["authUserRoles_mutation_response"];
    module2.exports.isauthUserRoles_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauthUserRoles_mutation_response"');
      return authUserRoles_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_possibleTypes = ["auth_migrations"];
    module2.exports.isauth_migrations = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations"');
      return auth_migrations_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_aggregate_possibleTypes = ["auth_migrations_aggregate"];
    module2.exports.isauth_migrations_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_aggregate"');
      return auth_migrations_aggregate_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_aggregate_fields_possibleTypes = ["auth_migrations_aggregate_fields"];
    module2.exports.isauth_migrations_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_aggregate_fields"');
      return auth_migrations_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_avg_fields_possibleTypes = ["auth_migrations_avg_fields"];
    module2.exports.isauth_migrations_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_avg_fields"');
      return auth_migrations_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_max_fields_possibleTypes = ["auth_migrations_max_fields"];
    module2.exports.isauth_migrations_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_max_fields"');
      return auth_migrations_max_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_min_fields_possibleTypes = ["auth_migrations_min_fields"];
    module2.exports.isauth_migrations_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_min_fields"');
      return auth_migrations_min_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_mutation_response_possibleTypes = ["auth_migrations_mutation_response"];
    module2.exports.isauth_migrations_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_mutation_response"');
      return auth_migrations_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_stddev_fields_possibleTypes = ["auth_migrations_stddev_fields"];
    module2.exports.isauth_migrations_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_stddev_fields"');
      return auth_migrations_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_stddev_pop_fields_possibleTypes = ["auth_migrations_stddev_pop_fields"];
    module2.exports.isauth_migrations_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_stddev_pop_fields"');
      return auth_migrations_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_stddev_samp_fields_possibleTypes = ["auth_migrations_stddev_samp_fields"];
    module2.exports.isauth_migrations_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_stddev_samp_fields"');
      return auth_migrations_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_sum_fields_possibleTypes = ["auth_migrations_sum_fields"];
    module2.exports.isauth_migrations_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_sum_fields"');
      return auth_migrations_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_var_pop_fields_possibleTypes = ["auth_migrations_var_pop_fields"];
    module2.exports.isauth_migrations_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_var_pop_fields"');
      return auth_migrations_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_var_samp_fields_possibleTypes = ["auth_migrations_var_samp_fields"];
    module2.exports.isauth_migrations_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_var_samp_fields"');
      return auth_migrations_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var auth_migrations_variance_fields_possibleTypes = ["auth_migrations_variance_fields"];
    module2.exports.isauth_migrations_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isauth_migrations_variance_fields"');
      return auth_migrations_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_possibleTypes = ["buckets"];
    module2.exports.isbuckets = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets"');
      return buckets_possibleTypes.includes(obj.__typename);
    };
    var buckets_aggregate_possibleTypes = ["buckets_aggregate"];
    module2.exports.isbuckets_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_aggregate"');
      return buckets_aggregate_possibleTypes.includes(obj.__typename);
    };
    var buckets_aggregate_fields_possibleTypes = ["buckets_aggregate_fields"];
    module2.exports.isbuckets_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_aggregate_fields"');
      return buckets_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_avg_fields_possibleTypes = ["buckets_avg_fields"];
    module2.exports.isbuckets_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_avg_fields"');
      return buckets_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_max_fields_possibleTypes = ["buckets_max_fields"];
    module2.exports.isbuckets_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_max_fields"');
      return buckets_max_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_min_fields_possibleTypes = ["buckets_min_fields"];
    module2.exports.isbuckets_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_min_fields"');
      return buckets_min_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_mutation_response_possibleTypes = ["buckets_mutation_response"];
    module2.exports.isbuckets_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_mutation_response"');
      return buckets_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var buckets_stddev_fields_possibleTypes = ["buckets_stddev_fields"];
    module2.exports.isbuckets_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_stddev_fields"');
      return buckets_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_stddev_pop_fields_possibleTypes = ["buckets_stddev_pop_fields"];
    module2.exports.isbuckets_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_stddev_pop_fields"');
      return buckets_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_stddev_samp_fields_possibleTypes = ["buckets_stddev_samp_fields"];
    module2.exports.isbuckets_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_stddev_samp_fields"');
      return buckets_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_sum_fields_possibleTypes = ["buckets_sum_fields"];
    module2.exports.isbuckets_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_sum_fields"');
      return buckets_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_var_pop_fields_possibleTypes = ["buckets_var_pop_fields"];
    module2.exports.isbuckets_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_var_pop_fields"');
      return buckets_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_var_samp_fields_possibleTypes = ["buckets_var_samp_fields"];
    module2.exports.isbuckets_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_var_samp_fields"');
      return buckets_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var buckets_variance_fields_possibleTypes = ["buckets_variance_fields"];
    module2.exports.isbuckets_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isbuckets_variance_fields"');
      return buckets_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var en_notifications_possibleTypes = ["en_notifications"];
    module2.exports.isen_notifications = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_notifications"');
      return en_notifications_possibleTypes.includes(obj.__typename);
    };
    var en_notifications_aggregate_possibleTypes = ["en_notifications_aggregate"];
    module2.exports.isen_notifications_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_notifications_aggregate"');
      return en_notifications_aggregate_possibleTypes.includes(obj.__typename);
    };
    var en_notifications_aggregate_fields_possibleTypes = ["en_notifications_aggregate_fields"];
    module2.exports.isen_notifications_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_notifications_aggregate_fields"');
      return en_notifications_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var en_notifications_max_fields_possibleTypes = ["en_notifications_max_fields"];
    module2.exports.isen_notifications_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_notifications_max_fields"');
      return en_notifications_max_fields_possibleTypes.includes(obj.__typename);
    };
    var en_notifications_min_fields_possibleTypes = ["en_notifications_min_fields"];
    module2.exports.isen_notifications_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_notifications_min_fields"');
      return en_notifications_min_fields_possibleTypes.includes(obj.__typename);
    };
    var en_notifications_mutation_response_possibleTypes = ["en_notifications_mutation_response"];
    module2.exports.isen_notifications_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_notifications_mutation_response"');
      return en_notifications_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var en_permissions_possibleTypes = ["en_permissions"];
    module2.exports.isen_permissions = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_permissions"');
      return en_permissions_possibleTypes.includes(obj.__typename);
    };
    var en_permissions_aggregate_possibleTypes = ["en_permissions_aggregate"];
    module2.exports.isen_permissions_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_permissions_aggregate"');
      return en_permissions_aggregate_possibleTypes.includes(obj.__typename);
    };
    var en_permissions_aggregate_fields_possibleTypes = ["en_permissions_aggregate_fields"];
    module2.exports.isen_permissions_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_permissions_aggregate_fields"');
      return en_permissions_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var en_permissions_max_fields_possibleTypes = ["en_permissions_max_fields"];
    module2.exports.isen_permissions_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_permissions_max_fields"');
      return en_permissions_max_fields_possibleTypes.includes(obj.__typename);
    };
    var en_permissions_min_fields_possibleTypes = ["en_permissions_min_fields"];
    module2.exports.isen_permissions_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_permissions_min_fields"');
      return en_permissions_min_fields_possibleTypes.includes(obj.__typename);
    };
    var en_permissions_mutation_response_possibleTypes = ["en_permissions_mutation_response"];
    module2.exports.isen_permissions_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_permissions_mutation_response"');
      return en_permissions_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var en_recurrencies_possibleTypes = ["en_recurrencies"];
    module2.exports.isen_recurrencies = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_recurrencies"');
      return en_recurrencies_possibleTypes.includes(obj.__typename);
    };
    var en_recurrencies_aggregate_possibleTypes = ["en_recurrencies_aggregate"];
    module2.exports.isen_recurrencies_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_recurrencies_aggregate"');
      return en_recurrencies_aggregate_possibleTypes.includes(obj.__typename);
    };
    var en_recurrencies_aggregate_fields_possibleTypes = ["en_recurrencies_aggregate_fields"];
    module2.exports.isen_recurrencies_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_recurrencies_aggregate_fields"');
      return en_recurrencies_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var en_recurrencies_max_fields_possibleTypes = ["en_recurrencies_max_fields"];
    module2.exports.isen_recurrencies_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_recurrencies_max_fields"');
      return en_recurrencies_max_fields_possibleTypes.includes(obj.__typename);
    };
    var en_recurrencies_min_fields_possibleTypes = ["en_recurrencies_min_fields"];
    module2.exports.isen_recurrencies_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_recurrencies_min_fields"');
      return en_recurrencies_min_fields_possibleTypes.includes(obj.__typename);
    };
    var en_recurrencies_mutation_response_possibleTypes = ["en_recurrencies_mutation_response"];
    module2.exports.isen_recurrencies_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_recurrencies_mutation_response"');
      return en_recurrencies_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var en_statuses_possibleTypes = ["en_statuses"];
    module2.exports.isen_statuses = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_statuses"');
      return en_statuses_possibleTypes.includes(obj.__typename);
    };
    var en_statuses_aggregate_possibleTypes = ["en_statuses_aggregate"];
    module2.exports.isen_statuses_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_statuses_aggregate"');
      return en_statuses_aggregate_possibleTypes.includes(obj.__typename);
    };
    var en_statuses_aggregate_fields_possibleTypes = ["en_statuses_aggregate_fields"];
    module2.exports.isen_statuses_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_statuses_aggregate_fields"');
      return en_statuses_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var en_statuses_max_fields_possibleTypes = ["en_statuses_max_fields"];
    module2.exports.isen_statuses_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_statuses_max_fields"');
      return en_statuses_max_fields_possibleTypes.includes(obj.__typename);
    };
    var en_statuses_min_fields_possibleTypes = ["en_statuses_min_fields"];
    module2.exports.isen_statuses_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_statuses_min_fields"');
      return en_statuses_min_fields_possibleTypes.includes(obj.__typename);
    };
    var en_statuses_mutation_response_possibleTypes = ["en_statuses_mutation_response"];
    module2.exports.isen_statuses_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_statuses_mutation_response"');
      return en_statuses_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var en_trans_types_possibleTypes = ["en_trans_types"];
    module2.exports.isen_trans_types = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_trans_types"');
      return en_trans_types_possibleTypes.includes(obj.__typename);
    };
    var en_trans_types_aggregate_possibleTypes = ["en_trans_types_aggregate"];
    module2.exports.isen_trans_types_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_trans_types_aggregate"');
      return en_trans_types_aggregate_possibleTypes.includes(obj.__typename);
    };
    var en_trans_types_aggregate_fields_possibleTypes = ["en_trans_types_aggregate_fields"];
    module2.exports.isen_trans_types_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_trans_types_aggregate_fields"');
      return en_trans_types_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var en_trans_types_max_fields_possibleTypes = ["en_trans_types_max_fields"];
    module2.exports.isen_trans_types_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_trans_types_max_fields"');
      return en_trans_types_max_fields_possibleTypes.includes(obj.__typename);
    };
    var en_trans_types_min_fields_possibleTypes = ["en_trans_types_min_fields"];
    module2.exports.isen_trans_types_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_trans_types_min_fields"');
      return en_trans_types_min_fields_possibleTypes.includes(obj.__typename);
    };
    var en_trans_types_mutation_response_possibleTypes = ["en_trans_types_mutation_response"];
    module2.exports.isen_trans_types_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isen_trans_types_mutation_response"');
      return en_trans_types_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var files_possibleTypes = ["files"];
    module2.exports.isfiles = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles"');
      return files_possibleTypes.includes(obj.__typename);
    };
    var files_aggregate_possibleTypes = ["files_aggregate"];
    module2.exports.isfiles_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_aggregate"');
      return files_aggregate_possibleTypes.includes(obj.__typename);
    };
    var files_aggregate_fields_possibleTypes = ["files_aggregate_fields"];
    module2.exports.isfiles_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_aggregate_fields"');
      return files_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var files_avg_fields_possibleTypes = ["files_avg_fields"];
    module2.exports.isfiles_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_avg_fields"');
      return files_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var files_max_fields_possibleTypes = ["files_max_fields"];
    module2.exports.isfiles_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_max_fields"');
      return files_max_fields_possibleTypes.includes(obj.__typename);
    };
    var files_min_fields_possibleTypes = ["files_min_fields"];
    module2.exports.isfiles_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_min_fields"');
      return files_min_fields_possibleTypes.includes(obj.__typename);
    };
    var files_mutation_response_possibleTypes = ["files_mutation_response"];
    module2.exports.isfiles_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_mutation_response"');
      return files_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var files_stddev_fields_possibleTypes = ["files_stddev_fields"];
    module2.exports.isfiles_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_stddev_fields"');
      return files_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var files_stddev_pop_fields_possibleTypes = ["files_stddev_pop_fields"];
    module2.exports.isfiles_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_stddev_pop_fields"');
      return files_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var files_stddev_samp_fields_possibleTypes = ["files_stddev_samp_fields"];
    module2.exports.isfiles_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_stddev_samp_fields"');
      return files_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var files_sum_fields_possibleTypes = ["files_sum_fields"];
    module2.exports.isfiles_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_sum_fields"');
      return files_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var files_var_pop_fields_possibleTypes = ["files_var_pop_fields"];
    module2.exports.isfiles_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_var_pop_fields"');
      return files_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var files_var_samp_fields_possibleTypes = ["files_var_samp_fields"];
    module2.exports.isfiles_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_var_samp_fields"');
      return files_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var files_variance_fields_possibleTypes = ["files_variance_fields"];
    module2.exports.isfiles_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isfiles_variance_fields"');
      return files_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var group_possibleTypes = ["group"];
    module2.exports.isgroup = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup"');
      return group_possibleTypes.includes(obj.__typename);
    };
    var group_aggregate_possibleTypes = ["group_aggregate"];
    module2.exports.isgroup_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_aggregate"');
      return group_aggregate_possibleTypes.includes(obj.__typename);
    };
    var group_aggregate_fields_possibleTypes = ["group_aggregate_fields"];
    module2.exports.isgroup_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_aggregate_fields"');
      return group_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var group_avg_fields_possibleTypes = ["group_avg_fields"];
    module2.exports.isgroup_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_avg_fields"');
      return group_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var group_max_fields_possibleTypes = ["group_max_fields"];
    module2.exports.isgroup_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_max_fields"');
      return group_max_fields_possibleTypes.includes(obj.__typename);
    };
    var group_min_fields_possibleTypes = ["group_min_fields"];
    module2.exports.isgroup_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_min_fields"');
      return group_min_fields_possibleTypes.includes(obj.__typename);
    };
    var group_mutation_response_possibleTypes = ["group_mutation_response"];
    module2.exports.isgroup_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_mutation_response"');
      return group_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var group_stddev_fields_possibleTypes = ["group_stddev_fields"];
    module2.exports.isgroup_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_stddev_fields"');
      return group_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var group_stddev_pop_fields_possibleTypes = ["group_stddev_pop_fields"];
    module2.exports.isgroup_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_stddev_pop_fields"');
      return group_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var group_stddev_samp_fields_possibleTypes = ["group_stddev_samp_fields"];
    module2.exports.isgroup_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_stddev_samp_fields"');
      return group_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var group_sum_fields_possibleTypes = ["group_sum_fields"];
    module2.exports.isgroup_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_sum_fields"');
      return group_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var group_var_pop_fields_possibleTypes = ["group_var_pop_fields"];
    module2.exports.isgroup_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_var_pop_fields"');
      return group_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var group_var_samp_fields_possibleTypes = ["group_var_samp_fields"];
    module2.exports.isgroup_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_var_samp_fields"');
      return group_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var group_variance_fields_possibleTypes = ["group_variance_fields"];
    module2.exports.isgroup_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isgroup_variance_fields"');
      return group_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var invitation_possibleTypes = ["invitation"];
    module2.exports.isinvitation = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isinvitation"');
      return invitation_possibleTypes.includes(obj.__typename);
    };
    var invitation_aggregate_possibleTypes = ["invitation_aggregate"];
    module2.exports.isinvitation_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isinvitation_aggregate"');
      return invitation_aggregate_possibleTypes.includes(obj.__typename);
    };
    var invitation_aggregate_fields_possibleTypes = ["invitation_aggregate_fields"];
    module2.exports.isinvitation_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isinvitation_aggregate_fields"');
      return invitation_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var invitation_max_fields_possibleTypes = ["invitation_max_fields"];
    module2.exports.isinvitation_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isinvitation_max_fields"');
      return invitation_max_fields_possibleTypes.includes(obj.__typename);
    };
    var invitation_min_fields_possibleTypes = ["invitation_min_fields"];
    module2.exports.isinvitation_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isinvitation_min_fields"');
      return invitation_min_fields_possibleTypes.includes(obj.__typename);
    };
    var invitation_mutation_response_possibleTypes = ["invitation_mutation_response"];
    module2.exports.isinvitation_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isinvitation_mutation_response"');
      return invitation_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var member_possibleTypes = ["member"];
    module2.exports.ismember = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember"');
      return member_possibleTypes.includes(obj.__typename);
    };
    var member_aggregate_possibleTypes = ["member_aggregate"];
    module2.exports.ismember_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_aggregate"');
      return member_aggregate_possibleTypes.includes(obj.__typename);
    };
    var member_aggregate_fields_possibleTypes = ["member_aggregate_fields"];
    module2.exports.ismember_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_aggregate_fields"');
      return member_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var member_avg_fields_possibleTypes = ["member_avg_fields"];
    module2.exports.ismember_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_avg_fields"');
      return member_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var member_max_fields_possibleTypes = ["member_max_fields"];
    module2.exports.ismember_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_max_fields"');
      return member_max_fields_possibleTypes.includes(obj.__typename);
    };
    var member_min_fields_possibleTypes = ["member_min_fields"];
    module2.exports.ismember_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_min_fields"');
      return member_min_fields_possibleTypes.includes(obj.__typename);
    };
    var member_mutation_response_possibleTypes = ["member_mutation_response"];
    module2.exports.ismember_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_mutation_response"');
      return member_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var member_stddev_fields_possibleTypes = ["member_stddev_fields"];
    module2.exports.ismember_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_stddev_fields"');
      return member_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var member_stddev_pop_fields_possibleTypes = ["member_stddev_pop_fields"];
    module2.exports.ismember_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_stddev_pop_fields"');
      return member_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var member_stddev_samp_fields_possibleTypes = ["member_stddev_samp_fields"];
    module2.exports.ismember_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_stddev_samp_fields"');
      return member_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var member_sum_fields_possibleTypes = ["member_sum_fields"];
    module2.exports.ismember_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_sum_fields"');
      return member_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var member_var_pop_fields_possibleTypes = ["member_var_pop_fields"];
    module2.exports.ismember_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_var_pop_fields"');
      return member_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var member_var_samp_fields_possibleTypes = ["member_var_samp_fields"];
    module2.exports.ismember_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_var_samp_fields"');
      return member_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var member_variance_fields_possibleTypes = ["member_variance_fields"];
    module2.exports.ismember_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismember_variance_fields"');
      return member_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var mutation_root_possibleTypes = ["mutation_root"];
    module2.exports.ismutation_root = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ismutation_root"');
      return mutation_root_possibleTypes.includes(obj.__typename);
    };
    var notification_possibleTypes = ["notification"];
    module2.exports.isnotification = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isnotification"');
      return notification_possibleTypes.includes(obj.__typename);
    };
    var notification_aggregate_possibleTypes = ["notification_aggregate"];
    module2.exports.isnotification_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isnotification_aggregate"');
      return notification_aggregate_possibleTypes.includes(obj.__typename);
    };
    var notification_aggregate_fields_possibleTypes = ["notification_aggregate_fields"];
    module2.exports.isnotification_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isnotification_aggregate_fields"');
      return notification_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var notification_max_fields_possibleTypes = ["notification_max_fields"];
    module2.exports.isnotification_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isnotification_max_fields"');
      return notification_max_fields_possibleTypes.includes(obj.__typename);
    };
    var notification_min_fields_possibleTypes = ["notification_min_fields"];
    module2.exports.isnotification_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isnotification_min_fields"');
      return notification_min_fields_possibleTypes.includes(obj.__typename);
    };
    var notification_mutation_response_possibleTypes = ["notification_mutation_response"];
    module2.exports.isnotification_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isnotification_mutation_response"');
      return notification_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var payment_possibleTypes = ["payment"];
    module2.exports.ispayment = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment"');
      return payment_possibleTypes.includes(obj.__typename);
    };
    var payment_aggregate_possibleTypes = ["payment_aggregate"];
    module2.exports.ispayment_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_aggregate"');
      return payment_aggregate_possibleTypes.includes(obj.__typename);
    };
    var payment_aggregate_fields_possibleTypes = ["payment_aggregate_fields"];
    module2.exports.ispayment_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_aggregate_fields"');
      return payment_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_avg_fields_possibleTypes = ["payment_avg_fields"];
    module2.exports.ispayment_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_avg_fields"');
      return payment_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_max_fields_possibleTypes = ["payment_max_fields"];
    module2.exports.ispayment_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_max_fields"');
      return payment_max_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_min_fields_possibleTypes = ["payment_min_fields"];
    module2.exports.ispayment_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_min_fields"');
      return payment_min_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_mutation_response_possibleTypes = ["payment_mutation_response"];
    module2.exports.ispayment_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_mutation_response"');
      return payment_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var payment_review_possibleTypes = ["payment_review"];
    module2.exports.ispayment_review = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review"');
      return payment_review_possibleTypes.includes(obj.__typename);
    };
    var payment_review_aggregate_possibleTypes = ["payment_review_aggregate"];
    module2.exports.ispayment_review_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_aggregate"');
      return payment_review_aggregate_possibleTypes.includes(obj.__typename);
    };
    var payment_review_aggregate_fields_possibleTypes = ["payment_review_aggregate_fields"];
    module2.exports.ispayment_review_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_aggregate_fields"');
      return payment_review_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_avg_fields_possibleTypes = ["payment_review_avg_fields"];
    module2.exports.ispayment_review_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_avg_fields"');
      return payment_review_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_max_fields_possibleTypes = ["payment_review_max_fields"];
    module2.exports.ispayment_review_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_max_fields"');
      return payment_review_max_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_min_fields_possibleTypes = ["payment_review_min_fields"];
    module2.exports.ispayment_review_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_min_fields"');
      return payment_review_min_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_mutation_response_possibleTypes = ["payment_review_mutation_response"];
    module2.exports.ispayment_review_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_mutation_response"');
      return payment_review_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var payment_review_stddev_fields_possibleTypes = ["payment_review_stddev_fields"];
    module2.exports.ispayment_review_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_stddev_fields"');
      return payment_review_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_stddev_pop_fields_possibleTypes = ["payment_review_stddev_pop_fields"];
    module2.exports.ispayment_review_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_stddev_pop_fields"');
      return payment_review_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_stddev_samp_fields_possibleTypes = ["payment_review_stddev_samp_fields"];
    module2.exports.ispayment_review_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_stddev_samp_fields"');
      return payment_review_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_sum_fields_possibleTypes = ["payment_review_sum_fields"];
    module2.exports.ispayment_review_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_sum_fields"');
      return payment_review_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_var_pop_fields_possibleTypes = ["payment_review_var_pop_fields"];
    module2.exports.ispayment_review_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_var_pop_fields"');
      return payment_review_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_var_samp_fields_possibleTypes = ["payment_review_var_samp_fields"];
    module2.exports.ispayment_review_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_var_samp_fields"');
      return payment_review_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_review_variance_fields_possibleTypes = ["payment_review_variance_fields"];
    module2.exports.ispayment_review_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_review_variance_fields"');
      return payment_review_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_stddev_fields_possibleTypes = ["payment_stddev_fields"];
    module2.exports.ispayment_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_stddev_fields"');
      return payment_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_stddev_pop_fields_possibleTypes = ["payment_stddev_pop_fields"];
    module2.exports.ispayment_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_stddev_pop_fields"');
      return payment_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_stddev_samp_fields_possibleTypes = ["payment_stddev_samp_fields"];
    module2.exports.ispayment_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_stddev_samp_fields"');
      return payment_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_sum_fields_possibleTypes = ["payment_sum_fields"];
    module2.exports.ispayment_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_sum_fields"');
      return payment_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_var_pop_fields_possibleTypes = ["payment_var_pop_fields"];
    module2.exports.ispayment_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_var_pop_fields"');
      return payment_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_var_samp_fields_possibleTypes = ["payment_var_samp_fields"];
    module2.exports.ispayment_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_var_samp_fields"');
      return payment_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var payment_variance_fields_possibleTypes = ["payment_variance_fields"];
    module2.exports.ispayment_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "ispayment_variance_fields"');
      return payment_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var period_possibleTypes = ["period"];
    module2.exports.isperiod = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod"');
      return period_possibleTypes.includes(obj.__typename);
    };
    var period_aggregate_possibleTypes = ["period_aggregate"];
    module2.exports.isperiod_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_aggregate"');
      return period_aggregate_possibleTypes.includes(obj.__typename);
    };
    var period_aggregate_fields_possibleTypes = ["period_aggregate_fields"];
    module2.exports.isperiod_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_aggregate_fields"');
      return period_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var period_avg_fields_possibleTypes = ["period_avg_fields"];
    module2.exports.isperiod_avg_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_avg_fields"');
      return period_avg_fields_possibleTypes.includes(obj.__typename);
    };
    var period_max_fields_possibleTypes = ["period_max_fields"];
    module2.exports.isperiod_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_max_fields"');
      return period_max_fields_possibleTypes.includes(obj.__typename);
    };
    var period_min_fields_possibleTypes = ["period_min_fields"];
    module2.exports.isperiod_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_min_fields"');
      return period_min_fields_possibleTypes.includes(obj.__typename);
    };
    var period_mutation_response_possibleTypes = ["period_mutation_response"];
    module2.exports.isperiod_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_mutation_response"');
      return period_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var period_stddev_fields_possibleTypes = ["period_stddev_fields"];
    module2.exports.isperiod_stddev_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_stddev_fields"');
      return period_stddev_fields_possibleTypes.includes(obj.__typename);
    };
    var period_stddev_pop_fields_possibleTypes = ["period_stddev_pop_fields"];
    module2.exports.isperiod_stddev_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_stddev_pop_fields"');
      return period_stddev_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var period_stddev_samp_fields_possibleTypes = ["period_stddev_samp_fields"];
    module2.exports.isperiod_stddev_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_stddev_samp_fields"');
      return period_stddev_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var period_sum_fields_possibleTypes = ["period_sum_fields"];
    module2.exports.isperiod_sum_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_sum_fields"');
      return period_sum_fields_possibleTypes.includes(obj.__typename);
    };
    var period_var_pop_fields_possibleTypes = ["period_var_pop_fields"];
    module2.exports.isperiod_var_pop_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_var_pop_fields"');
      return period_var_pop_fields_possibleTypes.includes(obj.__typename);
    };
    var period_var_samp_fields_possibleTypes = ["period_var_samp_fields"];
    module2.exports.isperiod_var_samp_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_var_samp_fields"');
      return period_var_samp_fields_possibleTypes.includes(obj.__typename);
    };
    var period_variance_fields_possibleTypes = ["period_variance_fields"];
    module2.exports.isperiod_variance_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isperiod_variance_fields"');
      return period_variance_fields_possibleTypes.includes(obj.__typename);
    };
    var query_root_possibleTypes = ["query_root"];
    module2.exports.isquery_root = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isquery_root"');
      return query_root_possibleTypes.includes(obj.__typename);
    };
    var state_cache_possibleTypes = ["state_cache"];
    module2.exports.isstate_cache = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isstate_cache"');
      return state_cache_possibleTypes.includes(obj.__typename);
    };
    var state_cache_aggregate_possibleTypes = ["state_cache_aggregate"];
    module2.exports.isstate_cache_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isstate_cache_aggregate"');
      return state_cache_aggregate_possibleTypes.includes(obj.__typename);
    };
    var state_cache_aggregate_fields_possibleTypes = ["state_cache_aggregate_fields"];
    module2.exports.isstate_cache_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isstate_cache_aggregate_fields"');
      return state_cache_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var state_cache_max_fields_possibleTypes = ["state_cache_max_fields"];
    module2.exports.isstate_cache_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isstate_cache_max_fields"');
      return state_cache_max_fields_possibleTypes.includes(obj.__typename);
    };
    var state_cache_min_fields_possibleTypes = ["state_cache_min_fields"];
    module2.exports.isstate_cache_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isstate_cache_min_fields"');
      return state_cache_min_fields_possibleTypes.includes(obj.__typename);
    };
    var state_cache_mutation_response_possibleTypes = ["state_cache_mutation_response"];
    module2.exports.isstate_cache_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isstate_cache_mutation_response"');
      return state_cache_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var subscription_root_possibleTypes = ["subscription_root"];
    module2.exports.issubscription_root = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "issubscription_root"');
      return subscription_root_possibleTypes.includes(obj.__typename);
    };
    var user_profile_possibleTypes = ["user_profile"];
    module2.exports.isuser_profile = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isuser_profile"');
      return user_profile_possibleTypes.includes(obj.__typename);
    };
    var user_profile_aggregate_possibleTypes = ["user_profile_aggregate"];
    module2.exports.isuser_profile_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isuser_profile_aggregate"');
      return user_profile_aggregate_possibleTypes.includes(obj.__typename);
    };
    var user_profile_aggregate_fields_possibleTypes = ["user_profile_aggregate_fields"];
    module2.exports.isuser_profile_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isuser_profile_aggregate_fields"');
      return user_profile_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var user_profile_max_fields_possibleTypes = ["user_profile_max_fields"];
    module2.exports.isuser_profile_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isuser_profile_max_fields"');
      return user_profile_max_fields_possibleTypes.includes(obj.__typename);
    };
    var user_profile_min_fields_possibleTypes = ["user_profile_min_fields"];
    module2.exports.isuser_profile_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isuser_profile_min_fields"');
      return user_profile_min_fields_possibleTypes.includes(obj.__typename);
    };
    var user_profile_mutation_response_possibleTypes = ["user_profile_mutation_response"];
    module2.exports.isuser_profile_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isuser_profile_mutation_response"');
      return user_profile_mutation_response_possibleTypes.includes(obj.__typename);
    };
    var users_possibleTypes = ["users"];
    module2.exports.isusers = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isusers"');
      return users_possibleTypes.includes(obj.__typename);
    };
    var users_aggregate_possibleTypes = ["users_aggregate"];
    module2.exports.isusers_aggregate = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isusers_aggregate"');
      return users_aggregate_possibleTypes.includes(obj.__typename);
    };
    var users_aggregate_fields_possibleTypes = ["users_aggregate_fields"];
    module2.exports.isusers_aggregate_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isusers_aggregate_fields"');
      return users_aggregate_fields_possibleTypes.includes(obj.__typename);
    };
    var users_max_fields_possibleTypes = ["users_max_fields"];
    module2.exports.isusers_max_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isusers_max_fields"');
      return users_max_fields_possibleTypes.includes(obj.__typename);
    };
    var users_min_fields_possibleTypes = ["users_min_fields"];
    module2.exports.isusers_min_fields = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isusers_min_fields"');
      return users_min_fields_possibleTypes.includes(obj.__typename);
    };
    var users_mutation_response_possibleTypes = ["users_mutation_response"];
    module2.exports.isusers_mutation_response = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isusers_mutation_response"');
      return users_mutation_response_possibleTypes.includes(obj.__typename);
    };
  }
});

// app/graphql/genql-sdk/index.js
var require_genql_sdk = __commonJS({
  "app/graphql/genql-sdk/index.js"(exports, module2) {
    "use strict";
    var {
      linkTypeMap,
      createClient: createClientOriginal,
      generateGraphqlOperation,
      assertSameVersion
    } = require("@genql/runtime"), typeMap = linkTypeMap(require_types_cjs()), version = "2.10.0";
    assertSameVersion(version);
    module2.exports.version = version;
    module2.exports.createClient = function(options) {
      options = options || {};
      var optionsCopy = {
        url: "https://apqmosklbchdukswdyur.nhost.run/v1/graphql",
        queryRoot: typeMap.Query,
        mutationRoot: typeMap.Mutation,
        subscriptionRoot: typeMap.Subscription
      };
      for (var name in options)
        optionsCopy[name] = options[name];
      return createClientOriginal(optionsCopy);
    };
    module2.exports.enumCurrency = {
      CFD: "CFD",
      USD: "USD"
    };
    module2.exports.enumauthProviderRequestsConstraint = {
      provider_requests_pkey: "provider_requests_pkey"
    };
    module2.exports.enumauthProviderRequestsSelectColumn = {
      id: "id",
      options: "options"
    };
    module2.exports.enumauthProviderRequestsUpdateColumn = {
      id: "id",
      options: "options"
    };
    module2.exports.enumauthProvidersConstraint = {
      providers_pkey: "providers_pkey"
    };
    module2.exports.enumauthProvidersSelectColumn = {
      id: "id"
    };
    module2.exports.enumauthProvidersUpdateColumn = {
      id: "id"
    };
    module2.exports.enumauthRefreshTokensConstraint = {
      refresh_tokens_pkey: "refresh_tokens_pkey"
    };
    module2.exports.enumauthRefreshTokensSelectColumn = {
      createdAt: "createdAt",
      expiresAt: "expiresAt",
      refreshToken: "refreshToken",
      userId: "userId"
    };
    module2.exports.enumauthRefreshTokensUpdateColumn = {
      createdAt: "createdAt",
      expiresAt: "expiresAt",
      refreshToken: "refreshToken",
      userId: "userId"
    };
    module2.exports.enumauthRolesConstraint = {
      roles_pkey: "roles_pkey"
    };
    module2.exports.enumauthRolesSelectColumn = {
      role: "role"
    };
    module2.exports.enumauthRolesUpdateColumn = {
      role: "role"
    };
    module2.exports.enumauthUserAuthenticatorsConstraint = {
      user_authenticators_credential_id_key: "user_authenticators_credential_id_key",
      user_authenticators_pkey: "user_authenticators_pkey"
    };
    module2.exports.enumauthUserAuthenticatorsSelectColumn = {
      counter: "counter",
      credentialId: "credentialId",
      credentialPublicKey: "credentialPublicKey",
      id: "id",
      nickname: "nickname",
      transports: "transports",
      userId: "userId"
    };
    module2.exports.enumauthUserAuthenticatorsUpdateColumn = {
      counter: "counter",
      credentialId: "credentialId",
      credentialPublicKey: "credentialPublicKey",
      id: "id",
      nickname: "nickname",
      transports: "transports",
      userId: "userId"
    };
    module2.exports.enumauthUserProvidersConstraint = {
      user_providers_pkey: "user_providers_pkey",
      user_providers_provider_id_provider_user_id_key: "user_providers_provider_id_provider_user_id_key",
      user_providers_user_id_provider_id_key: "user_providers_user_id_provider_id_key"
    };
    module2.exports.enumauthUserProvidersSelectColumn = {
      accessToken: "accessToken",
      createdAt: "createdAt",
      id: "id",
      providerId: "providerId",
      providerUserId: "providerUserId",
      refreshToken: "refreshToken",
      updatedAt: "updatedAt",
      userId: "userId"
    };
    module2.exports.enumauthUserProvidersUpdateColumn = {
      accessToken: "accessToken",
      createdAt: "createdAt",
      id: "id",
      providerId: "providerId",
      providerUserId: "providerUserId",
      refreshToken: "refreshToken",
      updatedAt: "updatedAt",
      userId: "userId"
    };
    module2.exports.enumauthUserRolesConstraint = {
      user_roles_pkey: "user_roles_pkey",
      user_roles_user_id_role_key: "user_roles_user_id_role_key"
    };
    module2.exports.enumauthUserRolesSelectColumn = {
      createdAt: "createdAt",
      id: "id",
      role: "role",
      userId: "userId"
    };
    module2.exports.enumauthUserRolesUpdateColumn = {
      createdAt: "createdAt",
      id: "id",
      role: "role",
      userId: "userId"
    };
    module2.exports.enumauthMigrationsConstraint = {
      migrations_name_key: "migrations_name_key",
      migrations_pkey: "migrations_pkey"
    };
    module2.exports.enumauthMigrationsSelectColumn = {
      executed_at: "executed_at",
      hash: "hash",
      id: "id",
      name: "name"
    };
    module2.exports.enumauthMigrationsUpdateColumn = {
      executed_at: "executed_at",
      hash: "hash",
      id: "id",
      name: "name"
    };
    module2.exports.enumbucketsConstraint = {
      buckets_pkey: "buckets_pkey"
    };
    module2.exports.enumbucketsSelectColumn = {
      cacheControl: "cacheControl",
      createdAt: "createdAt",
      downloadExpiration: "downloadExpiration",
      id: "id",
      maxUploadFileSize: "maxUploadFileSize",
      minUploadFileSize: "minUploadFileSize",
      presignedUrlsEnabled: "presignedUrlsEnabled",
      updatedAt: "updatedAt"
    };
    module2.exports.enumbucketsUpdateColumn = {
      cacheControl: "cacheControl",
      createdAt: "createdAt",
      downloadExpiration: "downloadExpiration",
      id: "id",
      maxUploadFileSize: "maxUploadFileSize",
      minUploadFileSize: "minUploadFileSize",
      presignedUrlsEnabled: "presignedUrlsEnabled",
      updatedAt: "updatedAt"
    };
    module2.exports.enumenNotificationsConstraint = {
      enum_notifications_pkey: "enum_notifications_pkey"
    };
    module2.exports.enumenNotificationsEnum = {
      Internal: "Internal",
      Whatsapp: "Whatsapp",
      member_invitation: "member_invitation",
      member_joined: "member_joined",
      payment_reminder: "payment_reminder",
      payment_review: "payment_review",
      period_completion: "period_completion"
    };
    module2.exports.enumenNotificationsSelectColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenNotificationsUpdateColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenPermissionsConstraint = {
      en_permissions_pkey: "en_permissions_pkey"
    };
    module2.exports.enumenPermissionsEnum = {
      Accepted: "Accepted",
      Pending: "Pending",
      Rejected: "Rejected"
    };
    module2.exports.enumenPermissionsSelectColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenPermissionsUpdateColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenRecurrenciesConstraint = {
      enum_period_recurrency_description_key: "enum_period_recurrency_description_key",
      enum_period_recurrency_pkey: "enum_period_recurrency_pkey"
    };
    module2.exports.enumenRecurrenciesEnum = {
      Daily: "Daily",
      Monthly: "Monthly",
      Weekly: "Weekly"
    };
    module2.exports.enumenRecurrenciesSelectColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenRecurrenciesUpdateColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenStatusesConstraint = {
      enum_statuses_description_key: "enum_statuses_description_key",
      enum_statuses_pkey: "enum_statuses_pkey"
    };
    module2.exports.enumenStatusesEnum = {
      Cancelled: "Cancelled",
      Completed: "Completed",
      Failed: "Failed",
      Pending: "Pending",
      Processing: "Processing",
      Rejected: "Rejected"
    };
    module2.exports.enumenStatusesSelectColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenStatusesUpdateColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenTransTypesConstraint = {
      enum_trans_statuses_pkey: "enum_trans_statuses_pkey"
    };
    module2.exports.enumenTransTypesEnum = {
      MoneyIn: "MoneyIn",
      MoneyOut: "MoneyOut"
    };
    module2.exports.enumenTransTypesSelectColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumenTransTypesUpdateColumn = {
      description: "description",
      value: "value"
    };
    module2.exports.enumfilesConstraint = {
      files_pkey: "files_pkey"
    };
    module2.exports.enumfilesSelectColumn = {
      bucketId: "bucketId",
      createdAt: "createdAt",
      etag: "etag",
      id: "id",
      isUploaded: "isUploaded",
      mimeType: "mimeType",
      name: "name",
      size: "size",
      updatedAt: "updatedAt",
      uploadedByUserId: "uploadedByUserId"
    };
    module2.exports.enumfilesUpdateColumn = {
      bucketId: "bucketId",
      createdAt: "createdAt",
      etag: "etag",
      id: "id",
      isUploaded: "isUploaded",
      mimeType: "mimeType",
      name: "name",
      size: "size",
      updatedAt: "updatedAt",
      uploadedByUserId: "uploadedByUserId"
    };
    module2.exports.enumgroupConstraint = {
      group_admin_id_group_name_key: "group_admin_id_group_name_key",
      group_pkey: "group_pkey"
    };
    module2.exports.enumgroupSelectColumn = {
      admin_id: "admin_id",
      contribution: "contribution",
      contribution_for_all: "contribution_for_all",
      created_at: "created_at",
      group_name: "group_name",
      id: "id",
      recurrency: "recurrency",
      recurrency_day: "recurrency_day",
      recurrency_for_all: "recurrency_for_all",
      updated_at: "updated_at"
    };
    module2.exports.enumgroupUpdateColumn = {
      admin_id: "admin_id",
      contribution: "contribution",
      contribution_for_all: "contribution_for_all",
      created_at: "created_at",
      group_name: "group_name",
      id: "id",
      recurrency: "recurrency",
      recurrency_day: "recurrency_day",
      recurrency_for_all: "recurrency_for_all",
      updated_at: "updated_at"
    };
    module2.exports.enuminvitationConstraint = {
      invite_pkey: "invite_pkey"
    };
    module2.exports.enuminvitationSelectColumn = {
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      invite_status: "invite_status",
      invite_type: "invite_type",
      receiver_id: "receiver_id",
      receiver_phone: "receiver_phone",
      sender_id: "sender_id",
      updated_at: "updated_at"
    };
    module2.exports.enuminvitationUpdateColumn = {
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      invite_status: "invite_status",
      invite_type: "invite_type",
      receiver_id: "receiver_id",
      receiver_phone: "receiver_phone",
      sender_id: "sender_id",
      updated_at: "updated_at"
    };
    module2.exports.enummemberConstraint = {
      member_group_id_user_id_key: "member_group_id_user_id_key",
      member_pkey: "member_pkey"
    };
    module2.exports.enummemberSelectColumn = {
      contribution: "contribution",
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      invitation_id: "invitation_id",
      recurrency: "recurrency",
      recurrency_day: "recurrency_day",
      reminder_days: "reminder_days",
      reminder_id: "reminder_id",
      reminder_next: "reminder_next",
      updated_at: "updated_at",
      user_id: "user_id"
    };
    module2.exports.enummemberUpdateColumn = {
      contribution: "contribution",
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      invitation_id: "invitation_id",
      recurrency: "recurrency",
      recurrency_day: "recurrency_day",
      reminder_days: "reminder_days",
      reminder_id: "reminder_id",
      reminder_next: "reminder_next",
      updated_at: "updated_at",
      user_id: "user_id"
    };
    module2.exports.enumnotificationConstraint = {
      notification_pkey: "notification_pkey"
    };
    module2.exports.enumnotificationSelectColumn = {
      created_at: "created_at",
      data: "data",
      id: "id",
      invitation_id: "invitation_id",
      is_viewed: "is_viewed",
      message: "message",
      notifiable: "notifiable",
      payment_review_id: "payment_review_id",
      period_id: "period_id",
      status: "status",
      title: "title",
      type: "type",
      updated_at: "updated_at",
      user_id: "user_id"
    };
    module2.exports.enumnotificationUpdateColumn = {
      created_at: "created_at",
      data: "data",
      id: "id",
      invitation_id: "invitation_id",
      is_viewed: "is_viewed",
      message: "message",
      notifiable: "notifiable",
      payment_review_id: "payment_review_id",
      period_id: "period_id",
      status: "status",
      title: "title",
      type: "type",
      updated_at: "updated_at",
      user_id: "user_id"
    };
    module2.exports.enumorderBy = {
      asc: "asc",
      asc_nulls_first: "asc_nulls_first",
      asc_nulls_last: "asc_nulls_last",
      desc: "desc",
      desc_nulls_first: "desc_nulls_first",
      desc_nulls_last: "desc_nulls_last"
    };
    module2.exports.enumpaymentConstraint = {
      payment_pkey: "payment_pkey"
    };
    module2.exports.enumpaymentReviewConstraint = {
      payment_permission_pkey: "payment_permission_pkey"
    };
    module2.exports.enumpaymentReviewSelectColumn = {
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      index: "index",
      notes: "notes",
      payment_id: "payment_id",
      period_id: "period_id",
      requester_id: "requester_id",
      response: "response",
      reviewer_id: "reviewer_id",
      updated_at: "updated_at"
    };
    module2.exports.enumpaymentReviewUpdateColumn = {
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      index: "index",
      notes: "notes",
      payment_id: "payment_id",
      period_id: "period_id",
      requester_id: "requester_id",
      response: "response",
      reviewer_id: "reviewer_id",
      updated_at: "updated_at"
    };
    module2.exports.enumpaymentSelectColumn = {
      amount: "amount",
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      member_id: "member_id",
      narration: "narration",
      payment_currency: "payment_currency",
      payment_response_code: "payment_response_code",
      payment_state: "payment_state",
      payment_url: "payment_url",
      period_id: "period_id",
      recipient_name: "recipient_name",
      recipient_phone: "recipient_phone",
      transaction_status: "transaction_status",
      transaction_type: "transaction_type",
      updated_at: "updated_at"
    };
    module2.exports.enumpaymentUpdateColumn = {
      amount: "amount",
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      member_id: "member_id",
      narration: "narration",
      payment_currency: "payment_currency",
      payment_response_code: "payment_response_code",
      payment_state: "payment_state",
      payment_url: "payment_url",
      period_id: "period_id",
      recipient_name: "recipient_name",
      recipient_phone: "recipient_phone",
      transaction_status: "transaction_status",
      transaction_type: "transaction_type",
      updated_at: "updated_at"
    };
    module2.exports.enumperiodConstraint = {
      period_group_id_member_id_period_index_key: "period_group_id_member_id_period_index_key",
      period_pkey: "period_pkey"
    };
    module2.exports.enumperiodSelectColumn = {
      completed_at: "completed_at",
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      member_id: "member_id",
      period_index: "period_index",
      reminder_index: "reminder_index",
      updated_at: "updated_at"
    };
    module2.exports.enumperiodUpdateColumn = {
      completed_at: "completed_at",
      created_at: "created_at",
      group_id: "group_id",
      id: "id",
      member_id: "member_id",
      period_index: "period_index",
      reminder_index: "reminder_index",
      updated_at: "updated_at"
    };
    module2.exports.enumstateCacheConstraint = {
      state_cache_pkey: "state_cache_pkey"
    };
    module2.exports.enumstateCacheSelectColumn = {
      created_at: "created_at",
      id: "id",
      ref_id: "ref_id",
      state: "state",
      updated_at: "updated_at"
    };
    module2.exports.enumstateCacheUpdateColumn = {
      created_at: "created_at",
      id: "id",
      ref_id: "ref_id",
      state: "state",
      updated_at: "updated_at"
    };
    module2.exports.enumuserProfileConstraint = {
      user_profile_pkey: "user_profile_pkey",
      user_profile_user_id_key: "user_profile_user_id_key"
    };
    module2.exports.enumuserProfileSelectColumn = {
      created_at: "created_at",
      expo_push_token: "expo_push_token",
      id: "id",
      updated_at: "updated_at",
      user_id: "user_id"
    };
    module2.exports.enumuserProfileUpdateColumn = {
      created_at: "created_at",
      expo_push_token: "expo_push_token",
      id: "id",
      updated_at: "updated_at",
      user_id: "user_id"
    };
    module2.exports.enumusersConstraint = {
      users_email_key: "users_email_key",
      users_phone_number_key: "users_phone_number_key",
      users_pkey: "users_pkey"
    };
    module2.exports.enumusersSelectColumn = {
      activeMfaType: "activeMfaType",
      avatarUrl: "avatarUrl",
      createdAt: "createdAt",
      currentChallenge: "currentChallenge",
      defaultRole: "defaultRole",
      disabled: "disabled",
      displayName: "displayName",
      email: "email",
      emailVerified: "emailVerified",
      id: "id",
      isAnonymous: "isAnonymous",
      lastSeen: "lastSeen",
      locale: "locale",
      metadata: "metadata",
      newEmail: "newEmail",
      otpHash: "otpHash",
      otpHashExpiresAt: "otpHashExpiresAt",
      otpMethodLastUsed: "otpMethodLastUsed",
      passwordHash: "passwordHash",
      phoneNumber: "phoneNumber",
      phoneNumberVerified: "phoneNumberVerified",
      ticket: "ticket",
      ticketExpiresAt: "ticketExpiresAt",
      totpSecret: "totpSecret",
      updatedAt: "updatedAt"
    };
    module2.exports.enumusersUpdateColumn = {
      activeMfaType: "activeMfaType",
      avatarUrl: "avatarUrl",
      createdAt: "createdAt",
      currentChallenge: "currentChallenge",
      defaultRole: "defaultRole",
      disabled: "disabled",
      displayName: "displayName",
      email: "email",
      emailVerified: "emailVerified",
      id: "id",
      isAnonymous: "isAnonymous",
      lastSeen: "lastSeen",
      locale: "locale",
      metadata: "metadata",
      newEmail: "newEmail",
      otpHash: "otpHash",
      otpHashExpiresAt: "otpHashExpiresAt",
      otpMethodLastUsed: "otpMethodLastUsed",
      passwordHash: "passwordHash",
      phoneNumber: "phoneNumber",
      phoneNumberVerified: "phoneNumberVerified",
      ticket: "ticket",
      ticketExpiresAt: "ticketExpiresAt",
      totpSecret: "totpSecret",
      updatedAt: "updatedAt"
    };
    module2.exports.generateQueryOp = function(fields) {
      return generateGraphqlOperation("query", typeMap.Query, fields);
    };
    module2.exports.generateMutationOp = function(fields) {
      return generateGraphqlOperation("mutation", typeMap.Mutation, fields);
    };
    module2.exports.generateSubscriptionOp = function(fields) {
      return generateGraphqlOperation("subscription", typeMap.Subscription, fields);
    };
    module2.exports.everything = {
      __scalar: !0
    };
    var schemaExports = require_guards_cjs();
    for (k in schemaExports)
      module2.exports[k] = schemaExports[k];
    var k;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react"), import_server = require("react-dom/server");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/emotion-cache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react14 = require("react"), import_react15 = require("@chakra-ui/react"), import_react16 = require("@emotion/react"), import_react17 = require("@remix-run/react");

// app/components/panel/panel.tsx
var import_react4 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Panel = ({
  children,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Box, {
  className: "panel",
  m: "2",
  px: "6",
  py: "4",
  bg: "white",
  borderRadius: 10,
  boxShadow: "sm",
  ...rest,
  children
}, void 0, !1, {
  fileName: "app/components/panel/panel.tsx",
  lineNumber: 11,
  columnNumber: 3
}, this);

// app/components/page/page-layout.tsx
var import_react12 = require("@chakra-ui/react");

// app/components/nprogress/use-nprogress.ts
var import_react5 = require("react"), import_react6 = require("@remix-run/react"), import_nprogress = __toESM(require("nprogress")), useNProgress = () => {
  let transition = (0, import_react6.useTransition)();
  (0, import_react5.useEffect)(() => {
    transition.state === "loading" || transition.state === "submitting" ? import_nprogress.default.start() : import_nprogress.default.done();
  }, [transition.state]);
};

// app/components/sidebar/sidebar.tsx
var import_react7 = require("@chakra-ui/react"), import_react8 = require("@remix-run/react"), import_fi = require("react-icons/fi"), import_go = require("react-icons/go"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Sidebar = ({ isOpen, sitemap: sitemap2, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
  isOpen,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLogo, {
      isOpen,
      onToggle
    }, void 0, !1, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavList, {
      children: sitemap2.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItem, {
        isOpen,
        icon: s.icon,
        to: s.to,
        isLast: i > 0 && i === sitemap2.length - 1,
        children: s.title
      }, s.to, !1, {
        fileName: "app/components/sidebar/sidebar.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this))
    }, void 0, !1, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/sidebar/sidebar.tsx",
  lineNumber: 28,
  columnNumber: 3
}, this), Container = ({
  isOpen,
  children
}) => {
  let [min, max] = (0, import_react7.useToken)("sizes.sidebar", ["min", "max"]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Flex, {
    className: "sidebar",
    position: "fixed",
    left: "0",
    top: "0",
    bottom: "0",
    width: isOpen ? max : min,
    bg: "blue.900",
    zIndex: 99,
    transition: "all 0.3s ease",
    flexDirection: "column",
    children
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}, AppLogo = ({
  isOpen,
  onToggle
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Center, {
  mt: "4",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.IconButton, {
    size: "sm",
    onClick: onToggle,
    "aria-label": "toggle sidebar",
    colorScheme: "white",
    borderRadius: 8,
    borderWidth: 0,
    variant: "outline",
    opacity: isOpen ? 0 : 1,
    transition: "all 0.2s ease",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Icon, {
      as: import_fi.FiMenu,
      color: "gray.300",
      fontSize: "xl",
      fontWeight: "lg"
    }, void 0, !1, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/components/sidebar/sidebar.tsx",
  lineNumber: 75,
  columnNumber: 3
}, this), NavList = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.UnorderedList, {
  mt: "-4",
  h: "100%",
  pt: "12",
  marginLeft: 0,
  className: "nav-list",
  display: "flex",
  flexDirection: "column",
  spacing: "4",
  children
}, void 0, !1, {
  fileName: "app/components/sidebar/sidebar.tsx",
  lineNumber: 92,
  columnNumber: 3
}, this), NavItem = ({ to, icon, isLast, isOpen, children }) => {
  let location = (0, import_react_router_dom.useLocation)(), isActive = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.ListItem, {
    mb: isLast ? "10" : void 0,
    py: "2",
    px: "2",
    listStyleType: "none",
    pl: isOpen ? "4" : "6",
    borderLeftWidth: 6,
    borderLeftColor: isActive ? "teal.400" : "transparent",
    bg: isActive ? "blue.600" : void 0,
    color: isActive ? "white" : "gray.400",
    _hover: { color: "white", bg: isActive ? "blue.600" : "blue.700" },
    bottom: isLast ? "0" : void 0,
    css: `
        a {
          display: flex;
          align-items: center;
        }
        margin-top: ${isLast ? "auto" : "inherited"} !important;
      `,
    transition: "all 0.3s ease",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
      to,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        w: "100%",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Flex, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItemLeftIcon, {
                to,
                icon,
                isOpen
              }, void 0, !1, {
                fileName: "app/components/sidebar/sidebar.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Text, {
                fontSize: "lg",
                opacity: isOpen ? 1 : 0,
                transition: "all 0.1s ease",
                children
              }, void 0, !1, {
                fileName: "app/components/sidebar/sidebar.tsx",
                lineNumber: 145,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/sidebar/sidebar.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavItemRightIcon, {
            to,
            isActive,
            isOpen
          }, void 0, !1, {
            fileName: "app/components/sidebar/sidebar.tsx",
            lineNumber: 153,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/sidebar/sidebar.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}, NavItemLeftIcon = ({ to, isOpen, icon }) => {
  let transition = (0, import_react8.useTransition)();
  return transition.state === "loading" && displaySpinner(to, transition) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Spinner, {
    size: "sm",
    color: "teal.500"
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 169,
    columnNumber: 14
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Icon, {
    as: icon,
    mr: isOpen ? "4" : "0",
    fontSize: "2xl",
    transition: "all 0.2s ease"
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
}, NavItemRightIcon = ({ to, isActive, isOpen }) => {
  let transition = (0, import_react8.useTransition)();
  return isOpen ? transition.state === "loading" && displaySpinner(to, transition) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Spinner, {
    size: "sm",
    color: "teal.500"
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 196,
    columnNumber: 14
  }, this) : isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Icon, {
    as: import_go.GoPrimitiveDot,
    color: "teal.400",
    filter: "blur(0.6px)",
    transition: "all 0.2s ease"
  }, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 201,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, !1, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 191,
    columnNumber: 12
  }, this);
}, displaySpinner = (to, transition) => {
  var _a, _b;
  if (to === "/") {
    if (((_a = transition.location) == null ? void 0 : _a.pathname) === "/")
      return !0;
  } else if (to !== "/" && ((_b = transition.location) == null ? void 0 : _b.pathname.startsWith(to)))
    return !0;
  return !1;
};

// app/components/page/page.header.tsx
var import_react11 = require("@chakra-ui/react"), import_fi2 = require("react-icons/fi"), import_md = require("react-icons/md");

// app/components/page/page.breadcrumbs.tsx
var import_icons = require("@chakra-ui/icons"), import_react9 = require("@chakra-ui/react"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PageBreadcrumbs = () => {
  var _a, _b;
  let items = (0, import_react10.useMatches)().filter((m) => !!m.handle), iconColor = items.length > 1 ? "blue.500" : "gray.500";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Flex, {
    alignItems: "center",
    children: [
      ((_a = items[0].handle) == null ? void 0 : _a.icon) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Icon, {
        as: (_b = items[0].handle) == null ? void 0 : _b.icon,
        mr: "2",
        fontSize: "xl",
        color: iconColor
      }, void 0, !1, {
        fileName: "app/components/page/page.breadcrumbs.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Breadcrumb, {
        separator: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.ChevronRightIcon, {
          color: "gray.500"
        }, void 0, !1, {
          fileName: "app/components/page/page.breadcrumbs.tsx",
          lineNumber: 20,
          columnNumber: 30
        }, this),
        children: items.filter((m) => !!m.handle).map((m, i) => {
          var _a2, _b2;
          let last = i === items.length - 1;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.BreadcrumbItem, {
            fontSize: "large",
            isCurrentPage: last,
            children: last ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Text, {
              fontSize: "lg",
              color: "gray.500",
              children: (_a2 = m.handle) == null ? void 0 : _a2.breadcrumb
            }, void 0, !1, {
              fileName: "app/components/page/page.breadcrumbs.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
              to: m.pathname,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Text, {
                fontSize: "lg",
                color: "blue.500",
                cursor: "pointer",
                children: (_b2 = m.handle) == null ? void 0 : _b2.breadcrumb
              }, void 0, !1, {
                fileName: "app/components/page/page.breadcrumbs.tsx",
                lineNumber: 37,
                columnNumber: 21
              }, this)
            }, void 0, !1, {
              fileName: "app/components/page/page.breadcrumbs.tsx",
              lineNumber: 36,
              columnNumber: 19
            }, this)
          }, m.pathname, !1, {
            fileName: "app/components/page/page.breadcrumbs.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this);
        })
      }, void 0, !1, {
        fileName: "app/components/page/page.breadcrumbs.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/page/page.breadcrumbs.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// app/components/page/page.header.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PageHeader = ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
  className: "page-header",
  p: "3",
  pr: "6",
  w: "100%",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Flex, {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleNavButton, {
          isOpen,
          onToggle
        }, void 0, !1, {
          fileName: "app/components/page/page.header.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Input, {
          ml: ["0", "4"],
          flex: 1,
          placeholder: "Search..."
        }, void 0, !1, {
          fileName: "app/components/page/page.header.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Flex, {
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          flex: [0, 1],
          display: { base: "none", md: "flex" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
              mt: "4",
              mr: "4",
              position: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Icon, {
                  as: import_md.MdNotifications,
                  color: "gray.500",
                  fontSize: "3xl"
                }, void 0, !1, {
                  fileName: "app/components/page/page.header.tsx",
                  lineNumber: 34,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Badge, {
                  rounded: "lg",
                  position: "absolute",
                  right: "-2",
                  bg: "orange.500",
                  color: "white",
                  children: "12"
                }, void 0, !1, {
                  fileName: "app/components/page/page.header.tsx",
                  lineNumber: 35,
                  columnNumber: 11
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/page/page.header.tsx",
              lineNumber: 33,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Heading, {
              color: "blue.600",
              mr: "2",
              fontSize: "3xl",
              children: "paygroup"
            }, void 0, !1, {
              fileName: "app/components/page/page.header.tsx",
              lineNumber: 45,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Heading, {
              color: "teal.500",
              fontSize: "3xl",
              children: "admin"
            }, void 0, !1, {
              fileName: "app/components/page/page.header.tsx",
              lineNumber: 48,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/page/page.header.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/page/page.header.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Flex, {
      mt: "1",
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
          w: isOpen ? "14" : "4"
        }, void 0, !1, {
          fileName: "app/components/page/page.header.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Fade, {
          in: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageBreadcrumbs, {}, void 0, !1, {
            fileName: "app/components/page/page.header.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/page/page.header.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/page/page.header.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/page/page.header.tsx",
  lineNumber: 22,
  columnNumber: 3
}, this), ToggleNavButton = ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.IconButton, {
  onClick: onToggle,
  "aria-label": "toggle sidebar",
  variant: "ghost",
  colorScheme: "blue",
  borderRadius: 8,
  opacity: isOpen ? 1 : 0,
  position: isOpen ? "relative" : "absolute",
  transition: "all 0.3s ease",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Icon, {
    as: import_fi2.FiMenu,
    color: isOpen ? "blue.500" : "gray.300",
    fontSize: "xl",
    fontWeight: "lg",
    transition: "all 0.3s ease"
  }, void 0, !1, {
    fileName: "app/components/page/page.header.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/page/page.header.tsx",
  lineNumber: 66,
  columnNumber: 3
}, this);

// app/components/page/page-layout.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PageLayout = ({
  sitemap: sitemap2,
  children
}) => {
  let [headerHeight] = (0, import_react12.useToken)("space", ["28"]), open = (0, import_react12.useBreakpointValue)({
    base: !1,
    lg: void 0
  }), { isOpen, onToggle } = (0, import_react12.useDisclosure)({
    defaultIsOpen: !0,
    isOpen: open
  });
  return useNProgress(), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    sitemap: sitemap2,
    isOpen,
    onToggle,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Grid, {
      flex: 1,
      w: "100%",
      className: "layout-grid",
      templateRows: `${headerHeight} 1fr`,
      templateColumns: "1fr",
      templateAreas: `
            'header'
            'content'
          `,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Box, {
          className: "grid-header",
          gridArea: "header",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
            isOpen,
            onToggle
          }, void 0, !1, {
            fileName: "app/components/page/page-layout.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/page/page-layout.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Flex, {
          className: "grid-content",
          gridArea: "content",
          flexDirection: "column",
          bg: "#e2e8f0",
          borderTopWidth: 1,
          p: { base: "1", md: "4" },
          children
        }, void 0, !1, {
          fileName: "app/components/page/page-layout.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/page/page-layout.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/page/page-layout.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, Layout = ({
  isOpen,
  sitemap: sitemap2,
  children,
  onToggle
}) => {
  let [min, max] = (0, import_react12.useToken)("sizes.sidebar", ["min", "max"]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Flex, {
    className: "layout",
    h: "100%",
    flexDirection: "row",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {
        sitemap: sitemap2,
        isOpen,
        onToggle
      }, void 0, !1, {
        fileName: "app/components/page/page-layout.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Flex, {
        className: "layout-content",
        flex: 1,
        ml: isOpen ? max : min,
        children
      }, void 0, !1, {
        fileName: "app/components/page/page-layout.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/page/page-layout.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
};

// app/components/app-theme/app-theme.ts
var import_react13 = require("@chakra-ui/react"), theme = (0, import_react13.extendTheme)({
  styles: {
    global: {
      "html, body": {
        height: "100%"
      }
    }
  },
  colors: {
    primary: import_react13.theme.colors.blue,
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    blueGray: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a"
    },
    danger: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337"
    }
  },
  sizes: {
    sidebar: {
      min: "20",
      max: "52"
    }
  },
  config: {}
});

// app/sitemap.ts
var import_bs = require("react-icons/bs"), import_fi3 = require("react-icons/fi"), import_hi = require("react-icons/hi"), sitemap = [
  { to: "/", title: "Dashboard", icon: import_fi3.FiGrid },
  { to: "/groups", title: "Groups", icon: import_hi.HiOutlineUserGroup },
  { to: "/payments", title: "Payments", icon: import_bs.BsGraphUp },
  { to: "/users", title: "Users", icon: import_bs.BsPeople },
  { to: "/settings", title: "Settings", icon: import_fi3.FiSettings }
];

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/boxicons@2.1.3/css/boxicons.min.css"
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/nprogress@0.2.0/nprogress.css"
  }
], meta = () => ({
  charset: "utf-8",
  title: "admin - paygroup",
  viewport: "width=device-width,initial-scale=1"
}), Document = (0, import_react16.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react14.useContext)(ServerStyleContext), clientStyleData = (0, import_react14.useContext)(ClientStyleContext);
    return (0, import_react14.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "app/root.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this))
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.ChakraProvider, {
      theme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLayout, {
        sitemap,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/payments.tsx
var payments_exports = {};
__export(payments_exports, {
  default: () => Index,
  handle: () => handle,
  meta: () => meta2
});
var import_bs2 = require("react-icons/bs");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "paygroup - payments"
}), handle = {
  breadcrumb: "payments",
  icon: import_bs2.BsGraphUp
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
    children: "payments"
  }, void 0, !1, {
    fileName: "app/routes/payments.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Index2,
  handle: () => handle2,
  meta: () => meta3
});
var import_fi4 = require("react-icons/fi");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta3 = () => ({
  title: "paygroup - settings"
}), handle2 = {
  breadcrumb: "settings",
  icon: import_fi4.FiSettings
};
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
    children: "settings"
  }, void 0, !1, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/routes/groups.tsx
var groups_exports = {};
__export(groups_exports, {
  default: () => Index3,
  handle: () => handle3,
  loader: () => loader,
  meta: () => meta4
});
var import_react29 = require("@remix-run/react"), import_hi2 = require("react-icons/hi");

// app/common/envs.ts
var getEnv = (env) => envs.isLocal ? envs.local[env] : envs.remote[env], envs = {
  isLocal: Boolean(process.env.LOCAL) === !0,
  local: {
    GRAPHQL_URL: process.env.LOCAL_GRAPHQL_URL,
    NHOST_URL: process.env.LOCAL_NHOST_URL,
    HASURA_ADMIN: process.env.LOCAL_HASURA_ADMIN,
    SERVER_API: process.env.LOCAL_SERVER_API,
    HASURA_SCHEDULE_URL: process.env.LOCAL_HASURA_SCHEDULE_URL,
    UBPAY_MERCHANT_ID: process.env.UBPAY_MERCHANT_ID,
    UBPAY_REQUEST_URL: process.env.UBPAY_REQUEST_URL,
    UBPAY_WITHDRAW_URL: process.env.UBPAY_WITHDRAW_URL,
    UBPAY_WITHDRAW_AUTHORIZATION: process.env.UBPAY_WITHDRAW_AUTHORIZATION,
    UBPAY_WITHDRAW_SENDER_PHONE: process.env.UBPAY_WITHDRAW_SENDER_PHONE,
    UBPAY_BALANCE_URL: process.env.UBPAY_BALANCE_URL
  },
  remote: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    NHOST_URL: process.env.NHOST_URL,
    HASURA_ADMIN: process.env.HASURA_ADMIN,
    SERVER_API: process.env.SERVER_API,
    HASURA_SCHEDULE_URL: process.env.HASURA_SCHEDULE_URL,
    UBPAY_MERCHANT_ID: process.env.UBPAY_MERCHANT_ID,
    UBPAY_REQUEST_URL: process.env.UBPAY_REQUEST_URL,
    UBPAY_WITHDRAW_URL: process.env.UBPAY_WITHDRAW_URL,
    UBPAY_WITHDRAW_AUTHORIZATION: process.env.UBPAY_WITHDRAW_AUTHORIZATION,
    UBPAY_WITHDRAW_SENDER_PHONE: process.env.UBPAY_WITHDRAW_SENDER_PHONE,
    UBPAY_BALANCE_URL: process.env.UBPAY_BALANCE_URL
  }
};

// app/graphql/genql-cli/genql-cli.ts
var import_genql_sdk = __toESM(require_genql_sdk());
console.log({
  graphql: getEnv("GRAPHQL_URL"),
  adminid: getEnv("HASURA_ADMIN")
});
var genql = (0, import_genql_sdk.createClient)({
  url: getEnv("GRAPHQL_URL"),
  headers: {
    "X-Hasura-Admin-Secret": getEnv("HASURA_ADMIN"),
    "X-Hasura-Role": "admin"
  }
});

// app/modules/groups/fetch-group-pages.ts
var fetchGroupPages = async ({
  page,
  search
}) => {
  var _a;
  let offset = page ? 10 * (page - 1) : 0, { group: items, group_aggregate } = await genql.query({
    group: [
      {
        offset,
        limit: 10,
        order_by: [{ created_at: "desc" }, { group_name: "asc" }],
        where: {
          group_name: search ? {
            _ilike: `%${search}%`
          } : void 0,
          members: {
            id: {
              _is_null: !1
            }
          }
        }
      },
      {
        id: !0,
        created_at: !0,
        group_name: !0,
        user: {
          id: !0,
          displayName: !0
        },
        group_balance: !0,
        contribution: !0,
        recurrency: !0,
        recurrency_day: !0,
        members_aggregate: {
          aggregate: {
            count: !0
          }
        }
      }
    ],
    group_aggregate: [
      {
        where: {
          members: {
            id: {
              _is_null: !1
            }
          }
        }
      },
      {
        aggregate: {
          count: !0
        }
      }
    ]
  });
  return {
    page,
    count: ((_a = group_aggregate.aggregate) == null ? void 0 : _a.count) ?? 0,
    items: items.map((g, i) => ({ ...g, index: i + offset + 1 }))
  };
};

// app/modules/groups/groups-table.tsx
var import_react18 = require("@chakra-ui/react"), import_react19 = require("@remix-run/react"), import_dayjs = __toESM(require("dayjs"));

// app/modules/constants.ts
var paymentCycles = {
  Daily: {
    label: "Daily",
    color: "orange.400"
  },
  Weekly: {
    label: "Weekly",
    color: "teal.400"
  },
  Monthly: {
    label: "Monthly",
    color: "blue.400"
  }
};

// app/modules/groups/groups-table.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GroupsTable = ({ items }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.TableContainer, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Table, {
    variant: "striped",
    colorScheme: "blueGray",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Thead, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Tr, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "1%",
              children: "#"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "20%",
              children: "group name"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 24,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "20%",
              children: "created at"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "20%",
              children: "owner"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "10%",
              children: "balance"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "10%",
              children: "contribution"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Th, {
              w: "10%",
              children: "recurrency"
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/modules/groups/groups-table.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/modules/groups/groups-table.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Tbody, {
        children: items.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Tr, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              children: row.index
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              w: "20%",
              color: "blue.500",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Link, {
                to: `/groups/${row.id}`,
                children: row.group_name
              }, void 0, !1, {
                fileName: "app/modules/groups/groups-table.tsx",
                lineNumber: 39,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              w: "20%",
              children: (0, import_dayjs.default)(row.created_at).format("ddd DD MMM, YYYY")
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              w: "20%",
              color: "blue.500",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Link, {
                to: `/users/${row.user.id}`,
                children: row.user.displayName
              }, void 0, !1, {
                fileName: "app/modules/groups/groups-table.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              w: "10%",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Text, {
                children: new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(row.group_balance ?? 0)
              }, void 0, !1, {
                fileName: "app/modules/groups/groups-table.tsx",
                lineNumber: 49,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              w: "10%",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Text, {
                children: row.contribution ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(row.contribution) : void 0
              }, void 0, !1, {
                fileName: "app/modules/groups/groups-table.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Td, {
              w: "10%",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Badge, {
                w: "16",
                textTransform: "none",
                textAlign: "center",
                borderRadius: 6,
                bg: row.recurrency ? paymentCycles[row.recurrency].color : void 0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Text, {
                  color: "white",
                  children: row.recurrency ? paymentCycles[row.recurrency].label : void 0
                }, void 0, !1, {
                  fileName: "app/modules/groups/groups-table.tsx",
                  lineNumber: 80,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/modules/groups/groups-table.tsx",
                lineNumber: 69,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/modules/groups/groups-table.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this)
          ]
        }, i, !0, {
          fileName: "app/modules/groups/groups-table.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/modules/groups/groups-table.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/groups/groups-table.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/modules/groups/groups-table.tsx",
  lineNumber: 19,
  columnNumber: 3
}, this);

// app/modules/groups/group-listing-page.tsx
var import_react22 = require("@chakra-ui/react"), import_react23 = require("@remix-run/react");

// app/components/pagination/pagination.tsx
var import_react20 = require("react"), import_icons2 = require("@chakra-ui/icons"), import_react21 = require("@chakra-ui/react"), import_throttle = __toESM(require("lodash/throttle")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TAKE = 10, Span = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Box, {
  mr: "2",
  className: "span",
  children
}, void 0, !1, {
  fileName: "app/components/pagination/pagination.tsx",
  lineNumber: 21,
  columnNumber: 3
}, this);
function usePagination({
  pageSize = TAKE,
  page,
  onPage,
  data
}) {
  let itemCount = (data == null ? void 0 : data.count) ?? 0, pageCount = Math.ceil(itemCount / pageSize), calcShowing = () => {
    let showing = pageSize * Number(page);
    return showing > itemCount && (showing = itemCount), showing;
  }, increasePage = () => onPage == null ? void 0 : onPage(Number(page) + 1), decreasePage = () => onPage == null ? void 0 : onPage(Number(page) - 1);
  return {
    itemCount,
    pageCount,
    data,
    prev: page > 1,
    next: page < pageCount,
    showing: calcShowing(),
    increasePage,
    decreasePage
  };
}
var Pagination = ({
  showing,
  itemCount,
  pageCount,
  page,
  prev,
  next,
  onChange,
  goNext,
  goPrev
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Flex, {
  alignItems: "center",
  color: "gray.500",
  className: "pagination",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: "showing"
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 81,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: showing
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 82,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: "of"
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 83,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: itemCount
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: itemCount > 1 ? "records" : "record"
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 85,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.IconButton, {
      onClick: prev ? goPrev : void 0,
      ml: "2",
      "aria-label": "previous page",
      colorScheme: prev ? "blue" : void 0,
      size: "sm",
      opacity: 0.8,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons2.ChevronLeftIcon, {
        fontSize: "2xl"
      }, void 0, !1, {
        fileName: "app/components/pagination/pagination.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 86,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.IconButton, {
      onClick: next ? goNext : void 0,
      ml: "1",
      mr: "2",
      "aria-label": "next page",
      colorScheme: next ? "blue" : void 0,
      size: "sm",
      opacity: 0.8,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons2.ChevronRightIcon, {
        fontSize: "2xl"
      }, void 0, !1, {
        fileName: "app/components/pagination/pagination.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 95,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageInput, {
      page,
      pageCount,
      onChange
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 105,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: "of"
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 106,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: pageCount
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 107,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Span, {
      children: pageCount > 1 ? "pages" : "page"
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 108,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Select, {
      display: "none",
      ml: "2",
      defaultValue: 10,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: 10,
          children: "10"
        }, void 0, !1, {
          fileName: "app/components/pagination/pagination.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: 20,
          children: "20"
        }, void 0, !1, {
          fileName: "app/components/pagination/pagination.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: 30,
          children: "30"
        }, void 0, !1, {
          fileName: "app/components/pagination/pagination.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: 50,
          children: "50"
        }, void 0, !1, {
          fileName: "app/components/pagination/pagination.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
          value: 100,
          children: "100"
        }, void 0, !1, {
          fileName: "app/components/pagination/pagination.tsx",
          lineNumber: 114,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 109,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/pagination/pagination.tsx",
  lineNumber: 80,
  columnNumber: 3
}, this), PageInput = ({ page, pageCount, onChange }) => {
  let [pageValue, setPageValue] = (0, import_react20.useState)(page ?? 0), [previousValue, setPreviousValue] = (0, import_react20.useState)(page), setPageValueThrottle = (0, import_react20.useCallback)(
    (0, import_throttle.default)((val) => setPageValue(val), 1e3),
    []
  ), invalidNum = (num) => typeof num != "number" || isNaN(num) || Number(num) === 0 && pageCount > 0, emptyString = (str) => !str.length, handleChange = (str, value) => {
    if (emptyString(str))
      setPreviousValue(page), setPageValue(str);
    else {
      if (invalidNum(value) || value < 0 || value > pageCount)
        return;
      setPageValueThrottle(value);
    }
  }, handleBlur = () => {
    invalidNum(pageValue) ? setPageValue(previousValue) : onChange == null || onChange(pageValue);
  }, handleKeyDown = (e) => {
    e.key === "Enter" && (onChange == null || onChange(pageValue));
  };
  return (0, import_react20.useEffect)(() => {
    page !== pageValue && setPageValue(page);
  }, [page]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.NumberInput, {
    className: "pagination-input",
    name: "page",
    width: ["16"],
    mr: "2",
    onBlur: handleBlur,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    value: pageCount ? pageValue : 0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.NumberInputField, {
      readOnly: !pageCount
    }, void 0, !1, {
      fileName: "app/components/pagination/pagination.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/pagination/pagination.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
};

// app/modules/groups/group-listing-page.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GroupListingPage = () => {
  let {
    items,
    count,
    page = 0
  } = (0, import_react23.useLoaderData)(), navigate = (0, import_react23.useNavigate)(), paging = usePagination({
    data: { items, count },
    page,
    onPage: (page2) => {
      navigate(`/groups?page=${page2}`);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.HStack, {
        alignItems: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Heading, {
            flex: 1,
            fontSize: "2xl",
            color: "gray.600",
            children: "Groups"
          }, void 0, !1, {
            fileName: "app/modules/groups/group-listing-page.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {
            ...paging,
            page,
            onChange: (page2) => {
              navigate(`/groups?page=${page2}`);
            },
            goNext: paging.increasePage,
            goPrev: paging.decreasePage
          }, void 0, !1, {
            fileName: "app/modules/groups/group-listing-page.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/groups/group-listing-page.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Divider, {
        mt: "3",
        mb: "2"
      }, void 0, !1, {
        fileName: "app/modules/groups/group-listing-page.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupsTable, {
        items
      }, void 0, !1, {
        fileName: "app/modules/groups/group-listing-page.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/groups/group-listing-page.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/modules/groups/group-info.tsx
var import_react24 = require("@chakra-ui/react"), import_dayjs2 = __toESM(require("dayjs"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GroupInfo = ({ group }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Box, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Heading, {
        fontSize: "2xl",
        color: "blue.500",
        fontWeight: "light",
        children: "Information"
      }, void 0, !1, {
        fileName: "app/modules/groups/group-info.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Divider, {
        mt: "2",
        mb: "6"
      }, void 0, !1, {
        fileName: "app/modules/groups/group-info.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.VStack, {
        alignItems: "flex-start",
        spacing: "6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Flex, {
            flexDirection: { base: "column", lg: "row" },
            alignItems: "flex-start",
            w: "100%",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Box, {
                flex: 1,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                    color: "primary.500",
                    fontSize: "lg",
                    children: "group name"
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-info.tsx",
                    lineNumber: 24,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                    mt: "-1",
                    color: "gray.500",
                    fontSize: "xl",
                    children: group.group_name
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-info.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                    color: "gray.400",
                    fontSize: "xs",
                    children: [
                      "created on",
                      " ",
                      (0, import_dayjs2.default)(group.created_at).format("ddd DD MMM, YYYY").toLocaleLowerCase()
                    ]
                  }, void 0, !0, {
                    fileName: "app/modules/groups/group-info.tsx",
                    lineNumber: 30,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/modules/groups/group-info.tsx",
                lineNumber: 23,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Flex, {
                mt: { base: "6", lg: "0" },
                flexDirection: "column",
                alignItems: { base: "flex-start", lg: "flex-end" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                    color: "primary.500",
                    fontSize: "lg",
                    children: "balance"
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-info.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                    mt: "-1",
                    color: "teal.500",
                    fontSize: "xl",
                    children: new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD"
                    }).format(group.group_balance ?? 0)
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-info.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/modules/groups/group-info.tsx",
                lineNumber: 38,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/groups/group-info.tsx",
            lineNumber: 18,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Box, {
            flex: 1,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                color: "primary.500",
                fontSize: "lg",
                children: "owner"
              }, void 0, !1, {
                fileName: "app/modules/groups/group-info.tsx",
                lineNumber: 56,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Text, {
                mt: "-1",
                color: "gray.500",
                fontSize: "xl",
                children: group.user.displayName
              }, void 0, !1, {
                fileName: "app/modules/groups/group-info.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/groups/group-info.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/groups/group-info.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/groups/group-info.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/modules/groups/group-info.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this);

// app/modules/groups/group-members.tsx
var import_react25 = require("@chakra-ui/react"), import_react26 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GroupMembers = ({ group }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
  mt: "4",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Heading, {
      fontSize: "2xl",
      color: "blue.500",
      fontWeight: "light",
      children: "Members"
    }, void 0, !1, {
      fileName: "app/modules/groups/group-members.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Divider, {
      mt: "2",
      mb: "2"
    }, void 0, !1, {
      fileName: "app/modules/groups/group-members.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Table, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Thead, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Tr, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Th, {
                p: 0,
                children: "#"
              }, void 0, !1, {
                fileName: "app/modules/groups/group-members.tsx",
                lineNumber: 26,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Th, {
                children: "member name"
              }, void 0, !1, {
                fileName: "app/modules/groups/group-members.tsx",
                lineNumber: 27,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/modules/groups/group-members.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/modules/groups/group-members.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Tbody, {
          children: group.members.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Tr, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Td, {
                p: 0,
                w: "5%",
                children: m.index
              }, void 0, !1, {
                fileName: "app/modules/groups/group-members.tsx",
                lineNumber: 33,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Td, {
                color: "blue.500",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Link, {
                  to: `/users/${m.user.id}`,
                  children: m.user.displayName
                }, void 0, !1, {
                  fileName: "app/modules/groups/group-members.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/modules/groups/group-members.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ]
          }, m.id, !0, {
            fileName: "app/modules/groups/group-members.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this))
        }, void 0, !1, {
          fileName: "app/modules/groups/group-members.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/modules/groups/group-members.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/modules/groups/group-members.tsx",
  lineNumber: 18,
  columnNumber: 3
}, this);

// app/modules/groups/group-payments.tsx
var import_react27 = require("@chakra-ui/react"), import_react28 = require("@remix-run/react"), import_dayjs3 = __toESM(require("dayjs")), import_query_string = __toESM(require("query-string")), import_fa = require("react-icons/fa"), import_go2 = require("react-icons/go");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GroupPayments = ({
  group
}) => {
  var _a, _b;
  let navigate = (0, import_react28.useNavigate)(), location = (0, import_react28.useLocation)(), params = import_query_string.default.parse(location.search), page = group.payments.length ? isNaN(params.paymentpage) ? 1 : Number(params.paymentpage) : 0, paging = usePagination({
    data: {
      items: group.payments,
      count: ((_b = (_a = group.payments_aggregate) == null ? void 0 : _a.aggregate) == null ? void 0 : _b.count) ?? 0
    },
    page,
    onPage: (page2) => {
      navigate(`/groups/${group.id}?paymentpage=${page2}`);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Heading, {
            fontSize: "2xl",
            color: "blue.500",
            fontWeight: "light",
            children: "Payments"
          }, void 0, !1, {
            fileName: "app/modules/groups/group-payments.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {
            ...paging,
            page,
            onChange: (page2) => {
              navigate(`/groups/${group.id}?paymentpage=${page2}`);
            },
            goNext: paging.increasePage,
            goPrev: paging.decreasePage
          }, void 0, !1, {
            fileName: "app/modules/groups/group-payments.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/groups/group-payments.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Divider, {
        mt: "2",
        mb: "2"
      }, void 0, !1, {
        fileName: "app/modules/groups/group-payments.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Table, {
        variant: "striped",
        colorScheme: "blueGray",
        fontSize: "md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Thead, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Tr, {
              textTransform: "none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Th, {
                  children: "#"
                }, void 0, !1, {
                  fileName: "app/modules/groups/group-payments.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Th, {
                  children: "amount"
                }, void 0, !1, {
                  fileName: "app/modules/groups/group-payments.tsx",
                  lineNumber: 78,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Th, {
                  children: "member"
                }, void 0, !1, {
                  fileName: "app/modules/groups/group-payments.tsx",
                  lineNumber: 79,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Th, {
                  children: "type"
                }, void 0, !1, {
                  fileName: "app/modules/groups/group-payments.tsx",
                  lineNumber: 80,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Th, {
                  children: "status"
                }, void 0, !1, {
                  fileName: "app/modules/groups/group-payments.tsx",
                  lineNumber: 81,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/modules/groups/group-payments.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/modules/groups/group-payments.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Tbody, {
            children: group.payments.map((p) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Tr, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Td, {
                    w: "5%",
                    valign: "top",
                    children: p.index
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-payments.tsx",
                    lineNumber: 87,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Td, {
                    valign: "top",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Text, {
                        fontSize: "md",
                        color: p.transaction_status === "Pending" ? "yellow.500" : p.transaction_status === "Completed" ? "teal.500" : "orange.500",
                        children: new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(p.amount ?? 0)
                      }, void 0, !1, {
                        fileName: "app/modules/groups/group-payments.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Text, {
                        color: "gray.500",
                        fontSize: "sm",
                        children: (0, import_dayjs3.default)(p.created_at).format("ddd DD MMM, YYYY, HH:mm").toLocaleLowerCase()
                      }, void 0, !1, {
                        fileName: "app/modules/groups/group-payments.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/modules/groups/group-payments.tsx",
                    lineNumber: 90,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Td, {
                    color: "blue.500",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
                      to: `/users/${p.member.user.id}`,
                      children: p.member.user.displayName
                    }, void 0, !1, {
                      fileName: "app/modules/groups/group-payments.tsx",
                      lineNumber: 114,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-payments.tsx",
                    lineNumber: 113,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Td, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Flex, {
                      alignItems: "center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Icon, {
                          mr: "2",
                          as: p.transaction_type === "MoneyIn" ? import_fa.FaCoins : import_go2.GoArrowUp,
                          fontSize: "xl",
                          color: `${p.transaction_type === "MoneyIn" ? "teal" : "orange"}.500`
                        }, void 0, !1, {
                          fileName: "app/modules/groups/group-payments.tsx",
                          lineNumber: 121,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Text, {
                          color: `${p.transaction_type === "MoneyIn" ? "teal" : "orange"}.500`,
                          children: p.transaction_type === "MoneyIn" ? "deposit" : "withdraw"
                        }, void 0, !1, {
                          fileName: "app/modules/groups/group-payments.tsx",
                          lineNumber: 129,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/modules/groups/group-payments.tsx",
                      lineNumber: 120,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-payments.tsx",
                    lineNumber: 119,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Td, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Badge, {
                      w: "24",
                      variant: "outline",
                      colorScheme: statuses[p.transaction_status].color,
                      textTransform: "none",
                      textAlign: "center",
                      borderRadius: 6,
                      children: (_a2 = statuses[p.transaction_status].label) == null ? void 0 : _a2.toLocaleLowerCase()
                    }, void 0, !1, {
                      fileName: "app/modules/groups/group-payments.tsx",
                      lineNumber: 140,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/modules/groups/group-payments.tsx",
                    lineNumber: 139,
                    columnNumber: 15
                  }, this)
                ]
              }, p.id, !0, {
                fileName: "app/modules/groups/group-payments.tsx",
                lineNumber: 86,
                columnNumber: 13
              }, this);
            })
          }, void 0, !1, {
            fileName: "app/modules/groups/group-payments.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/modules/groups/group-payments.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/modules/groups/group-payments.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}, statuses = {
  Pending: {
    label: "Pending",
    color: "yellow"
  },
  Cancelled: {
    label: "Cancelled",
    color: "orange"
  },
  Completed: {
    label: "Completed",
    color: "teal"
  },
  Failed: {
    label: "Failed",
    color: "orange"
  },
  Processing: {
    label: "Processing",
    color: "blue"
  },
  Rejected: {
    label: "Rejected",
    color: "orange"
  }
};

// app/routes/groups.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "paygroup - groups"
}), handle3 = {
  breadcrumb: "groups",
  icon: import_hi2.HiOutlineUserGroup
}, loader = async ({ request }) => {
  let url = new URL(request.url);
  return fetchGroupPages({
    page: Number(url.searchParams.get("page") ?? 1),
    search: url.searchParams.get("search")
  });
};
function Index3() {
  let location = (0, import_react29.useLocation)();
  return location.pathname === "/groups" || location.pathname.startsWith("/groups?page=") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupListingPage, {}, void 0, !1, {
    fileName: "app/routes/groups.tsx",
    lineNumber: 31,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Outlet, {}, void 0, !1, {
    fileName: "app/routes/groups.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

// app/routes/groups/$groupid.tsx
var groupid_exports = {};
__export(groupid_exports, {
  default: () => Index4,
  handle: () => handle4,
  loader: () => loader2,
  meta: () => meta5
});
var import_react30 = require("@chakra-ui/react"), import_react31 = require("@remix-run/react");

// app/modules/groups/fetch-one-group.tsx
var fetchOneGroup = async ({
  groupid,
  paymentPage
}) => {
  let paymentOffset = paymentPage ? 10 * (paymentPage - 1) : 0;
  return genql.chain.query.group_by_pk({ id: groupid }).get({
    id: !0,
    created_at: !0,
    group_name: !0,
    group_balance: !0,
    user: {
      displayName: !0
    },
    members: {
      id: !0,
      user: {
        id: !0,
        displayName: !0
      }
    },
    payments: [
      {
        limit: 10,
        offset: paymentOffset,
        order_by: [{ created_at: "desc" }]
      },
      {
        id: !0,
        created_at: !0,
        amount: !0,
        transaction_type: !0,
        transaction_status: !0,
        member: {
          user: {
            id: !0,
            displayName: !0
          }
        }
      }
    ],
    payments_aggregate: {
      aggregate: {
        count: !0
      }
    }
  }).then((group) => ({
    ...group,
    members: group.members.map((m, i) => ({
      ...m,
      index: i + 1
    })),
    payments: group.payments.map((p, i) => ({
      ...p,
      index: i + paymentOffset + 1
    }))
  }));
};

// app/routes/groups/$groupid.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta5 = () => ({
  title: "paygroup - view group"
}), handle4 = {
  breadcrumb: "view group"
}, loader2 = async ({ params, request }) => {
  let url = new URL(request.url);
  return fetchOneGroup({
    groupid: params.groupid,
    paymentPage: Number(url.searchParams.get("paymentpage") ?? 1)
  });
};
function Index4() {
  let group = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react30.Flex, {
    flex: 1,
    className: "flex-1",
    flexDirection: { base: "column", lg: "row" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react30.Flex, {
        className: "flex-2",
        flex: { base: 1, xl: 2 },
        flexDirection: "column",
        mr: { base: "0", lg: "4" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupInfo, {
            group
          }, void 0, !1, {
            fileName: "app/routes/groups/$groupid.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupMembers, {
            group
          }, void 0, !1, {
            fileName: "app/routes/groups/$groupid.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/groups/$groupid.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react30.Flex, {
        className: "flex-3",
        flex: { base: 1, xl: 4 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react30.Box, {
          flex: 1,
          w: "100%",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupPayments, {
            group
          }, void 0, !1, {
            fileName: "app/routes/groups/$groupid.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/groups/$groupid.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/groups/$groupid.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/groups/$groupid.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index5,
  handle: () => handle5,
  meta: () => meta6
});
var import_fi5 = require("react-icons/fi");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta6 = () => ({
  title: "paygroup - dashboard"
}), handle5 = {
  breadcrumb: "dashboard",
  icon: import_fi5.FiGrid
};
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
    children: "content"
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  default: () => Index6,
  handle: () => handle6,
  meta: () => meta7
});
var import_bs3 = require("react-icons/bs");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta7 = () => ({
  title: "paygroup - users"
}), handle6 = {
  breadcrumb: "users",
  icon: import_bs3.BsPeople
};
function Index6() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
    children: "users"
  }, void 0, !1, {
    fileName: "app/routes/users.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "909490a1", entry: { module: "/build/entry.client-YF5ECO45.js", imports: ["/build/_shared/chunk-ODAAP2UF.js", "/build/_shared/chunk-VPA7XQ5U.js", "/build/_shared/chunk-TTBKISHK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4LVJR237.js", imports: ["/build/_shared/chunk-ANK5OC4P.js", "/build/_shared/chunk-7IAW3YJE.js", "/build/_shared/chunk-M4UWSHHM.js", "/build/_shared/chunk-G5OWRXFA.js", "/build/_shared/chunk-T6ZXCNQ2.js", "/build/_shared/chunk-QVQILZAS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/groups": { id: "routes/groups", parentId: "root", path: "groups", index: void 0, caseSensitive: void 0, module: "/build/routes/groups-2P54DPPM.js", imports: ["/build/_shared/chunk-PTRXLVNF.js", "/build/_shared/chunk-STHWEOFW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/groups/$groupid": { id: "routes/groups/$groupid", parentId: "routes/groups", path: ":groupid", index: void 0, caseSensitive: void 0, module: "/build/routes/groups/$groupid-BABEBPZ3.js", imports: ["/build/_shared/chunk-7IAW3YJE.js", "/build/_shared/chunk-M4UWSHHM.js", "/build/_shared/chunk-QVQILZAS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CRQ55XFY.js", imports: ["/build/_shared/chunk-STHWEOFW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/payments": { id: "routes/payments", parentId: "root", path: "payments", index: void 0, caseSensitive: void 0, module: "/build/routes/payments-DMGB3723.js", imports: ["/build/_shared/chunk-STHWEOFW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-CQEVHUPZ.js", imports: ["/build/_shared/chunk-STHWEOFW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-W3OCLCRM.js", imports: ["/build/_shared/chunk-STHWEOFW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-909490A1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/payments": {
    id: "routes/payments",
    parentId: "root",
    path: "payments",
    index: void 0,
    caseSensitive: void 0,
    module: payments_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/groups": {
    id: "routes/groups",
    parentId: "root",
    path: "groups",
    index: void 0,
    caseSensitive: void 0,
    module: groups_exports
  },
  "routes/groups/$groupid": {
    id: "routes/groups/$groupid",
    parentId: "routes/groups",
    path: ":groupid",
    index: void 0,
    caseSensitive: void 0,
    module: groupid_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
