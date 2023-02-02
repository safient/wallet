export const useNavigate = (history: { goBack: () => void }) => {
	history.goBack();
};
