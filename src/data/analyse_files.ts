
export const analyseFiles = [
    "sem_data_20252_mfn1",
    "sem_data_20262_mfn1",
    "sem_data_20262_mfn3",
    "sem_data_20262_ml",
    "nwi_20262_fs1",
    "mbt_20262_fs1",
    "kikoi_20262_fs1",
    "biobig_20262_fs1",
    "inf_20262_fs1",
    "mbt_20262_fs3",
    "nwi_20262_fs3",
    "kikoi_20262_fs3",
    "biobig_20262_fs3",
    "inf_20262_fs3","inf_20262_fs5"
] as const;

export type AnalyseFile = (typeof analyseFiles)[number];

