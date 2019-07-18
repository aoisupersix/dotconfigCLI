
/**
 * ConnectionConfigのDB接続先設定名
 */
export const dbSettingName = 'DgConnectionString'

export interface IConnectionConfig {
    db: IConnectionSetting[]
    blob: IConnectionSetting[]
}

export interface IConnectionSetting {
    name: string
    connectionString: string
    providerName: string | null
}
