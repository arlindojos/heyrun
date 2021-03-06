import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import { postSaveAction } from "./controller/PostSaveAction";
import { postUpdateAction } from "./controller/PostUdateAction";
import { postDeleteAction } from "./controller/PostDeleteAction";
import { postMailerAction } from "./controller/PostMailerAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/api/login",
        method: "post",
        action: postGetAllAction
    },
    {
        path: "/api/send",
        method: "post",
        action: postMailerAction
    },
    {
        path: "/api/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/api",
        method: "post",
        action: postSaveAction
    },
    {
        path: "/api/:id",
        method: "put",
        action: postUpdateAction
    },
    {
        path: "/api/:id",
        method: "delete",
        action: postDeleteAction
    }
];