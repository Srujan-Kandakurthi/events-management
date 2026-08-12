import axios from "axios";
import type { CreateInquiryResponse } from "@/interfaces/contact";

export default class ContactService {
    static readonly apiUrl = process.env.NEXT_PUBLIC_API_URL;

    static async createInquiry(data: FormData): Promise<CreateInquiryResponse> {
        const response = await axios.post<CreateInquiryResponse>(
            `${this.apiUrl}/visitors`,
            data,
        );
        return response.data;
    }

}