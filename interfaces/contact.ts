export interface CreateInquiryResponse {
    message: string;
    data: {
        _id: string;
        fullName: string;
        email?: string;
        phone: string;
        location: string;
        venue?: string;
        eventDate: string;
        vision?: string;
        ipAddress?: string;
        userAgent?: string;
        deviceType?: string;
        createdAt: string;
        updatedAt: string;
        __v?: number;
    };
}
