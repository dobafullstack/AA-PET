import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Accessory from "../../models/Accessory";

type StateType = {
    attributes: Accessory[];
    attribute: Accessory;
    loading: boolean;
    message: string;
};

type EditAttribute = {
    _id?: string;
    name: string;
    field: string;
    types: Array<{name: string, _id: string}>;
};

const initialState: StateType = {
    attributes: [],
    attribute: {
        _id: "",
        name: "",
        unit: "",
        types: [],
        field: "",
        created_at: "",
        updated_at: "",
    },
    loading: false,
    message: "",
};

const attributeSlice = createSlice({
    name: "attribute",
    initialState,
    reducers: {
        getAttributeRequired(state) {
            state.loading = true;
        },
        getAttributeFailed(state, { payload }: PayloadAction<string>) {
            state.message = payload;
        },
        getListAttributes(state, { payload }: PayloadAction<Accessory[]>) {
            state.attributes = [];

            state.attributes = state.attributes.concat(payload);
            state.loading = false;
            state.message = "";
        },
        getDetailAttribute(state, { payload }: PayloadAction<Accessory>) {
            state.attribute = payload;
            state.loading = false;
            state.message = "";
        },
        deleteAttribute(state, { payload }: PayloadAction<string>) {
            state.attributes = state.attributes.filter(
                (item) => item._id !== payload
            );

            state.loading = false;
        },
        editAttribute(state, { payload }: PayloadAction<EditAttribute>) {
            const index = state.attributes.findIndex(
                (item) => item._id === payload._id
            );

            if (index >= 0) {
                state.attributes[index].name = payload.name;
                state.attributes[index].field = payload.field;
                state.attributes[index].types = payload.types;

                state.attribute.name = payload.name;
                state.attribute.field = payload.field;
                state.attribute.types = payload.types;
            }

            state.loading = false;
        },
        createAttribute(state, { payload }: PayloadAction<EditAttribute>) {
            state.attributes.push({
                ...payload,
                unit: '',
                created_at: '',
                updated_at: '',
                _id: ''
            });

            state.loading = false;
        },
    },
});

export default attributeSlice.reducer;

export const {
    getListAttributes,
    getDetailAttribute,
    getAttributeRequired,
    getAttributeFailed,
    deleteAttribute,
    editAttribute,
    createAttribute,
} = attributeSlice.actions;
