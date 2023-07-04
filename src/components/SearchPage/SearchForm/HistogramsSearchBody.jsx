import React from "react";
import { useDispatch } from "react-redux";
import { Histograms } from "../../../store/Slicers/HistogramsSlicer";

const HistogramsSearchBody = ({ inn, tonality, count, startDate, endDate }) => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem("accessToken");
    const body = {
        issueDateInterval: {
            startDate: startDate,
            endDate: endDate,
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: inn,
                        maxFullness: true,
                        inBusinessNews: null,
                    },
                ],
                onlyMainRole: true,
                tonality: tonality,
                onlyWithRiskFactors: false,
                riskFactors: {
                    and: [],
                    or: [],
                    not: [],
                },
                themes: {
                    and: [],
                    or: [],
                    not: [],
                },
            },
            themesFilter: {
                and: [],
                or: [],
                not: [],
            },
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true,
        },
        similarMode: "duplicates",
        limit: count,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
    };

    dispatch(Histograms(accessToken, body));
};

export { HistogramsSearchBody };
