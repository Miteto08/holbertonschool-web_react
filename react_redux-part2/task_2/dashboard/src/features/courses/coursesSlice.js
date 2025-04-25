import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logout } from '../auth/authSlice';

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async () => {
        const response = await axios.get('http://localhost:5173/courses.json');
        return response.data.courses;
    }
);

const initialState = {
    courses: [],
    status: 'idle',
    error: null
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        clearCourses: (state) => {
            state.courses = [];
            state.status = 'idle';
            state.error = null;
        },
        selectCourse: (state, action) => {
            const courseId = action.payload;
            const course = state.courses.find(course => course.id === courseId);
            if (course) {
                course.isSelected = true;
            }
        },
        unSelectCourse: (state, action) => {
            const courseId = action.payload;
            const course = state.courses.find(course => course.id === courseId);
            if (course) {
                course.isSelected = false;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = action.payload.map(course => ({
                    ...course,
                    isSelected: false
                }));
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || 'Failed to fetch courses';
            })
            .addCase(logout, (state) => {
                state.courses = [];
                state.status = 'idle';
                state.error = null;
            });
    }
});

export const { clearCourses, selectCourse, unSelectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
