import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import mockPrediction from "../mocks/mockPrediction";
import providerWrapper from "../mocks/providerWrapper";
import { getPredictionActionCreator } from "../redux/features/predictionSlice/predictionSlice";
import { store } from "../redux/store";
import useWeather from "./useWeather";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useWeather custom hook", () => {
  describe("When it's method loadCityWeather is invoked with a correct city name", () => {
    test("Then it should invoke dispatch with getPredictionActionCreator and return the weather of a city", async () => {
      const {
        result: {
          current: { loadCityWeather },
        },
      } = renderHook(() => useWeather(), {
        wrapper: providerWrapper,
      });

      const cityName = "Reus";

      await act(async () => await loadCityWeather(cityName));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          getPredictionActionCreator(mockPrediction)
        )
      );
    });
  });

  describe("When it's method loadCityWeather is invoked with a incorrect city name", () => {
    test("Then it should received a Bad request status  400", async () => {
      const {
        result: {
          current: { loadCityWeather },
        },
      } = renderHook(() => useWeather(), {
        wrapper: providerWrapper,
      });

      const cityName = "R";
      const status = 400;

      await act(async () => await loadCityWeather(cityName));

      await waitFor(() => expect(status).toStrictEqual(400));
    });
  });
});
