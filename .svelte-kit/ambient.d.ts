
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const ZELLIJ_SESSION_NAME: string;
	export const SNAP_INSTANCE_KEY: string;
	export const SNAP_COMMON: string;
	export const __EGL_VENDOR_LIBRARY_DIRS: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const FONTCONFIG_PATH: string;
	export const GIO_MODULE_DIR: string;
	export const STARSHIP_SHELL: string;
	export const LIBVA_DRIVERS_PATH: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const SNAP_UID: string;
	export const XDG_CACHE_HOME: string;
	export const npm_config_noproxy: string;
	export const XLOCALEDIR: string;
	export const SNAP_LIBRARY_PATH: string;
	export const HOME: string;
	export const DESKTOP_SESSION: string;
	export const CAML_LD_LIBRARY_PATH: string;
	export const SNAP_USER_DATA: string;
	export const npm_package_json: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const OCAML_TOPLEVEL_PATH: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const MANAGERPID: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const SNAP_REVISION: string;
	export const COLOR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_config_metrics_registry: string;
	export const GST_PLUGIN_SCANNER: string;
	export const IM_CONFIG_PHASE: string;
	export const ALACRITTY_SOCKET: string;
	export const LOGNAME: string;
	export const XKB_CONFIG_ROOT: string;
	export const SNAP_CONTEXT: string;
	export const JOURNAL_STREAM: string;
	export const WINDOWID: string;
	export const npm_config_prefix: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const SNAP_VERSION: string;
	export const ALACRITTY_LOG: string;
	export const USERNAME: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const SNAP_INSTANCE_NAME: string;
	export const WINDOWPATH: string;
	export const VDPAU_DRIVER_PATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const INVOCATION_ID: string;
	export const SESSION_MANAGER: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const TOKYONIGHT: string;
	export const GST_PLUGIN_SYSTEM_PATH: string;
	export const BAMF_DESKTOP_FILE_HINT: string;
	export const XDG_RUNTIME_DIR: string;
	export const SNAP_DATA: string;
	export const XDG_MENU_PREFIX: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XAUTHORITY: string;
	export const XDG_DATA_HOME: string;
	export const ZELLIJ_PANE_ID: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XMODIFIERS: string;
	export const XDG_CONFIG_HOME: string;
	export const npm_lifecycle_script: string;
	export const ZELLIJ: string;
	export const SNAP_USER_COMMON: string;
	export const SNAP_ARCH: string;
	export const SNAP_COOKIE: string;
	export const OPAMNOENVNOTICE: string;
	export const SSH_AUTH_SOCK: string;
	export const DB_IP: string;
	export const GDK_PIXBUF_MODULEDIR: string;
	export const GST_PLUGIN_PATH: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const SNAP_REEXEC: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const DB_PASS: string;
	export const SNAP_NAME: string;
	export const FONTCONFIG_FILE: string;
	export const XCURSOR_PATH: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const GPG_AGENT_INFO: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const OPAM_SWITCH_PREFIX: string;
	export const SNAP_LAUNCHER_ARCH_TRIPLET: string;
	export const QT_IM_MODULE: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const LC_ALL: string;
	export const npm_config_globalignorefile: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const SNAP_REAL_HOME: string;
	export const npm_config_global_prefix: string;
	export const SNAP_EUID: string;
	export const STARSHIP_SESSION_KEY: string;
	export const SNAP: string;
	export const QTWEBENGINE_DICTIONARIES_PATH: string;
	export const npm_command: string;
	export const MANPATH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const LIBGL_DRIVERS_PATH: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		ZELLIJ_SESSION_NAME: string;
		SNAP_INSTANCE_KEY: string;
		SNAP_COMMON: string;
		__EGL_VENDOR_LIBRARY_DIRS: string;
		USER: string;
		npm_config_user_agent: string;
		FONTCONFIG_PATH: string;
		GIO_MODULE_DIR: string;
		STARSHIP_SHELL: string;
		LIBVA_DRIVERS_PATH: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		SNAP_UID: string;
		XDG_CACHE_HOME: string;
		npm_config_noproxy: string;
		XLOCALEDIR: string;
		SNAP_LIBRARY_PATH: string;
		HOME: string;
		DESKTOP_SESSION: string;
		CAML_LD_LIBRARY_PATH: string;
		SNAP_USER_DATA: string;
		npm_package_json: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		OCAML_TOPLEVEL_PATH: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		MANAGERPID: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		SNAP_REVISION: string;
		COLOR: string;
		DEBUGINFOD_URLS: string;
		npm_config_metrics_registry: string;
		GST_PLUGIN_SCANNER: string;
		IM_CONFIG_PHASE: string;
		ALACRITTY_SOCKET: string;
		LOGNAME: string;
		XKB_CONFIG_ROOT: string;
		SNAP_CONTEXT: string;
		JOURNAL_STREAM: string;
		WINDOWID: string;
		npm_config_prefix: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		SNAP_VERSION: string;
		ALACRITTY_LOG: string;
		USERNAME: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		SNAP_INSTANCE_NAME: string;
		WINDOWPATH: string;
		VDPAU_DRIVER_PATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		INVOCATION_ID: string;
		SESSION_MANAGER: string;
		NODE: string;
		npm_package_name: string;
		TOKYONIGHT: string;
		GST_PLUGIN_SYSTEM_PATH: string;
		BAMF_DESKTOP_FILE_HINT: string;
		XDG_RUNTIME_DIR: string;
		SNAP_DATA: string;
		XDG_MENU_PREFIX: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XAUTHORITY: string;
		XDG_DATA_HOME: string;
		ZELLIJ_PANE_ID: string;
		XDG_SESSION_DESKTOP: string;
		XMODIFIERS: string;
		XDG_CONFIG_HOME: string;
		npm_lifecycle_script: string;
		ZELLIJ: string;
		SNAP_USER_COMMON: string;
		SNAP_ARCH: string;
		SNAP_COOKIE: string;
		OPAMNOENVNOTICE: string;
		SSH_AUTH_SOCK: string;
		DB_IP: string;
		GDK_PIXBUF_MODULEDIR: string;
		GST_PLUGIN_PATH: string;
		SHELL: string;
		npm_lifecycle_event: string;
		SNAP_REEXEC: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		DB_PASS: string;
		SNAP_NAME: string;
		FONTCONFIG_FILE: string;
		XCURSOR_PATH: string;
		GJS_DEBUG_OUTPUT: string;
		GPG_AGENT_INFO: string;
		GDK_PIXBUF_MODULE_FILE: string;
		OPAM_SWITCH_PREFIX: string;
		SNAP_LAUNCHER_ARCH_TRIPLET: string;
		QT_IM_MODULE: string;
		ALACRITTY_WINDOW_ID: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		LC_ALL: string;
		npm_config_globalignorefile: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		SNAP_REAL_HOME: string;
		npm_config_global_prefix: string;
		SNAP_EUID: string;
		STARSHIP_SESSION_KEY: string;
		SNAP: string;
		QTWEBENGINE_DICTIONARIES_PATH: string;
		npm_command: string;
		MANPATH: string;
		MEMORY_PRESSURE_WRITE: string;
		LIBGL_DRIVERS_PATH: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
