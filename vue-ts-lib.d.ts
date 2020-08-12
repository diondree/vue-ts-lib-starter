import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const VueTsLib: { install: InstallFunction };
export default VueTsLib;

export const VueTsLibSample: VueConstructor<Vue>;
