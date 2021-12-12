import { PropType } from "vue";
declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"primary" | "success" | "warning" | "danger" | "info" | "default">;
        default: string;
        validator: (val: string) => boolean;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    round: BooleanConstructor;
}, {
    classs: import("vue").ComputedRef<(string | {
        "is-disabled": boolean;
        "is-loading": boolean;
        "is-round": boolean;
    })[]>;
    handleClick: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    size?: unknown;
    icon?: unknown;
    loading?: unknown;
    disabled?: unknown;
    round?: unknown;
} & {
    type: "primary" | "success" | "warning" | "danger" | "info" | "default";
    icon: string;
    loading: boolean;
    disabled: boolean;
    round: boolean;
} & {
    size?: ComponentSize;
}> & {
    onClick?: (...args: any[]) => any;
}, {
    type: "primary" | "success" | "warning" | "danger" | "info" | "default";
    icon: string;
    loading: boolean;
    disabled: boolean;
    round: boolean;
}>;
export default _default;
