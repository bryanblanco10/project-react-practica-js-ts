import { Module } from "@/models";
import { useAuthStore } from "@/store";


export const useHasPermission = () => {
  const { user } = useAuthStore();
  const modulePermission = user?.modules;

  const modules : Module[] = [];

  modulePermission.forEach((el: Module) => {
    modules.push({
      moduleUuid: el.moduleUuid,
      permission: el.permission
    });
  });
  
  const hasPermission = (moduleUuid: string, permission: string) => {
    const allowedModule = modules.find(el => el.moduleUuid == moduleUuid);
    return allowedModule && allowedModule.permission.includes(permission)
  }

  return {
    hasPermission
  }
}

// export const hasPermissionModule = (moduleUuid) => {
//   const modulePermission = store.getters['user/getUser'].modules
//   const modules = [];

//   modulePermission.forEach(el => {
//     modules.push({
//       moduleUuid: el.moduleUuid,
//     });
//   });
//   return modules.find(el => el.moduleUuid == moduleUuid);
// }