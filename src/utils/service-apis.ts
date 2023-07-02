import { Configuration } from "@/client-axios";
import { 
  AuthServiceApi, 
  RoleServiceApi, 
  MenuServiceApi, 
  PageServiceApi, 
  ManagerServiceApi, 
  ApiServiceApi  } from "@/client-axios/api";
import axios, { AxiosInstance } from "axios";

export class ServiceApi {
  
  private token : string | null;
  private configuration : Configuration;
  private axiosService : AxiosInstance;

  constructor() {

    this.token = this.getAccessToken();
    this.configuration = new Configuration({
      basePath: process.env.VUE_APP_API_URL,
    });

    console.log(process.env.VUE_APP_API_URL);

    // Axios Service
    this.axiosService = axios.create({
      baseURL: this.configuration.basePath,
      headers: {
        // Authorization: authStore.state.token,
        Authorization: `Bearer ${this.getAccessToken()}`
      },
    });

    // Interceptor
    this.axiosService.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosService.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        
        return Promise.reject(error);
      }
    );
  }

  private getAccessToken() : string | null {
    return sessionStorage.getItem("access-token");
  }

  private getRefreshToken() : string | null {
    return sessionStorage.getItem("refresh-token");
  }

  /** Auth Service API Client */
  public authServiceApi() : AuthServiceApi {

    return new AuthServiceApi(
      this.configuration,
      this.configuration.basePath,
      this.axiosService
    )
  }

  /** API Service API Client */
  public apiServiceApi() : ApiServiceApi {

    return new ApiServiceApi(
      this.configuration,
      this.configuration.basePath,
      this.axiosService
    )
  }

  /** Manager Service API Client */
  public managerServiceApi() : ManagerServiceApi {

    return new ManagerServiceApi(
      this.configuration,
      this.configuration.basePath,
      this.axiosService
    )
  }  

  /** Menu Service API Client */
  public menuServiceApi() : MenuServiceApi {

    return new MenuServiceApi(
      this.configuration,
      this.configuration.basePath,
      this.axiosService
    )
  }   
  
  /** Page Service API Client */
  public pageServiceApi() : PageServiceApi {

    return new PageServiceApi(
      this.configuration,
      this.configuration.basePath,
      this.axiosService
    )
  }

  /** Role Service API Client */
  public roleServiceApi() : RoleServiceApi {

    return new RoleServiceApi(
      this.configuration,
      this.configuration.basePath,
      this.axiosService
    )
  }
}