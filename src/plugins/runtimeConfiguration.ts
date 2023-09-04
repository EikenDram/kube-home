// runtime configuration

import type { App, Plugin } from 'vue';

// runtime configuration
export interface RuntimeConfiguration {
    // list of applications
    apps: AppConfiguration[]

    // cluster configuration
    cluster: ClusterConfiguration
}

// application configuration
export interface AppConfiguration {
    // name
    name: string
    // description
    desc: string
    // url to app
    url: string
    // url to app documentation
    docs: string
    // app logo
    logo: ImageConfiguration
}

// cluster configuration
export interface ClusterConfiguration {
    // cluster name
    name: string
    // cluster logo
    logo: ImageConfiguration
    // cluster contacts
    contacts: ContactConfiguration[]
    // cluster services
    services: ServiceConfiguration[]
    // cluster utils
    utils: ServiceConfiguration[]
    // cluster system components
    system: ServiceConfiguration[]
    // cluster specifications
    specs: SpecConfiguration[]
}

// contact configuration
export interface ContactConfiguration {
    // contact title
    title: string
    // contact name
    name: string
    // contact phone
    phone: string
    // contact mail
    mail: string
    // contact avatar
    avatar: AvatarConfiguration
    // contact icon
    icon: string
}

// avatar configuration
export interface AvatarConfiguration {
    // avatar image
    image: string
    // avatar color
    color: string
    // avatar icon
    icon: string
    // avatar icon color
    iconColor: string
}

// specification configuration
export interface SpecConfiguration {
    // specification name
    name: string
    // specification value
    value: string
    // specification icon
    icon: string
    // specification avatar
    avatar: AvatarConfiguration
}

// service configuration
export interface ServiceConfiguration {
    // service name
    name: string
    // service description
    desc: string
    // service url
    url: string
    // service icon
    icon: string
    // service avatar
    avatar: AvatarConfiguration
}

// image configuration
export interface ImageConfiguration {
    // image url
    url: string
    // image height
    height: string
}

// runtime configuration options
export interface RuntimeConfigurationOptions {
    variables: RuntimeConfiguration
}

export const runtimeConfiguration: Plugin = {
    install: (app: App, options: RuntimeConfigurationOptions) => {
        //Runtime configuration variables can be accessed from injection : `runtimeConfiguration`.
        app.config.globalProperties.$runtimeConfiguration = options.variables

        // They can also be accessed from global property `$runtimeConfiguration`
        app.provide("runtimeConfiguration", options.variables)
    }
}

/**
 * Loads runtime configuration from static file (in /public folder).
 */
export const loadRuntimeConfiguration = async (): Promise<RuntimeConfigurationOptions> => {
    const resp = await fetch('/config.json')
    const value = await resp.json()

    // not type safe but
    return {
        variables: value as RuntimeConfiguration
    } as RuntimeConfigurationOptions
}